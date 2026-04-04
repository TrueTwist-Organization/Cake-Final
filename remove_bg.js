const { Jimp } = require('jimp');

async function processImage(inputPath, outputPath) {
    try {
        let image;
        try {
            image = await Jimp.read(inputPath);
        } catch (e) {
            const Jimp_old = require('jimp');
            image = await Jimp_old.read(inputPath);
        }

        const width = image.bitmap.width;
        const height = image.bitmap.height;
        const data = image.bitmap.data;
        
        // visited array
        const visited = new Uint8Array(width * height);
        
        function getPixel(x, y) {
            const idx = (y * width + x) * 4;
            return { r: data[idx], g: data[idx+1], b: data[idx+2], a: data[idx+3], idx };
        }
        
        // Slightly looser background check for the edges
        function isBg(r, g, b) {
            return (r > 230 && g > 230 && b > 230);
        }

        const queue = [];
        let head = 0; // use index to avoid shift() performance hit

        function enqueueBg(x, y) {
            if (x < 0 || x >= width || y < 0 || y >= height) return;
            const pos = y * width + x;
            if (visited[pos]) return;
            
            const p = getPixel(x, y);
            if (isBg(p.r, p.g, p.b)) {
                visited[pos] = 1;
                queue.push({x, y});
            }
        }
        
        // Start from corners and middle of edges just in case
        enqueueBg(0, 0);
        enqueueBg(width-1, 0);
        enqueueBg(0, height-1);
        enqueueBg(width-1, height-1);
        enqueueBg(Math.floor(width/2), 0);
        enqueueBg(0, Math.floor(height/2));
        
        // Flood fill
        while (head < queue.length) {
            const {x, y} = queue[head++];
            
            // Set transparent
            const idx = (y * width + x) * 4;
            data[idx + 3] = 0; // alpha
            
            // Check neighbors
            enqueueBg(x+1, y);
            enqueueBg(x-1, y);
            enqueueBg(x, y+1);
            enqueueBg(x, y-1);
        }
        
        // Simple Edge antialiasing / softening
        // Find boundary pixels
        for (let y = 1; y < height - 1; y++) {
            for (let x = 1; x < width - 1; x++) {
                const pos = y * width + x;
                if (!visited[pos]) {
                    let bgNeighbors = 0;
                    if (visited[pos-1]) bgNeighbors++;
                    if (visited[pos+1]) bgNeighbors++;
                    if (visited[pos-width]) bgNeighbors++;
                    if (visited[pos+width]) bgNeighbors++;
                    
                    if (bgNeighbors > 0) {
                        const p = getPixel(x, y);
                        // Depending on how bright the pixel is, soften it
                        const brightness = (p.r + p.g + p.b) / 3;
                        if (brightness > 200) {
                            data[p.idx + 3] = 80; // High transparency for bright white edges
                        } else if (brightness > 150) {
                            data[p.idx + 3] = 180; // Mid transparency
                        }
                    }
                }
            }
        }
        
        await image.write(outputPath);
        console.log("Successfully flood-filled background for " + outputPath);
    } catch (err) {
        console.error("Error processing image " + inputPath + ":", err);
    }
}

async function main() {
    await processImage(
        "images/Cupcakes/Caramel Macchiato Cupcakes/Toffee.jpeg",
        "images/Cupcakes/Caramel Macchiato Cupcakes/Toffee.png"
    );
    await processImage(
        "images/Bakery/Artisan French Macarons (Box of 12)/Salted Caramel.jpeg",
        "images/Bakery/Artisan French Macarons (Box of 12)/Salted Caramel.png"
    );
}

main();

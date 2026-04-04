import fs from 'fs';

const token = "r8_5Qokh5KArgXTK0UGvefSZD8VRNVeR3S3SP2TY";

const productsStr = fs.readFileSync('assets/js/products.js', 'utf8');
// A bit hacky but we can parse the products array by isolating it
const arrayMatch = productsStr.match(/const products = (\[[\s\S]*?\]);\n\nexport default products;/);

if (!arrayMatch) {
    console.error("Failed to extract products array");
    process.exit(1);
}

// We can evaluate the string to get the JS object
let products;
eval("products = " + arrayMatch[1]);

async function generateImage(promptText) {
    try {
        const res = await fetch("https://api.replicate.com/v1/models/black-forest-labs/flux-schnell/predictions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json",
                "Prefer": "wait"
            },
            body: JSON.stringify({
                input: {
                    prompt: promptText + ", professional food photography, 4k, bakery style, elegant composition",
                    aspect_ratio: "1:1"
                }
            })
        });

        if (!res.ok) {
            console.error("Error from API:", await res.text());
            return null;
        }

        const data = await res.json();
        if (data && data.output && data.output.length > 0) {
            return data.output[0];
        }
    } catch(err) {
        console.error("Fetch Exception:", err);
    }
    return null;
}

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

async function run() {
    console.log("Starting to generate 45 images...");
    for (let p of products) {
        console.log(`Processing Product: ${p.name}`);
        for (let flavor of p.flavors) {
            const prompt = `A delicious ${flavor} flavor ${p.name} (${p.category})`;
            console.log("  Generating for:", flavor);
            const url = await generateImage(prompt);
            if (url) {
                p.flavorImages[flavor] = url;
            } else {
                console.log("  Failed to generate image, keeping original");
            }
            // Sleep slightly to respect rate limits
            await sleep(500);
        }
        // Update main image to first flavor
        p.image = p.flavorImages[p.flavors[0]];
    }

    const newContent = `const products = ${JSON.stringify(products, null, 2)};\n\nexport default products;\n`;
    fs.writeFileSync('assets/js/products.js', newContent);
    console.log("Successfully updated products.js with Replicate images!");
}

run();

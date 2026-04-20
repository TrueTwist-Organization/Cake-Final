import fs from 'fs';

const token = "r8_5Qokh5KArgXTK0UGvefSZD8VRNVeR3S3SP2TY";

const productsStr = fs.readFileSync('assets/js/products.js', 'utf8');
const arrayMatch = productsStr.match(/const products = (\[[\s\S]*?\]);\n\nexport default products;/);

if (!arrayMatch) {
    console.error("Failed to extract products array");
    process.exit(1);
}

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
                    prompt: promptText + ", professional food photography, 4k, bakery style, elegant composition, white background",
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

async function run() {
    console.log("Renaming Hazelnut to Pistachio and generating new images...");
    
    for (let p of products) {
        // Find index of Hazelnut in flavors
        const hazelnutIndex = p.flavors.indexOf("Hazelnut");
        if (hazelnutIndex !== -1) {
            console.log(`Found Hazelnut in Product ID ${p.id}: ${p.name}`);
            
            // Replace flavour name
            p.flavors[hazelnutIndex] = "Pistachio";
            
            // Generate for Pistachio
            const prompt = `A delicious Pistachio flavor ${p.name} (${p.category})`;
            console.log("  Generating for: Pistachio");
            const url = await generateImage(prompt);
            
            if (url) {
                // Remove old Hazelnut image and add Pistachio
                delete p.flavorImages["Hazelnut"];
                p.flavorImages["Pistachio"] = url;
                console.log("  Successfully updated image.");
            } else {
                console.log("  Failed to generate image.");
            }
        }

        // Catch Hazelnut Mocha in cupcakes too
        const hazelnutMochaIndex = p.flavors.indexOf("Hazelnut Mocha");
         if (hazelnutMochaIndex !== -1) {
            console.log(`Found Hazelnut Mocha in Product ID ${p.id}: ${p.name}`);
            p.flavors[hazelnutMochaIndex] = "Roasted Coffee";
            const prompt = `A delicious Roasted Coffee flavor ${p.name} (${p.category})`;
            console.log("  Generating for: Roasted Coffee");
            const url = await generateImage(prompt);
            if (url) {
                delete p.flavorImages["Hazelnut Mocha"];
                p.flavorImages["Roasted Coffee"] = url;
            }
        }
    }

    const newContent = `const products = ${JSON.stringify(products, null, 2)};\n\nexport default products;\n`;
    fs.writeFileSync('assets/js/products.js', newContent);
    console.log("Successfully updated products.js!");
}

run();

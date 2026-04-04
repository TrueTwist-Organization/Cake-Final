import fs from 'fs';
import path from 'path';

const productsFilePath = 'c:/Users/hp/Desktop/New Cake/assets/js/products.js';
const imagesDir = 'c:/Users/hp/Desktop/New Cake/images';

function getImagesMap(dir) {
    const map = {};
    if (!fs.existsSync(dir)) return map;
    const items = fs.readdirSync(dir, { withFileTypes: true });

    for (const item of items) {
        if (item.isDirectory()) {
            const category = item.name;
            map[category] = {};
            const categoryPath = path.join(dir, category);
            const products = fs.readdirSync(categoryPath, { withFileTypes: true });

            for (const product of products) {
                if (product.isDirectory()) {
                    const productName = product.name;
                    map[category][productName] = {};
                    const productPath = path.join(categoryPath, productName);
                    const flavors = fs.readdirSync(productPath, { withFileTypes: true });

                    for (const flavor of flavors) {
                        if (flavor.isFile() && (flavor.name.endsWith('.png') || flavor.name.endsWith('.jpg') || flavor.name.endsWith('.jpeg'))) {
                            const flavorName = path.parse(flavor.name).name;
                            const relativePath = `images/${category}/${productName}/${flavor.name}`.replace(/\\/g, '/');
                            map[category][productName][flavorName] = relativePath;
                        }
                    }
                }
            }
        }
    }
    return map;
}

const imagesMap = getImagesMap(imagesDir);

const fileContent = fs.readFileSync(productsFilePath, 'utf-8');
const productsMatch = fileContent.match(/const products = ([\s\S]*?);[\s\n]*export default products;/);

if (!productsMatch) {
    console.error("Could not find products array in products.js");
    process.exit(1);
}

let products;
try {
    const productsStr = productsMatch[1];
    const cleanedStr = productsStr.replace(/^\s*\/\/.*$/gm, '').replace(/\/\*[\s\S]*?\*\//g, '');
    products = eval(`(${cleanedStr})`);
} catch (e) {
    console.error("Error parsing products array:", e);
    process.exit(1);
}

let updatedCount = 0;
const missing = [];

const updatedProducts = products.map(product => {
    const originalCategory = (product.category || "").trim();
    const name = (product.name || "").trim();

    // Normalize category name for mapping
    const categorySearchPaths = [
        originalCategory,
        originalCategory.replace(' Cakes', '').trim(),
        originalCategory.replace('Special', '').trim(),
        originalCategory.replace(' Cakes', 's').trim(),
        originalCategory.replace(' Theme Cakes', ' Special').trim(),
        originalCategory.replace('Gift ', '').trim(),
        originalCategory.replace(' Products', '').trim(),
        originalCategory.replace('Specific', '').trim(),
        originalCategory + 's',
        'Occasions',
        'Dietary',
        'Bakery',
        'Baby Shower'
    ];
    
    let productImages = null;
    let foundCategory = null;
    for (const catKey of categorySearchPaths) {
        if (imagesMap[catKey]) {
            // Check for exact name match
            if (imagesMap[catKey][name]) {
                productImages = imagesMap[catKey][name];
                foundCategory = catKey;
                break;
            }
            // Check for fuzzy name match (e.g. for Blueberry Muffins case)
            const fuzzyMatch = Object.keys(imagesMap[catKey]).find(
                folderName => folderName.startsWith(name.substring(0, 10)) || folderName.includes(name) || name.includes(folderName)
            );
            if (fuzzyMatch) {
                productImages = imagesMap[catKey][fuzzyMatch];
                foundCategory = catKey;
                break;
            }
        }
    }

    if (productImages) {
        const newFlavorsFromDir = Object.keys(productImages);
        if (newFlavorsFromDir.length > 0) {
            product.flavors = newFlavorsFromDir;
            product.flavorImages = productImages;
            
            // Re-set main image
            const currentFlavor = Object.keys(productImages).find(f => productImages[f] === product.image);
            if (!currentFlavor) {
                // Look for flavor name match
                const flavorMatch = newFlavorsFromDir.find(f => product.image && product.image.includes(f));
                if (flavorMatch) {
                    product.image = productImages[flavorMatch];
                } else {
                    product.image = productImages[newFlavorsFromDir[0]];
                }
            }
            updatedCount++;
        }
    } else {
        missing.push(`${name} (${originalCategory})`);
    }
    return product;
});

const newFileContent = `const products = ${JSON.stringify(updatedProducts, null, 2)};\n\nexport default products;`;
fs.writeFileSync(productsFilePath, newFileContent);

console.log(`Summary:`);
console.log(`- Products updated: ${updatedCount}`);
console.log(`- Products missing folder: ${missing.length}`);
if (missing.length > 0) {
    console.log(`Missing products/folders:`);
    missing.forEach(m => console.log(`  - ${m}`));
}

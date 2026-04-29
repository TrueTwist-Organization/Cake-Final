const fs = require('fs');
const path = require('path');

function replaceInFile(filePath, regexReplacements) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;
    regexReplacements.forEach(r => {
        content = content.replace(r.regex, r.replacement);
    });
    if (content !== original) {
        fs.writeFileSync(filePath, content);
        console.log('Updated ' + filePath);
    }
}

// Fix HTML files
const htmlFiles = fs.readdirSync('.').filter(f => f.endsWith('.html'));
htmlFiles.forEach(f => {
    replaceInFile(f, [
        { regex: /src="images\//g, replacement: 'src="/images/' },
        { regex: /src="Cakes\.mp4"/g, replacement: 'src="/Cakes.mp4"' },
        { regex: /href="images\//g, replacement: 'href="/images/' },
        { regex: /url\('images\//g, replacement: 'url(\'/images/' },
        { regex: /url\("images\//g, replacement: 'url("/images/' }
    ]);
});

// Fix CSS files
const cssFiles = fs.readdirSync('assets/css').filter(f => f.endsWith('.css'));
cssFiles.forEach(f => {
    replaceInFile(path.join('assets/css', f), [
        { regex: /url\('\.\.\/\.\.\/images\//g, replacement: 'url(\'/images/' },
        { regex: /url\("\.\.\/\.\.\/images\//g, replacement: 'url("/images/' },
        { regex: /url\(\.\.\/\.\.\/images\//g, replacement: 'url(/images/' }
    ]);
});

// Fix products.js
replaceInFile('assets/js/products.js', [
    { regex: /"images\//g, replacement: '"/images/' }
]);

console.log('Done!');

const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

files.forEach(f => {
    let content = fs.readFileSync(f, 'utf8');
    content = content.replace(/<script src="assets\/js\/theme\.js"><\/script>/g, '<script type="module" src="/assets/js/theme.js"></script>');
    fs.writeFileSync(f, content);
});
console.log('Fixed script tags');

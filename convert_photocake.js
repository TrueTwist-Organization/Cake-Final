const fs = require("fs");
let html = fs.readFileSync("photo-cake.html", "utf8");

html = html.replace(/--primary: #c5a059;/g, "--primary: #ff6b8b;");
html = html.replace(/--secondary: #fdfaf5;/g, "--secondary: #ffb6c1;");
html = html.replace(/--accent: #4a2d33;/g, "--accent: #e55a77;");
html = html.replace(/--text: #2d1b1e;/g, "--text: #2d3436;");
html = html.replace(/--bg: #fdfaf5;/g, "--bg: #ffffff;");
html = html.replace(/--shadow: rgba\(74, 45, 51, 0\.1\);/g, "--shadow: rgba(255, 107, 139, 0.15);");

fs.writeFileSync("photo-cake.html", html);
console.log("Reverted photocake colors");


const fs = require("fs");
let css = fs.readFileSync("assets/css/style.css", "utf8");

// Root vars
css = css.replace(/--primary: #c5a059;.*?\n/, "--primary: #ff6b8b;\n");
css = css.replace(/--secondary: #1a1209;.*?\n/, "--secondary: #f8c0c8;\n");
css = css.replace(/--accent: #c5a059;.*?\n/, "--accent: #e55a77;\n");
css = css.replace(/--text: #e8dcc8;.*?\n/, "--text: #2d3436;\n");
css = css.replace(/--bg: #0d0a06;.*?\n/, "--bg: #ffffff;\n");
css = css.replace(/--card-bg: #1a1610;.*?\n/, "--card-bg: #fff5f7;\n");
css = css.replace(/--shadow: rgba\(197, 160, 89, 0\.15\);\n/, "--shadow: rgba(255, 107, 139, 0.15);\n");

// Others
css = css.replace(/rgba\(13, 10, 6, 0\.97\)/g, "rgba(255, 255, 255, 0.97)");
css = css.replace(/rgba\(197,\s*160,\s*89,/g, "rgba(255, 107, 139,");
css = css.replace(/#a09080/g, "var(--text)");
css = css.replace(/color: #0d0a06/g, "color: var(--white)");
css = css.replace(/#0d0a06/g, "var(--white)");
css = css.replace(/#181818/g, "var(--white)");
css = css.replace(/#0a0804/g, "var(--white)");
css = css.replace(/rgba\(232,\s*220,\s*200,\s*0\.6\)/g, "var(--text)");
css = css.replace(/rgba\(232,\s*220,\s*200,\s*0\.55\)/g, "var(--text)");
css = css.replace(/rgba\(232,\s*220,\s*200,\s*0\.2\)/g, "rgba(0,0,0,0.1)");
css = css.replace(/linear-gradient\(135deg, #(?:\w){6} 0%, #(?:\w){6} 60%, #(?:\w){6} 100%\)/g, "linear-gradient(135deg, #ffe2e6 0%, #fff 100%)");
css = css.replace(/background: #1a1610;/g, "background: var(--white);");
css = css.replace(/background: #1f1a11 !important;/g, "background: var(--card-bg) !important;");
css = css.replace(/background: #231c10 !important;/g, "background: var(--white) !important;");

fs.writeFileSync("assets/css/style.css", css);
console.log("Reverted colors in style.css");


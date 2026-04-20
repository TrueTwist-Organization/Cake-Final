const fs = require("fs");
let css = fs.readFileSync("assets/css/style.css", "utf8");

// Fix linear gradient that failed before
css = css.replace(/background: linear-gradient\(135deg, var\(--white\) 0%, #1a1209 60%, #1f1610 100%\);/g, "background: var(--secondary);");

// Fix .btn:hover background
css = css.replace(/background: #d4b46a;/g, "background: var(--accent);");

// Fix shadow on main img
css = css.replace(/filter: drop-shadow\(0 15px 30px rgba\(0,0,0,0\.5\)\);/g, "filter: drop-shadow(0 15px 30px rgba(0,0,0,0.1));");

// Fix footer colors
css = css.replace(/border-top: 1px solid rgba\(255, 107, 139,0\.15\);/g, "border-top: 1px solid rgba(0,0,0,0.05);");

// Fix cart bounce icon color
css = css.replace(/color: var\(--white\);\n  width: 18px;/g, "color: var(--white);\n  width: 18px;"); // already correct

fs.writeFileSync("assets/css/style.css", css);
console.log("Replaced additional colors in style.css");


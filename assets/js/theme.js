function hexToRgb(hex) {
    let r = 0, g = 0, b = 0;
    if (hex.length === 4) {
        r = "0x" + hex[1] + hex[1];
        g = "0x" + hex[2] + hex[2];
        b = "0x" + hex[3] + hex[3];
    } else if (hex.length === 7) {
        r = "0x" + hex[1] + hex[2];
        g = "0x" + hex[3] + hex[4];
        b = "0x" + hex[5] + hex[6];
    }
    return `${+r}, ${+g}, ${+b}`;
}

const SOFT_LIGHT = '#FEFEFE'; // Near White
const SOFT_DARK = '#020202';  // Near Black

function getContrastColor(hexColor) {
    if (!hexColor) return SOFT_LIGHT;
    let hex = hexColor.replace('#', '');
    if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    const r = parseInt(hex.substring(0, 2), 16) || 0;
    const g = parseInt(hex.substring(2, 4), 16) || 0;
    const b = parseInt(hex.substring(4, 6), 16) || 0;
    const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
    return (yiq >= 128) ? SOFT_DARK : SOFT_LIGHT;
}

// Expose globally for other scripts
window.getContrastColor = getContrastColor;

function applyRandomTheme() {
    const themeColors = [
        { bg: '#241E1C', text: '#FEFEFE', primary: '#FFB7C5', accent: '#D4AF37' }, // Deep Brown base
        { bg: '#FEFEFE', text: '#020202', primary: '#D81B60', accent: '#E65100' }, // Off-White base
        { bg: '#3D0000', text: '#FEFEFE', primary: '#C62828', accent: '#D4AF37' }, // Crimson
        { bg: '#002E10', text: '#FEFEFE', primary: '#4CAF50', accent: '#FBC02D' }, // Forest
        { bg: '#D4AF37', text: '#020202', primary: '#4A148C', accent: '#AD1457' }, // Golden
        { bg: '#012169', text: '#FEFEFE', primary: '#039BE5', accent: '#D4AF37' }, // Royal Blue
        { bg: '#2D1B00', text: '#FEFEFE', primary: '#8D6E63', accent: '#FFCC80' }, // Espresso
        { bg: '#E65100', text: '#FEFEFE', primary: '#FFB74D', accent: '#2E7D32' }, // Orange
        { bg: '#880E4F', text: '#FEFEFE', primary: '#F06292', accent: '#D4AF37' }, // Plum
        { bg: '#311B92', text: '#FEFEFE', primary: '#9575CD', accent: '#FBC02D' }, // Indigo
        { bg: '#212121', text: '#FEFEFE', primary: '#BDBDBD', accent: '#D4AF37' }  // Coal Gray
    ];

    // Pick a random theme
    const randomTheme = themeColors[Math.floor(Math.random() * themeColors.length)];
    
    // Apply to :root
    const root = document.documentElement;
    root.style.setProperty('--bg', randomTheme.bg);
    root.style.setProperty('--text', randomTheme.text);
    root.style.setProperty('--primary', randomTheme.primary);
    root.style.setProperty('--accent', randomTheme.accent);
    
    // RGB for transparency
    root.style.setProperty('--bg-rgb', hexToRgb(randomTheme.bg));
    root.style.setProperty('--text-rgb', hexToRgb(randomTheme.text));
    root.style.setProperty('--primary-rgb', hexToRgb(randomTheme.primary));
    
    // Calculate and apply dynamic contrast text colors
    root.style.setProperty('--primary-text', getContrastColor(randomTheme.primary));
    root.style.setProperty('--accent-text', getContrastColor(randomTheme.accent));

    // Glass effects - using SOFT tones instead of pure white/black alpha
    const bgYiq = (hexToRgb(randomTheme.bg).split(',').reduce((a,b)=>parseInt(a)*299 + parseInt(b)*587))/(1000); // simplified check
    
    if (randomTheme.bg === SOFT_LIGHT) {
        root.style.setProperty('--glass', 'rgba(21, 14, 13, 0.05)');
        root.style.setProperty('--glass-border', 'rgba(21, 14, 13, 0.1)');
        root.style.setProperty('--white', 'rgba(21, 14, 13, 0.1)');
    } else {
        root.style.setProperty('--glass', 'rgba(255, 253, 245, 0.08)');
        root.style.setProperty('--glass-border', 'rgba(255, 253, 245, 0.2)');
        root.style.setProperty('--white', 'rgba(255, 253, 245, 0.15)');
    }
}

function initTheme() {
    // We'll skip the dark/light toggle logic since we're using a random color system now
    // But we'll keep the function signature as requested by the user's "reference" task
    applyRandomTheme();
}

// Run immediately for background application
applyRandomTheme();

// Auto-change theme every 3 seconds for a dynamic feel
setInterval(applyRandomTheme, 3000);

document.addEventListener('DOMContentLoaded', initTheme);


const input = document.querySelector('#colorInput');
const h1 = document.querySelector('h1');
const all = document.getElementById('all');
const htmlBody = document.querySelector('body');

input.addEventListener('input', function() {
    const color = input.value;
    if (input.value.length > 3) {
    document.body.style.backgroundColor = color;
    const textColor = getContrastColor(color);
    input.style.backgroundColor = textColor;
    input.style.textColor = textColor;
    h1.style.color = textColor;
} else {
    reset();
}
});

function getContrastColor(color) {
// Convert the color to an RGB color object
const rgb = hexToRgb(color);

// Invert each component of the RGB color to get the opposite color
const r = 255 - rgb.r;
const g = 255 - rgb.g;
const b = 255 - rgb.b;

// Convert the opposite color back to a hex color string
const oppositeColor = rgbToHex(r, g, b);

return oppositeColor;
}

function hexToRgb(hex) {
// Convert the hex color string to an RGB color object
const r = parseInt(hex.slice(1, 3), 16);
const g = parseInt(hex.slice(3, 5), 16);
const b = parseInt(hex.slice(5, 7), 16);
return { r, g, b };
}

function rgbToHex(r, g, b) {
// Convert the RGB color to a hex color string
const hex = ((r << 16) | (g << 8) | b).toString(16);
return '#' + ('000000' + hex).slice(-6);
}


function reset() {
if (input.value == "") {
    h1.style.color = 'white';
    input.style.backgroundColor = 'white';
    htmlBody.style.backgroundColor = '#333';       
}
}
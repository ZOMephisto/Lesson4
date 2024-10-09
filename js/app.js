function getCircleArea() {
    const radius = parseFloat(document.getElementById('radius').value.trim());
    const area = Math.PI * radius * radius;
    document.getElementById('circle-area').value = area.toFixed(2);
}

function getTriangleArea() {
    const base = parseFloat(document.getElementById('triangle-base').value.trim());
    const height = parseFloat(document.getElementById('triangle-height').value.trim());
    const area = 0.5 * base * height;
    document.getElementById('triangle-area').value = area.toFixed(2);
}

function getSquareArea() {
    const side = parseFloat(document.getElementById('square-side').value.trim());
    const area = side * side;
    document.getElementById('square-area').value = area.toFixed(2);
}

function getRectangleArea() {
    const width = parseFloat(document.getElementById('rectangle-width').value.trim());
    const height = parseFloat(document.getElementById('rectangle-height').value.trim());
    const area = width * height;
    document.getElementById('rectangle-area').value = area.toFixed(2);
}
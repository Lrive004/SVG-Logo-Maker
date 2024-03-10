const { Triangle } = require( "../lib/shapes");
const { Circle } = require("../lib/shapes");
const { Square } = require("../lib/shapes");

describe('Triangle class', () => {
    test('render method should return correct SVG for Triangle shape', () => {
        const triangle = new Triangle('red', 'Triangle', { content: 'ABC', color: 'blue' });

        const svg = triangle.render();
        
        const expectedSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><polygon points="100,10 150,190 50,190" style="fill:red;stroke:black;stroke-width:1"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" style="fill:blue;font-size:24px;">ABC</text></svg>`;

        const receivedSvg = svg.replace(/\s/g, ''); // Remove all whitespace from received SVG

        expect(receivedSvg).toContain(expectedSvg.replace(/\s/g, ''));
    });   
});


describe('Circle class', () => {
    test('render method should return correct SVG for Circle shape', () => {
        const circle = new Circle('red', 'Circle', { content: 'ABC', color: 'blue' });

        const svg = circle.render();
        
        const expectedSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><circle cx="100" cy="100" r="80" style="fill:red" />
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" style="fill:blue;font-size:24px;">ABC</text></svg>`;

        const receivedSvg = svg.replace(/\s/g, ''); // Remove all whitespace from received SVG

        expect(receivedSvg).toContain(expectedSvg.replace(/\s/g, ''));
    });   
});

describe('Square class', () => {
    test('render method should return correct SVG for square shape', () => {
        const square = new Square('red', 'Square', { content: 'ABC', color: 'blue' });

        const svg = square.render();
        
        const expectedSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
        <rect x="50" y="50" width="100" height="100" style="fill:red;stroke:black;stroke-width:1" />
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" style="fill:blue;font-size:24px;">ABC</text></svg>`;

        const receivedSvg = svg.replace(/\s/g, ''); // Remove all whitespace from received SVG

        expect(receivedSvg).toContain(expectedSvg.replace(/\s/g, ''));
    });   
});

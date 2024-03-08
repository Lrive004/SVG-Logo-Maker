import { Triangle } from "./lib/shapes";

describe('Triangle class', () => {
    test('render method should return correct SVG for Triangle shape', () => {
        const triangle = new Triangle('red', 'Triangle', { content: 'ABC', color: 'blue' });

        const svg = triangle.render();
        
        expect(svg).toContain('<polygon points="100,10 150,190 50,190" style="fill:red;stroke:black;stroke-width:1"/>');

        expect(svg).toContain('<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" style="fill:blue;font-size:24px;">ABC</text>');
    });   
});
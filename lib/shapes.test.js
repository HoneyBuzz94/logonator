// Import shape constructor
const { Square, Circle, Triangle } = require('./shapes.js');

describe('Square', () => {
    it('Should render a blue square with white text saying SAM', () => {
        const square = new Square();
        expect(square.render('blue','white','SAM')).toEqual(`<rect x="50" y="0" width="200" height="200" fill="blue"/>
<text x="150" y="120" font-size="60" text-anchor="middle" fill="white">SAM</text>`)
    })
});

describe('Circle', () => {
    it('Should render a circle with the hex color of #3F6 with blue text saying WOW', () => {
        const circle = new Circle();
        expect(circle.render('#3F6','blue','WOW')).toEqual(`<circle cx="150" cy="100" r="100" fill="#3F6"/>
<text x="150" y="120" font-size="60" text-anchor="middle" fill="blue">WOW</text>`)
    })
});

describe('Triangle', () => {
    it('Should render a yellow triangle with text that has the hex color of #0066FF saying YAY', () => {
        const triangle = new Triangle();
        expect(triangle.render('yellow','#0066FF','YAY')).toEqual(`<polygon points="150, 0 250, 200 50, 200" style="fill:yellow"/>
<text x="150" y="160" font-size="60" text-anchor="middle" fill="#0066FF">YAY</text>`)
    })
});
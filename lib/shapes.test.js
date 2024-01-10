// Import shape constructor
const Shape = require('./shapes.js');

describe('Shape', () => {
    describe('square', () => {
        it('Should render a blue square with white text saying SAM', () => {
            const shape = new Shape();
            expect(shape.square('blue','white','SAM')).toEqual(`
<rect x="50" y="0" width="200" height="200" fill="blue"/>
<text x="150" y="120" font-size="60" text-anchor="middle" fill="white">SAM</text>`)
        })
    })
    describe('circle', () => {
        it('Should render a circle with the hex color of #3F6 with blue text saying WOW', () => {
            const shape = new Shape();
            expect(shape.circle('#3F6','blue','WOW')).toEqual(`
<circle cx="150" cy="100" r="100" fill="#3F6"/>
<text x="150" y="120" font-size="60" text-anchor="middle" fill="blue">WOW</text>`)
        })
    })
    describe('triangle', () => {
        it('Should render a yellow triangle with text that has the hex color of #0066FF saying YAY', () => {
            const shape = new Shape();
            expect(shape.triangle('yellow','#0066FF','YAY')).toEqual(`
<polygon points="150, 0 250, 200 50, 200" style="fill:yellow"/>
<text x="150" y="160" font-size="60" text-anchor="middle" fill="#0066FF">YAY</text>`)
        })
    })
});
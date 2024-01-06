// Import shape constructor
const Shape = require('./shapes.js');

describe('Shape', () => {
    describe('square', () => {
        it('Should render a blue square with white text saying SAM', () => {
            const shape = new Shape();
            expect(shape.square('blue','white','SAM').render()).toEqual(`
<rect x="50" y="0" width="200" height="200" fill="blue"/>
<text x="150" y="120" font-size="60" text-anchor="middle" fill="white">SAM</text>`)
        })
    })
})
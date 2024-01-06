function Shape() {}

Shape.prototype.square = (shapeColor,textColor,text) => {
    return `
<rect x="50" y="0" width="200" height="200" fill="${shapeColor}"/>
<text x="150" y="120" font-size="60" text-anchor="middle" fill="${textColor}">${text.toUpperCase()}</text>`
}

Shape.prototype.circle =  (shapeColor,textColor,text) => {
    return `
<circle cx="150" cy="100" r="100" fill="${shapeColor}"/>
<text x="150" y="120" font-size="60" text-anchor="middle" fill="${textColor}">${text.toUpperCase()}</text>`
}

Shape.prototype.triangle = (shapeColor,textColor,text) => {
    return `
<polygon points="150, 0 250, 200 50, 200" style="fill:${shapeColor}"/>
<text x="150" y="160" font-size="60" text-anchor="middle" fill="${textColor}">${text.toUpperCase()}</text>`
}

module.exports = Shape;
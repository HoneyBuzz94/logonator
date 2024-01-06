// Import packages
const inquirer = require('inquirer');
const fs = require('fs');
const Shape = require('./lib/shapes.js');

// Define global variables
const colors = ['aqua', 'black', 'blue', 'fuchsia', 'gray', 'green', 'lime', 'maroon', 'navy', 'olive', 'purple', 'red', 'silver', 'teal', 'white', 'yellow'];
const hexTest = /^#[A-Fa-f0-9]{6}|[A-Fa-f0-9]{3}/;
const questions = [
    {
        type: "input",
        message: "Enter logo text (3 character limit):",
        name: 'text',
        validate: async (input) => textVerifier(input)
    },
    {
        type: 'input',
        message: 'Enter your text color:',
        name: 'textColor',
        validate: async (input) => colorVerifier(input)
    },
    {
        type: 'list',
        message: 'Select a shape:',
        choices: ['Triangle', 'Circle', 'Square'],
        name: 'shape'
    },
    {
        type: 'input',
        message: 'Enter your shape color:',
        name: 'shapeColor',
        validate: async (input) => colorVerifier(input)
    }
];

// Verify text length
function textVerifier(input){
    if(input.length<3){
        return true;
    }else{
        return 'Maximum charcter limit is 3.';
    }
}
// Verify color choice
function colorVerifier(input){
    // Check input against color list
    if(colors.includes(input.toLowerCase())){
        return true;
    }else{
        // Test to see if valid hexidecimal
        if(hexTest.test(input)){
            return true;
        }else{
            return 'Color not recognized. Enter a valid color keyward (ie red) or enter a valid hexidecimal code (ie #FF0000).';
        }
    }
}

// Generate svg file using user input
function createLogo(data){
    // Define local variables
    let logo;
    let shape = new Shape();

    // Assign logo values based on shape selected
    if(data.shape=='Square'){
        logo = shape.square(data.shapeColor,data.textColor,data.text);
    }else if(data.shape=='Circle'){
        logo = shape.circle(data.shapeColor,data.textColor,data.text);
    }else if(data.shape=='Triangle'){
        logo = shape.triangle(data.shapeColor,data.textColor,data.text);
    };

     let svgFormat =
`<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">
${logo}
</svg>`;

    // Write data into svg file
    fs.writeFile('logo.svg',svgFormat,(err)=> err ? console.log(err) : console.log('Generated logo.svg'));
}

// Prompt user input
inquirer.prompt(questions).then((answers) => createLogo(answers));
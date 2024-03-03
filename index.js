import Shape from './lib/shapes.js';
import fs from 'fs';
import inquirer from 'inquirer';


function createFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => err ? console.log(err) :
        console.log('Generated logo.svg'));
};

inquirer
    .prompt([{
        type: 'input',
        name: 'textColor',
        message: 'Please enter a text color(OR a hexadecimal number): ',
    },
    {
        type: 'list',
        message: 'Please choose a shape:',
        name: 'shape',
        choices: [
            {
                name: 'Circle',
            },
            {
                name: 'Triangle',
            },
            {
                name: 'Square',
            },]

    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Please enter a shape color(OR a hexadecimal number): ',
    },
    ])
    .then((data) => {
        const fileName = 'logo.svg';
        const content = shape.render();
        let shape;
    })

const { Shape, Triangle, Circle, Square } = require("./lib/shapes");
const fs = require('fs/promises');


function createFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => err ? console.log(err) :
        console.log('Generated logo.svg'));
};

import('inquirer').then((inquirer) => {
    inquirer
        .default
        .prompt([{
            type: 'input',
            name: 'text',
            message: "Please enter up to three characters",
            validate: function (input) {
                if (input.length > 3) {
                    return 'Please enter up to 3 characters.';
                }
                return true;
            }
        },
        {
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
            const text = {
                content: data.text,
                color: data.textColor
            };

            let shape;
            switch (data.shape) {
                case 'Triangle':
                    shape = new Triangle(data.shapeColor, data.shape, text);
                    break;
                case 'Circle':
                    shape = new Circle(data.shapeColor, data.shape, text);
                    break;
                case 'Square':
                    shape = new Square(data.shapeColor, data.shape, text);
                    break;
                default:
                    console.log('Unrecognizable shape');
                    return;
            }
            const fileName = 'logo.svg';
            const content = shape.render();
            createFile(fileName, content);
        });
})

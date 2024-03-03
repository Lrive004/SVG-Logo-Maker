import fs from 'fs';
import inquirer from 'inquirer';

inquirer
    .prompt([{
        type: 'input',
        name: 'text-color',
        message: 'Please enter a text color(OR a hexadecimal number): ',
    },
    {
        type: 'list',
        message: 'Please choose a shape:',
        name: 'shape',
        choices: [
            {
                name: 'circle',
            },
            {
                name: 'triangle',
            },
            {
                name: 'square',
            },]

    },
    {
        type: 'input',
        name: 'shape-color',
        message: 'Please enter a shape color(OR a hexadecimal number): ',
    },
    ])
    .then((data) => {
        const filename = 'logo.svg';
        createFile(filename, data);
    })

function createFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => err ? console.log(err) : console.log('Generated logo.svg'));
};
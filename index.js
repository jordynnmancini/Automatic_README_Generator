// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your first & last name?',
    },
    {
        type: 'input',
        name: 'GitHub',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a short description about your project:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What command should be run to install dependencies?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What command should be run to run tests?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What does the user need to know about using the repo?',
    },
    {
        type: 'input',
        name: 'credits',
        message: 'What does the user need to know about contributing to the repo?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: ['MIT', 'GPL','None'],
    },
];

// TODO: Create a function to write README file
// this code was provided but I didn't need to use it to make the app run 
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            const readMeContent = generateMarkdown(data);

            fs.writeFile('README.md', readMeContent, (err) =>
                err ? console.log(err) : console.log('Successfully generated a README file!'))
        });
}

// Function call to initialize app
init();

const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
const asyncWriteFile = util.promisify(fs.writeFile);
const generateMarkdown2 = require("././utils/generateMarkdown2");



// array of questions for user
function promptUser(answer) {
    return inquirer.prompt([
        {
            type: "input",
            message: "Type your title",
            name: "title"
        },
        {
            type: "input",
            message: "Write descriptions",
            name: "Description"
        },
        {
            type: "input",
            message: "write instruction",
            name: "installation"
        },
        {
            type: "input",
            message: "describe usage",
            name: "usage"
        },
        {
            type: "checkbox",
            message: "choose licence style",
            name: "license",
            choices: [
                "free",
                "private",
                "professional"
            ]
        },
        {
            type: "input",
            message: "white instruction for contributing",
            name: "contribution"
        },
        {
            type: "input",
            message: "enter your Github username",
            name: "gitHub"
        },
        {
            type: "input",
            message: "enter your email address",
            name: "email"
        },
        {
            type: "input",
            message: "Write test instructions",
            name: "test"
        },

    ]);
}


// function to write README file
function writeToFile(answer) {
    var contents = generateMarkdown2(answer);
    console.log(contents);

    return contents;
}



// function to initialize program
function init() {
    promptUser()
        .then(function (contents) {
            const readMe = writeToFile(contents);
            asyncWriteFile("README.md", readMe).then(() => console.log("success"))
        });
}

// function call to initialize program
init();

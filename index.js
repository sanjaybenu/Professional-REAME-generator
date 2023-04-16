// nodejs packages
const fs = require('fs');
const inquirer = require('inquirer');

//To create README.md file 
const createReadMe = (data) => {
    return `# ${data.title}
![Github license](https://img.shields.io/badge/license-${data.licenseIcon}-blue)
## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contributors](#contributors)
* [Testing](#tests)
* [Questions](#questions)
## Description
${data.description}
## Screenshots
![Alt text](${data.image})
## Installation
${data.installation}
## Usage
${data.usage}
## Tests
${data.test}
## Contributors
${data.acknowledge}
## Questions
If you have any questions or suggestions please [contact](mailto:${data.email}?subject=README_file_generator) or visit [github/${data.author}](https://github.com/${data.author})`
}

//        questions  section
const questions = [
    {
        type: "input",
        name: "title",
        message: "What do you want to name your Project?",
    },
    {
        type: "input",
        name: "description",
        message: "What does this app do?",
    },
    {
        type: "input",
        name: "installation",
        message: "How does one install your app?"
    },
    {
        type: "input",
        name: "image",
        message: "Add a representative image of your app(provide the path of the image)."
    },
    {
        type: "input",
        name: "usage",
        message: "How does one use your app?"
    },
    {
        type: "checkbox",
        name: "licenseIcon",
        message: "Under what license you would like to make this app to others?",
        choices: ["MIT", "APACHE2.0", "Boost1.0", "MPL2.0", "BSD2", "BSD3", "none"],
    },
    {
        type: "input",
        name: "acknowledge",
        message: "Do you want to acknowledge any person, organisation? . (Use GitHub usernames if possible)",
    },
    {
        type: "input",
        name: "test",
        message: "Any tests for your app?",
    },
    {
        type: "input",
        name: "author",
        message: "Write your GitHub username.",
    },
    {
        type: "input",
        name: "email",
        message: "Provide a valid email address.",
    },

];
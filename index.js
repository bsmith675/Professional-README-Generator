const generateReadme = require("./ReadMe");
const githubAPI = require("./github");
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);

inquirer;
const promptUser = () => {
    return inquirer
        .prompt([
            {
                type: "input",
                message: "Hello, I am here to assist with creating you a professional ReadMe. Can you start with entering your GitHub username",
                name: "username",
            },
            {
                type: "input",
                
}
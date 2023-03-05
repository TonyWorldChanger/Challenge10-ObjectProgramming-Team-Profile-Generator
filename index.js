
// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateProfile = require("../dist/generateProfile");


// TODO: Create an array of questions for user input
const questions = [
    {
       type:"input",
       name:"name",
       message:"What is the employee's name?", 
    },
    {
        type:"input",
        name:"id",
        message:"What is the employee's ID?", 
     },
     {
        type:"input",
        name:"email",
        message:"What is the employee's email?", 
     },
     {
        type:"input",
        name:"role",
        message:"What is the employee's role?", 
     },
     {
        type:"input",
        name:"GitHub",
        message:"GitHub username: ",
     },
     {
        type:"input",
        name:"school",
        message:"What school does the employee attend?",
     },
];

function writeToFile(fileName, data) {
    if (!fs.existsSync(DIST_DIR)) {
        fs.mkdirSync(DIST_DIR);
    }
    fs.writeFileSync(disPath, render(teamMembers), "utf-8");

    return fs.writeFileSync(generateProfile.html, fileName), data;
};


function init () {
    inquirer.prompt(questions).then((res) => {
        console.log("Team Profile File...");
        writeToFile("./dist/generateProfile.js");
    });
    
};



init();






// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateProfile = require("./dist/generateProfile");



class Employee {
    constructor(name, id, email, role) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
    }
};

class Manager {
    constructor(name, id, email, role, officeNumber) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
        this.officeNumber = officeNumber;
    }
};

class Engineer {
    constructor(name, id, email, role, github) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
        this.github = github;
    }
};

class Intern {
    constructor(name, id, email, role, school) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
        this.school = school;
    }
};



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
        message:"What is the employee's rofle?", 
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
    return fs.writeFileSync(generateProfile.join(process.cwd(), fileName), data);
}


function init () {
    inquirer.prompt(questions).then((res) => {
        console.log("Processing Professional README.md File...");
        writeToFile("./gen/README.md", generateMarkdown({...res}));
    });
    
}


init();
// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateProfile = require("./dist/generateProfile");



class Employee {
    constructor(name, id, email, role) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
    }
    getName() {
        return this.name;
    }
    getID() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return "Employee";
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
    getName() {
        return this.name;
    }
    getID() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
    getRole() {
        return "Manger";
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
    getName() {
        return this.name;
    }
    getID() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getGitHub() {
        return this.github;
    }
    getRole() {
        return "Engineer";
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
    getName() {
        return this.name;
    }
    getID() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getschool() {
        return this.school;
    }
    getRole() {
        return "Intern";
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

    return fs.writeFileSync(generateProfile.join(process.cwd(), fileName), data);
};


function init () {
    inquirer.prompt(questions).then((res) => {
        console.log("Team Profile File...");
        writeToFile("./dist/generateProfile.js");
    });
    
};



init();



module.exports = Employee;
module.exports = Manager;
module.exports = Engineer;
module.exports = Intern;
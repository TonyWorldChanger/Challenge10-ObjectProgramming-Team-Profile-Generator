// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateProfile = require("./generateProfile");




class Employee {
    constructor(name, id, email, role) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
    }
};

class Manager {
    constructor(name, id, email, role) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
    }
};

class Engineer {
    constructor(name, id, email, role) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
    }
};

class Intern {
    constructor(name, id, email, role) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
    }
};



// TODO: Create an array of questions for user input
const questions = [
    {
       type:"input",
       name:"Title",
       message:"What is the your project's title?", 
    },
    {
        type:"input",
        name:"Installation",
        message:"How do you install your application?", 
     },
     {
        type:"input",
        name:"Instructions",
        message:"What instructions does the user need to follow?", 
     },
     {
        type:"input",
        name:"Usage",
        message:"How to use this app?", 
     },
     {
        type:"input",
        name:"Credits",
        message:"Do you have any credits to add?", 
     },
     {
        type:"input",
        name:"License",
        message:"What liscense did you use?", 
     },
     {
        type:"input",
        name:"GitHub",
        message:"GitHub username: ",
     },
     {
        type:"input",
        name:"E-mail",
        message:"Email",
     },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init () {
    inquirer.prompt(questions).then((res) => {
        console.log("Processing Professional README.md File...");
        writeToFile("./gen/README.md", generateMarkdown({...res}));
    });
    
}

// Function call to initialize app
init();
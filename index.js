const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateProfile = require("./src/generateProfile");
const path = require("path");
const DIST_DIR = path.resolve(__dirname, "dist");
const distpath = path.join(DIST_DIR, index.html);
const roundTable = [];


// TODO: Create an array of questions for user input
const promptEmployee = () => {
   inquirer.prompt([
      {
         type:"input",
         name:"name",
         message:"What is the employee's name?", 
         validate: nameInput => {
            if (nameInput) {
               return true;
            } else {
               console.log("Please enter your full name!");
               return false;
            }
         }
      },
      {
         type: "input",
         name: "employeeId",
         message: "Enter your employee ID",
         validate: employeeId => {
            if (employeeId) {
               return true;
            } else {
               console.log("Please enter employee ID");
               return false;
            }
         }
      },
   ]).then(answers => {
      console.log(answers);
      const employee = new Employee(answers.name, answers.employeeId);
      roundTable.push(employee);
   })
};

const promptManager = () => {
   inquirer.prompt([
      {
         type:"input",
         name:"name",
         message:"What is the employee's name?", 
         validate: nameInput => {
            if (nameInput) {
               return true;
            } else {
               console.log("Please enter your full name!");
               return false;
            }
         }
      },
      {
         type: "input",
         name: "employeeId",
         message: "Enter your employee ID",
         validate: employeeId => {
            if (employeeId) {
               return true;
            } else {
               console.log("Please enter employee ID");
               return false;
            }
         }
      },
      {
         type: "input",
         name: "email",
         message: "Enter your email address",
         validate: email => {
            if (email) {
               return true;
            } else {
               console.log("Please enter email address");
               return false;
            }
         }
      },
      {
         type: "input",
         name: "officeNumber",
         message: "Enter your current office number",
         validate: officeNumber => {
            if (officeNumber) {
               return true;
            } else {
               console.log("Please enter your current office number");
               return false;
            }
         }
      }
   ]).then(answers => {
      console.log(answers);
      const manager = new Manager(answers.name, answers.employeeId, answers.email, answers.officeNumber);
      roundTable.push(manager);
      promptTeamMenu();
   })
};

const promptTeamMenu = () => {
   return inquirer.prompt([
      {
         type: "list",
         name: "Role Menu",
         message: "Please select correct option:",
         options: ["employee", "engineer", "intern", "complete creating Avengers"]
      }
   ]).then(userOptions => {
      switch (userOptions.menu) {
         case "employee":
            promptEmployee();
            break;
         case "engineer":
            promptEngineer();
            break;
         case "intern":
            promptIntern();
            break;
         default:
            assembleAvengers();

      }
   });
};

const promptEngineer = () => {
   inquirer.prompt([
      {
         type:"input",
         name:"name",
         message:"What is the employee's name?", 
         validate: nameInput => {
            if (nameInput) {
               return true;
            } else {
               console.log("Please enter your full name!");
               return false;
            }
         }
      },
      {
         type: "input",
         name: "employeeId",
         message: "Enter your employee ID",
         validate: employeeId => {
            if (employeeId) {
               return true;
            } else {
               console.log("Please enter employee ID");
               return false;
            }
         }
      },
      {
         type: "input",
         name: "email",
         message: "Enter your email address",
         validate: email => {
            if (email) {
               return true;
            } else {
               console.log("Please enter email address");
               return false;
            }
         }
      },
      {
         type: "input",
         name: "github",
         message: "Enter your GitHub username",
         validate: github => {
            if (github) {
               return true;
            } else {
               console.log("Please enter your GitHub username");
               return false;
            }
         }
      }
   ]).then(answers => {
      console.log(answers);
      const engineer = new Engineer(answers.name, answers.employeeId, answers.email, answers.github);
      roundTable.push(engineer);
      promptTeamMenu();
   })
};

const promptIntern = () => {
   inquirer.prompt([
      {
         type:"input",
         name:"name",
         message:"What is the employee's name?", 
         validate: nameInput => {
            if (nameInput) {
               return true;
            } else {
               console.log("Please enter your full name!");
               return false;
            }
         }
      },
      {
         type: "input",
         name: "employeeId",
         message: "Enter your employee ID",
         validate: employeeId => {
            if (employeeId) {
               return true;
            } else {
               console.log("Please enter employee ID");
               return false;
            }
         }
      },
      {
         type: "input",
         name: "email",
         message: "Enter your email address",
         validate: email => {
            if (email) {
               return true;
            } else {
               console.log("Please enter email address");
               return false;
            }
         }
      },
      {
         type: "input",
         name: "school",
         message: "Enter your school name",
         validate: school => {
            if (school) {
               return true;
            } else {
               console.log("Please enter your current school name");
               return false;
            }
         }
      }
   ]).then(answers => {
      console.log(answers);
      const intern = new Intern(answers.name, answers.employeeId, answers.email, answers.school);
      roundTable.push(intern);
      promptTeamMenu();
   })
};

const assembleAvengers = () => {
   if (!fs.existsSync(DIST_DIR)) {
      fs.mkdirSync(DIST_DIR);
   }
   fs.writeFileSync(distpath, generateProfile(roundTable), "utf-8");
};

promptManager();






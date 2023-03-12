
const generateTeam = (team) => {
  let p = " ";
  console.log(team);
  // creates the manager html
  const generateManager = manager => {
    `
    <div class="card employee-card">
     <div class="card-header">
        <h2 class="card-title">${manager.getName()}</h2>
        <h3 class="card-title">${manager.getRole()}</h3>
      </div>
      <div class="card-body">
        <ul class="list-group">
          <li class="list-group-item">ID: ${manager.getID()}</li>
          <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
          <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
        </ul>
      </div>
    </div>
    `;
  }


// creates the engineer html
  const generateEngineer = engineer => {
    `
    <div class="card employee-card">
     <div class="card-header">
        <h2 class="card-title">${engineer.getName()}</h2>
        <h3 class="card-title">${engineer.getRole()}</h3>
      </div>
      <div class="card-body">
        <ul class="list-group">
          <li class="list-group-item">ID: ${engineer.getID()}</li>
          <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
          <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}"></a></li>
        </ul>
      </div>
    </div>
    `;
  }

  // creates the employee html
  const generateEmployee = employee => {
    `
    <div class="card employee-card">
     <div class="card-header">
        <h2 class="card-title">${employee.getName()}</h2>
        <h3 class="card-title">${employee.getRole()}</h3>
      </div>
      <div class="card-body">
        <ul class="list-group">
          <li class="list-group-item">ID: ${employee.getID()}</li>
          <li class="list-group-item">Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
        </ul>
      </div>
    </div>
    `;
  }

  const generateIntern = intern => {
    `
    <div class="card employee-card">
     <div class="card-header">
        <h2 class="card-title">${intern.getName()}</h2>
        <h3 class="card-title">${intern.getRole()}</h3>
      </div>
      <div class="card-body">
        <ul class="list-group">
          <li class="list-group-item">ID: ${engineer.getID()}</li>
          <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
          <li class="list-group-item">ID: ${engineer.getSchool()}</li>  
        </ul>
      </div>
    </div>
    `;
  }


  for (let i = 0; i < team.length; i++) {
    if (team[i].getRole() === "Manager") {
      generateManager(team[i]);
    }
    if (team[i].getRole() === "Engineer") {
      generateEngineer(team[i]);
    }
    if (team[i].getRole() === "Employee") {
      generateEmployee(team[i]);
    }
    if (team[i].getRole() === "Intern" ) {
      generateIntern(team[i]);
    }
  }



  const html = 
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Kumbh Sans">
        <link rel="stylesheet" href="styles.css">
        <title>Team Database</title>
    </head>
      <body>
      <div class="header-bar"><h1>Employee Database</h1></div>
       <div class="employee-container droppable">
          ${p}
        </div>
      </body>
    </html>`

      return html;

};


module.exports = generateTeam;


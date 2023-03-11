const html = [];

const generateTeam = (team) => {
  console.log(team);
  // creates the manager html
  const generateManager = manager => {
    return `
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
    return `
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
    return `
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
    return `
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

};




//this function generates all cards for entered employees - includes links which open in new tab
const generateTeam = team => {
    const generateEngineer = engineer => {
        return `            <div class="col">
        <div class="card">
            <div class="card-header bg-danger text-white text-center">
                <h5 class="card-title">${engineer.getName()}</h1>
                <h6 class="card-subtitle mb-2 text-white">${engineer.getRole()}</h6>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${engineer.getId()}</li>
                    <li class="list-group-item">Email: ${engineer.getEmail()}</li>
                    <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}/" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a></li>
                  </ul>
            </div>
        </div>
    </div>`;
    };

    const generateIntern = intern => {
        return `<div class="col">
        <div class="card">
            <div class="card-header bg-danger text-white text-center">
                <h5 class="card-title">${intern.getName()}</h1>
                <h6 class="card-subtitle mb-2 text-white">${intern.getRole()}</h6>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${intern.getId()}</li>
                    <li class="list-group-item">Email: ${intern.getEmail()}</li>
                    <li class="list-group-item">School: ${intern.getSchool()}</a></li>
                  </ul>
            </div>
        </div>
    </div>`
    };

    const generateManager = manager => {
        return `<div class="col">
        <div class="card">
            <div class="card-header bg-danger text-white text-center">
                <h5 class="card-title">${manager.getName()}</h1>
                <h6 class="card-subtitle mb-2 text-white">${manager.getRole()}</h6>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${manager.getId()}</li>
                    <li class="list-group-item">Email: ${manager.getEmail()}</li>
                    <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
                  </ul>
            </div>
        </div>
    </div>`;
    };

    const teamHtml = [];

    // push html into team based on role
    teamHtml.push(team.filter(employee => employee.getRole() === "Engineer").map(engineer => generateEngineer(engineer)));
    teamHtml.push(team.filter(employee => employee.getRole() === "Intern").map(intern => generateIntern(intern)));
    teamHtml.push(team.filter(employee => employee.getRole() === "Manager").map(manager => generateManager(manager)));

    // combine all roles for html
    return teamHtml.join("");
};


//generates the base html on the page & takes in data based on answers in index.js
module.exports = team => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
        <title>Team Profile Generator</title>
    </head>
    <body>
        <div class="container-fluid bg-danger text-white text-center mb-2">
            <h1 class="display-4">Team Profile Generator</h1>
        </div>
        <div class="container">
        <div class="row align-items-start">
            ${generateTeam(team)}
        </div>
    </div>
    </body>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
    </html>`;
};
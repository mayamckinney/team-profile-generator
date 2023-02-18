const Employee = require("./lib/employee");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");
const path = require("path");
const fs = require("fs");
const dirOutput = path.resolve(__dirname, "dist");
const dirPath = path.join(dirOutput, "team.html");
const generateTeam = require("./src/generate-team");

team = [];

const init = () => {
    teamBuilder = () =>
    {    
        inquirer.prompt([{
        type: "list",
        message: "What kind of employee do you want to add to the team?",
        name: "addEmployee",
        choices: ["Engineer", "Intern", "Manager", "Quit"]
    }])
    .then(userInput => {
        switch(userInput.addEmployee) {
            case "Engineer":
                addEngineer();
                break;
            case "Intern":
                addIntern();
                break;
            case "Manager":
                addManager();
                break;
            default:
                htmlBuilder();
        };
    });
};

const addEngineer = () => {
    inquirer.prompt ([
        {
            type: "input",
            name: "engineerName",
            message: "What is the engineer's full name?"
        },
        {
            type: "input",
            name: "engineerId",
            message: "What is their employee ID number?"
        },
        {
            type: "input",
            name: "engineerEmail",
            message: "What is their employee email address?"
        },
        {
            type: "input",
            name: "engineerGithub",
            message: "What's the engineer's GitHub username?"
        }
    ])
    .then(answers => {
        const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answer.engineerGithub);
        team.push(engineer);
        init();
    });
};

const addIntern = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "internName",
            message: "What is the intern's name?"
        },
        {
            type: "input",
            name: "internId",
            message: "What is their employee ID number?"
        },
        {
            type: "input",
            name: "internEmail",
            message: "What is their email address?"
        },
        {
            type: "input",
            name: "internSchool",
            message: "What is the name of the school they went to?"
        }
    ]) .then(answers => {
        const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
        team.push(intern);
        init();
    });
};

addManager = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "managerName",
            message: "What is the manager's name?"
        },
        {
            type: "input",
            name: "managerId",
            message: "What is their employee ID number?"
        },
        {
            type: "input",
            name: "managerEmail",
            message: "What is their email address?"
        },
        {
            type: "input",
            name: "managerOffice",
            message: "What is their office number?"
        }
    ]).then(answers => {
        const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOffice);
        team.push(manager);
        init();
    });
};

htmlBuilder = () => {
    console.log("The team has been built. The page will now generate.");

    fs.writeFileSync(dirPath, generateTeam(team), 'utf-8');
}

teamBuilder();

}

init();
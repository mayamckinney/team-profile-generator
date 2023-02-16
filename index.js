const Employee = require("./lib/employee");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");
const path = require("path");
const fs = require("fs");
const dirOutput = path.resolve(__dirname, "dist");
const dirPath = path.join(dirOutput, "team.html");
const generateTeam = require("./src/helper");

team = [];

const init = () => {
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
        }
    ])
}
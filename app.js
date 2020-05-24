const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const Employee = require("./lib/employee");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const employeeArray = [];

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

function createManager() {
    console.log("Please build your team");
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the managers's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the manager's id?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the managers's email address?"
        },
        {
            type: "input",
            name: "number",
            message: "What is the managers's office number?"
        }
    ]).then(function (data) {
        var employee = new Manager(data.name, data.id, data.email, data.number);
        employeeArray.push(employee);
        newEmployee();
    })
};

function newEmployee() {
    return inquirer.prompt([
        {
            type: "list",
            name: "choice",
            message: "Do you want to create another employee?",
            choices: ["engineer", "intern", "I'm done. Build the team."]
        }
    ]).then(function (choices) {
        var choice = choices.choice
        if (choice === "engineer") {
            createEngineer();
        } else if (choice === "intern") {
            createIntern();
        } else {
            buildTeam();
        }
    })
}

function buildTeam() {
    var output = render(employeeArray);
    fs.writeFileSync( outputPath, output )
}

function createEngineer() {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the employee's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the employee's id?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the employee's email address?"
        },
        {
            type: "input",
            name: "github",
            message: "What is the employee's github username?"
        }
    ]).then(function (data) {
        var employee = new Engineer(data.name, data.id, data.email, data.github);
        employeeArray.push(employee);
        newEmployee();
    })
};

function createIntern() {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the employee's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the employee's id?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the employee's email address?"
        },
        {
            type: "input",
            name: "school",
            message: "What school is the employee attending?"
        }
    ]).then(function (data) {
        var employee = new Intern(data.name, data.id, data.email, data.school);
        employeeArray.push(employee);
        console.log(employeeArray);
        newEmployee();
    })
};

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!
    createManager();
 //var output = render(employeeArray);
 //console.log(output)

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.
        //**need fs.writeFile - see week 9
// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```

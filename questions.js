const questions = {
    type: {
        type:   "checkbox",
        name: "type",
        message:    "Which type of employee would you like to add?",
        choices: ["manager", "engineer", "intern"]
    },
    name: {
        type:   "input",
        name: "name",
        message:    "What is the employee's name?"
    },
    id: {
        type:   "input",
        name: "id",
        message:    "What is the employee's id?"
    },
    email: {
        type:   "input",
        id: "email",
        message:    "What is the employee's email address?"
    },
    manager: {
        type:   "input",
        id: "extra",
        message:    "What is the employee's email address?"
    },
    engineer: {
        type:   "input",
        id: "extra",
        message:    "What is the employee's github username?"
    },
    intern: {
        type:   "input",
        id: "extra",
        message:    "What school is the employee attending?"
    },
    continue: {
        type:   "checkbox",
        id: "name",
        message:    "Would you like to continue?",
        choices: ["Yes", "No"]
    },
}

module.exports = questions;
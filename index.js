const inquirer = require("inquirer")
const fs = require('fs')

// Importing lib files 
const Employee = require('./lib/Employee')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')

// Manager questions 
const managerQuestions = [
  {
    type: "input",
    message: "Manager's Name:",
    name: "managerName",
  },
  {
    type: "input",
    message: "Employee ID:",
    name: "managerEmployeeID",
  },
  {
    type: "input",
    message: "Email Address:",
    name: "managerEmail",
  },
  {
    type: "input",
    message: "Office Number:",
    name: "managerOfficeNumber",
  },
]

const menu = [
  {
    type: "list",
    choices: ["Engineer", "Intern", "Finish"],
    message: "Choose to add to your team or finish.",
    name: "menu",
  }
]

function initialize() {
  inquirer
  .prompt(managerQuestions)
  .then((data) => {
    // console.log(data)
  })
  let appRunning = true;
  while (appRunning) {

  }
}

initialize()
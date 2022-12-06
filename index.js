const inquirer = require("inquirer")
const fs = require('fs')

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
const inquirer = require('inquirer');
const fs = require('console.table');
const mysql = require('mysql');

//connect to database

const db = mysql.createConnection(
    {
        host: 'localhost',

        //your mysql username,

        user: 'root',

        // your mysql password

        password: 'asuka',
        database: 'employeesDB'
    },
    console.log('connected to the tracker database.')
);


function firstPrompt() {
    inquirer
    .prompt({
      type: "list",
      name: "task",
      message: "Would you like to do?",
      choices: [
        "View Employees",
        "View Employees by Department",
        "Add Employee",
        "Remove Employees",
        "Update Employee Role",
        "Add Role",
        "End"]
    })
}

firstPrompt();
module.exports = db;

const inquirer = require('inquirer');
const cTable = require("console.table");
const mysql = require('mysql');


//connect to database

//mysql connection


const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'asuka',
  database: 'employees'
});


function firstPrompt() {
    inquirer
    .prompt({
      type: "list",
      name: "task",
      message: "Would you like to do?",
      choices: [
        "View Employees",
        "View Departments",
        "View Roles",
        "Add Employee",
        "Add Role",
        "Add Department",
        "Update Employee Role",
        "End"]
    })
    .then(function ({ task }) {
        switch (task) {
          case "View Employees":
            viewEmployee();
            break;
  
          case "View Departments":
            viewDepartments();
            break;
        
          case "View Roles":
            addEmployee();
            break;
  
          case "Add Employee":
            removeEmployees();
            break;
  
          case " Add Deparment":
            addDepartment();
            break;

          case " Add Role":
            addDepartment();
            break;
  
          case "Update Employee Role":
            updateEmployeeRole();
            break;
  
          case "End":
            connection.end();
            break;
        }
      });
      
    };

    // fetch data from mysql
  function viewEmployee() {
  con.query(`SELECT * FROM employee`, (err,rows) => {
    if(err) throw err;
    console.log('Data received');
    console.table(rows);
    firstPrompt();
  })
  };
  function viewDepartments() {
  con.query(`SELECT * FROM department`, (err,rows) => {
    if(err) throw err;
    console.log('Data received');
    console.table(rows);
    firstPrompt();
  })
  };

  function addEmployee () {
    inquirer
    .prompt([
      {
        type: "input",
        name: "firstname",
        message: "What is employees first name?",
      },
      {
        type: "input",
        name: "lastname",
        message: "What is employees last name?",
      },
      {
        type: "input",
        name: "roleid",
        message: "What is employees role id?",
      },
      {
        type: "input",
        name: "managerid",
        message: "What is employees manager id?",
      },

    ])
    .then(answers => {
      con.query('INSERT INTO employee (first_name,last_name,role_id,manager_id) VALUES (?,?,?,?)',
      [answers.firstname,answers.lastname,answers.roleid,answers.managerid], (err,rows)=>{
        if(err) throw err;
        console.log('Data received');
        console.table(rows);
        firstPrompt();
      })
    })
  }

  function updateEmployeeRole () {
    inquirer
    .prompt([
    {
      type: "input",
      name: "employeeid",
      message: "What is employees id?",
    },
    {
      type: "input",
      name: "newrole",
      message: "What is employees new role?",
    },
  ])
  .then(answers => {
    con.query('UPDATE employee SET role_id = ? WHERE employee.id = ?', 
    [answers.newrole,answers.employeeid],
    (err,rows)=>{
      if(err) throw err;
      console.log('Data received');
      console.table(rows);
      firstPrompt();

    })
  
  })
  }






    
  

firstPrompt();

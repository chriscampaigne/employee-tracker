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
            viewRoles();
            break;
  
          case "Add Employee":
            addEmployee();
            break;
  
          case "Add Department":
            addDepartment();
            break;

          case "Add Role":
            addRole();
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
  function viewRoles() {
  con.query(`SELECT * FROM role`, (err,rows) => {
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
  };

  function addDepartment() {
    inquirer
    .prompt([
      {
        type: "input",
        name: "newdepartment",
        message: "What is the new department?",
      },
     
    ])
    .then(answers => {
      con.query('INSERT INTO department (name) VALUES (?)',
      [answers.newdepartment], (err,rows)=>{
        if(err) throw err;
        console.log('Data received');
        console.table(rows);
        firstPrompt();
      })
    })

  };

``
  function addRole () {
    inquirer
    .prompt([
      {
        type: "input",
        name: "newrole",
        message: "What is the new role?",
      },
      {
        type: "input",
        name: "newsalary",
        message: "What is the salary of the role?",
      },
      {
        type: "input",
        name: "departmentrole",
        message: "What department is the new role in?",
      },
    ])
    .then(answers => {
      con.query('INSERT INTO role(title,salary,department_id) VALUES (?,?,?)',
      [answers.newrole,answers.newsalary,answers.departmentrole], (err,rows)=>{
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

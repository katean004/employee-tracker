var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "GakuenAlice123*",
    database: "emptrack_db"
  });

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
  start()
});



//Ask user what to do
function start(){

    inquirer.prompt({
        type: "list",
        message: "What would you like to do?",
        name: "startOptions",
        choices:["Add Employee", "Delete Employee", "View All Employees", "View Departments", "View Roles", "View All Employees By Department", 
        "View All Employees By Manager", "Update Employee Role", "Update Employee Manager", 
        "Add Roles", "Add Department"]
    }).then(function(startAns){
        if(startAns.startOptions === "Add Employee"){
            //run function that adds employee
            addEmp();

        }else if(startAns.startOptions === "Delete Employee"){
            //run function that deletes employee
            deleteEmp();

        }else if(startAns.startOptions === "View All Employees"){
            //run function that views employee
            viewAllEmp();

        }else if(startAns.startOptions === "View All Employees By Department"){
            //run function that views employee
            viewDeptEmp();

        }else if(startAns.startOptions === "View All Employees By Manager"){
            //run function that views employee
            viewManEmp();

        }else if(startAns.startOptions === "Update Employee Role"){
            //run function that views employee
            updateRole();

        }else if(startAns.startOptions === "Update Employee Manager"){
            //run function that views employee
            updateMan();

        }else if(startAns.startOptions === "Add Roles"){
            //run function that adds roles
            addRoles()

        }else if(startAns.startOptions === "Add Department"){
            //run function that adds department
            addDept();

        }else if(startAns.startOptions === "View Departments"){
            //run function that views departments
            viewDept();

        }else if(startAns.startOptions === "View Roles"){
            //run function that views roles
            viewRoles();

      }
    });

}

//Adding employees function (DONE)
function addEmp(){

  connection.query("SELECT * FROM roles",function(err,res){
    if (err) throw err
  
    let myRoles = res.map(function(role){
      return({
              name:role.title,
              value: role.id
             })
             //when user chooses dept name inquirer will choose the department id for them
    })
    connection.query("SELECT * FROM employee",function(err,res){
      if (err) throw err
    
      let myEmployees = res.map(function(emp){
        return({
                name:`${emp.first_name} ${emp.last_name}`,
                value: emp.id
               })
               //when user chooses dept name inquirer will choose the department id for them
      })

  //ask users for employee info using inquirer and query connection add the data to the mysql tables 
  const questions = 
  [{
      type: "input",
      message: "What is the employee's first name?",
      name: "firstName"
  },
  {
      type: "input",
      message: "What is the employee's last name?",
      name: "lastName"
  },
  {
      type: "list",
      message: "What is the employee's role id?",
      name: "role",
      choices:myRoles
      //Should i have choices be roles form sql roles table? 
      //or have hard coded choices here then add into sql roles table
  },
  {
      type: "list",
      message: "What is the employee's manager id?",
      name: "manId",
      choices:myEmployees
  }];

inquirer.prompt(questions).then(function(empInfo){
//add empInfo to the table in sql

var queryEmp = connection.query(
  "INSERT INTO employee SET ?", 
  //do i need the question mark here?
  {
    first_name: empInfo.firstName,
    last_name: empInfo.lastName,
    role_id: empInfo.role,
    manager_id: empInfo.manId
  },
  function(err, res) {
    if (err) throw err;
    console.log(res.affectedRows + " product inserted!\n");
    
    //call quit function to see if user wants to do other functions or quit
    quit();
  }
);

console.log(queryEmp.sql);
//will this show the new employee added?

      });
    })
  })   
}


//Deleting employees function (Bonus)
function deleteEmp(){
    console.log("Deleting employee");

    //query connection to mysql and show whole employee table of employee choices
    //DELETE FROM table_names WHERE refer to employee id or id...

    //call quit function to see if user wants to do other functions or quit
}

//Viewing all employees function 
function viewAllEmp(){
    console.log("Viewing all employees");


    //query connection to mysql from department, roles, employee tables to view specific employee or all employees...
    //join all the info we need from each table 
    //into new table with id, first_name, last_name, title, department, salary, manager

    //console.table(employee info)

    //call quit function to see if user wants to do other functions or quit    
}

//Viewing employees by department function (BONUS)
function viewDeptEmp(){
    console.log("Viewing all employees by department");

    //query connection to mysql from department, roles, employee tables to view specific employee or all employees...
    //console.table(employee info)
    //view by id, first_name, last_name, title, department, salary, manager

    //call quit function to see if user wants to do other functions or quit    
}

//Viewing employees by manager function (BONUS)
function viewManEmp(){
    console.log("Viewing all employees by manager");

    //query connection to mysql from department, roles, employee tables to view specific employee or all employees...
    //console.table(employee info)
    //view by id, first_name, last_name, title, department, salary, manager

    //call quit function to see if user wants to do other functions or quit    
}

//Update employee role function (DONE)
function updateRole(){

  connection.query("SELECT * FROM roles",function(err,res){
      if (err) throw err
    
      let myRoles = res.map(function(role){
        return({
                name:role.title,
                value: role.id
               })
               //when user chooses dept name inquirer will choose the department id for them
      })
      connection.query("SELECT * FROM employee",function(err,res){
        if (err) throw err
      
        let myEmployees = res.map(function(emp){
          return({
                  name:`${emp.first_name} ${emp.last_name}`,
                  value: emp.id
                 })
                 //when user chooses dept name inquirer will choose the department id for them
        });
        
      
      inquirer.prompt([
        {
          type: "list",
          message: "which Employee you like to change the role on??",
          name: "emp",
          choices:myEmployees
          //Should i have choices be roles form sql roles table? 
          //or have hard coded choices here then add into sql roles table
      },
      {
          type: "list",
          message: "What is the employee's new role?",
          name: "newRole",
          choices:myRoles
      
      }]).then(function(ans){
      //add empInfo to the table in sql
      
       connection.query(
        "UPDATE  employee SET ? WHERE ?", 
        //do i need the question mark here?
        [
          {
            role_id : ans.newRole
          },
          {
            id: ans.emp
          }
      ],
        function(err, res) {
          if (err) throw err;
          console.log(res.affectedRows + " product inserted!\n");
          
          //call quit function to see if user wants to do other functions or quit  
          quit(); 
        })
      })
    
      })
    
    })
  
}

//Update employee manager function (BONUS)
function updateMan(){
    console.log("Updating employee manager");

    //choose employee to update 
    //query connection UPDATE table_name SET row_data = "new data" WHERE id = 2

    //call quit function to see if user wants to do other functions or quit
}

//Add roles function (DONE)
function addRoles(){
connection.query("SELECT * FROM department",function(err,res){
  if (err) throw err

  let myDepartments = res.map(function(dep){
    return({
            name:dep.name,
            value: dep.id
           })
           //when user chooses dept name inquirer will choose the department id for them
  })

  inquirer.prompt([
    {
      type:"input",
      name:"roleName",
      message:"WHat is the name of the role?"
    },
    {
      type:"input",
      name:"salary",
      message:"what is the salary for this role?"
    },
    {
      type:"list",
      name:"depId",
      message:"What department this role belongs to?",
      choices: myDepartments
    }
  ]).then(roleRes => {
    console.log(roleRes);
    connection.query("INSERT INTO roles SET ?",
    {
      title: roleRes.roleName,
      salary: roleRes.salary,
      department_id: roleRes.depId
    })
  }).then(roleErr =>{
    if (roleErr) throw roleErr
    start();
  })
});
}

//Add department function (DONE)
function addDept(){
  
    inquirer.prompt([
      {
        type:"input",
        name:"deptName",
        message:"What department would you like to add?"
      }
    ]).then(deptRes => {
      console.log(deptRes);
      connection.query("INSERT INTO department SET ?",
      {
        name: deptRes.deptName
      })
    }).then(roleErr =>{
      if (roleErr) throw roleErr
      quit();
    });
  }

//View departments function (DONE)
function viewDept(){
  connection.query("SELECT * FROM department", function(err,res){
    if (err) throw err;
  
    //return and show departments
    console.table(res);
    quit();
  });
}

//View roles function (DONE)
function viewRoles(){
  connection.query("SELECT * FROM roles", function(err,res){
    if (err) throw err;
  
    //return and show departments
    console.table(res);
    quit();
  });
}


//Quit function (DONE)
function quit(){
    //repeat start function when user is done with one action and see if they want to quit or continue other functions
    inquirer.prompt({
        type: "list",
        message: "Are you finished?",
        name: "endOptions",
        choices:["Yes", "No"]
    }).then(function(quitting){
        if(quitting.endOptions === "No"){
            start();
        }else if(quitting.endOptions === "Yes"){
            //console.table(all employee info)
            console.log("All Done!");
            connection.end()
        }
    });
}

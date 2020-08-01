const inquirer = require("inquirer");

//array for new employees
let myEmpArr = [];

//Run start function 
start();

//Ask user what to do
function start(){

    inquirer.prompt({
        type: "list",
        message: "What would you like to do?",
        name: "startOptions",
        choices:["Add Employee", "Delete Employee", "View All Employees", "View All Employees By Department", 
        "View All Employees By Manager", "Update Employee Role", "Update Employee Manager"]
    }).then(function(startAns){
        if(startAns.startOptions === "Add Employee"){
            //run function that adds employee
            console.log("Adding employee");

        }else if(startAns.startOptions === "Delete Employee"){
            //run function that deletes employee
            console.log("Deleting employee");

        }else if(startAns.startOptions === "View All Employees"){
            //run function that views employee
            console.log("Viewing all employees");

        }else if(startAns.startOptions === "View All Employees By Department"){
            //run function that views employee
            console.log("Viewing all employees by department");

        }else if(startAns.startOptions === "View All Employees By Manager"){
            //run function that views employee
            console.log("Viewing all employees by manager");

        }else if(startAns.startOptions === "Update Employee Role"){
            //run function that views employee
            console.log("Updating employee role");

        }else if(startAns.startOptions === "Update Employee Manager"){
            //run function that views employee
            console.log("Updating employee manager");

        }
    });

}

//Adding employees function
function addEmp(){
    //ask users for employee info using inquirer and query connection add the data to the mysql tables 
    

    //INSERT INTO department (name) VALUES ("Manufacturing");

    //call quit function to see if user wants to do other functions or quit
}


//Deleting employees function
function deleteEmp(){
    //query connection to mysql and DELETE FROM table_names WHERE refer to employee id or id...

    //call quit function to see if user wants to do other functions or quit
}


//Viewing employees function 
function viewEmp(){
    //query connection to mysql from department, roles, employee tables to view specific employee or all employees...

    //console.table(employee info)

    //call quit function to see if user wants to do other functions or quit    
}


//Quitting function 
function quit(){
    //repeat start function when user is done with one action and see if they want to quit or continue other functions

}

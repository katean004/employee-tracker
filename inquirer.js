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
        choices:["Add Employee","Delete Employee","View Employees"]
    }).then(function(startAns){
        if(startAns === "Add Employee"){
            //run function that adds employee
        }else if(startAns === "Delete Employee"){
            //run function that deletes employee
        }else if(startAns === "View Employees"){
            //run function that views employee
        }
    });

}

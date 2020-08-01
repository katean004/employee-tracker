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

            addEmp();

        }else if(startAns.startOptions === "Delete Employee"){
            //run function that deletes employee
            console.log("Deleting employee");

            deleteEmp();

        }else if(startAns.startOptions === "View All Employees"){
            //run function that views employee
            console.log("Viewing all employees");

            viewAllEmp();

        }else if(startAns.startOptions === "View All Employees By Department"){
            //run function that views employee
            console.log("Viewing all employees by department");

            viewDeptEmp();

        }else if(startAns.startOptions === "View All Employees By Manager"){
            //run function that views employee
            console.log("Viewing all employees by manager");

            viewManEmp();

        }else if(startAns.startOptions === "Update Employee Role"){
            //run function that views employee
            console.log("Updating employee role");

            updateRole();

        }else if(startAns.startOptions === "Update Employee Manager"){
            //run function that views employee
            console.log("Updating employee manager");

            updateMan();
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
    //query connection to mysql and show whole employee table of employee choices
    //DELETE FROM table_names WHERE refer to employee id or id...

    //call quit function to see if user wants to do other functions or quit
}


//Viewing all employees function 
function viewAllEmp(){
    //query connection to mysql from department, roles, employee tables to view specific employee or all employees...
    //console.table(employee info)
    //view by id, first_name, last_name, title, department, salary, manager

    //call quit function to see if user wants to do other functions or quit    
}

//Viewing employees by department function 
function viewDeptEmp(){
    //query connection to mysql from department, roles, employee tables to view specific employee or all employees...
    //console.table(employee info)
    //view by id, first_name, last_name, title, department, salary, manager

    //call quit function to see if user wants to do other functions or quit    
}

//Viewing employees by manager function 
function viewManEmp(){
    //query connection to mysql from department, roles, employee tables to view specific employee or all employees...
    //console.table(employee info)
    //view by id, first_name, last_name, title, department, salary, manager

    //call quit function to see if user wants to do other functions or quit    
}

//Update employee role function
function updateRole(){
    //choose employee to update 
    //query connection UPDATE table_name SET row_data = "new data" WHERE id = 2

    //call quit function to see if user wants to do other functions or quit    
}

//Update employee manager function
function updateMan(){
    //choose employee to update 
    //query connection UPDATE table_name SET row_data = "new data" WHERE id = 2

    //call quit function to see if user wants to do other functions or quit
}



//Quitting function 
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
        }
    });
}

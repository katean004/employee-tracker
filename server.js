var mysql = require("mysql");
var inquirer = require("inquirer");
var express = require("express");

// Create express app instance.
var app = express();


// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


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
});

//TESTING START AND ADD EMP FUNCTION HERE MIGHT REMOVE LATER
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
        }
    });
}

//Adding employees function
function addEmp(){
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
                type: "input",
                message: "What is the employee's role id?",
                name: "role"
                //Should i have choices be roles form sql roles table? 
                //or have hard coded choices here then add into sql roles table
            },
            {
                type: "input",
                message: "What is the employee's manager id?",
                name: "manId"
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
              // what is affectedRows?

            }
          );

          console.log(queryEmp.sql);
          //will this show the new employee added?

    });


    //INSERT INTO department (name) VALUES ("Manufacturing");

    //call quit function to see if user wants to do other functions or quit
}

//TESTING START AND ADD EMP FUNCTION END

// Get route
app.get("/", function(req, res) {
    connection.query("SELECT * FROM tasks;", function(err, data) {
      if (err) throw err;

      //return response 
      //DONT THINK WE NEED THIS BC WE NOT USING FRONT END
    });
  });

// Post route
app.post("/", function(req, res) {

    connection.query("SELECT * FROM tasks;", function(err, data) {
        if (err) throw err;
  
        //return response
        //DONT THINK WE NEED THIS BC WE NOT USING FRONT END
      });
  });


// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });
  
  
  
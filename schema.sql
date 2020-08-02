DROP DATABASE IF EXISTS emptrack_db;

CREATE DATABASE emptrack_db;

USE emptrack_db;

CREATE TABLE department (
  dept_id int NOT NULL AUTO_INCREMENT,
  name varchar(30) NOT NULL,
  PRIMARY KEY (dept_id)
);

CREATE TABLE roles (
  roles_id int NOT NULL AUTO_INCREMENT,
  title varchar(30) NOT NULL,
  salary DECIMAL(6, 2),
  department_id INT,
  FOREIGN KEY(department_id) REFERENCES department(dept_id),
  PRIMARY KEY (roles_id)
);

CREATE TABLE employee (
  emp_id int NOT NULL AUTO_INCREMENT,
  first_name varchar(30) NOT NULL,
  last_name varchar(30) NOT NULL,
  role_id INT NOT NULL,
  manager_id INT,
  FOREIGN KEY(role_id) REFERENCES roles(roles_id),
  FOREIGN KEY(manager_id) REFERENCES employee(emp_id), 
  PRIMARY KEY (emp_id)
);
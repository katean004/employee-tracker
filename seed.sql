-- Pre populated employee information 
INSERT INTO department (name) VALUES ("Manufacturing");
INSERT INTO department (name) VALUES ("Quality Assurance");
INSERT INTO department (name) VALUES ("Human Resources");
INSERT INTO department (name) VALUES ("Document Control");
INSERT INTO department (name) VALUES ("Quality Control");


INSERT INTO roles (title, salary, department_id) VALUES ("Associate", 25.23, 51);
INSERT INTO roles (title, salary, department_id) VALUES ("Senior Associate", 26.53, 42);
INSERT INTO roles (title, salary, department_id) VALUES ("Supervisor", 30.41, 75);
INSERT INTO roles (title, salary, department_id) VALUES ("Group Lead", 28.05, 54);
INSERT INTO roles (title, salary, department_id) VALUES ("Manager", 32.61, 87);


INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Kate", "Faker", 2, 4);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Myk", "Walker", 6, 6);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Joey", "Lopez", 9, 7);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Elizabeth", "Rivera", 4, 2);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Brian", "No", 6, 7);

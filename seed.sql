-- Pre populated employee information 
INSERT INTO department (name) VALUES ("Manufacturing");
INSERT INTO department (name) VALUES ("Quality Assurance");
INSERT INTO department (name) VALUES ("Human Resources");
INSERT INTO department (name) VALUES ("Document Control");
INSERT INTO department (name) VALUES ("Quality Control");


INSERT INTO roles (title, salary, department_id) VALUES ("Associate", 25.20, 51);
INSERT INTO roles (title, salary, department_id) VALUES ("Senior Associate", 26.55, 42);
INSERT INTO roles (title, salary, department_id) VALUES ("Supervisor", 30.12, 75);
INSERT INTO roles (title, salary, department_id) VALUES ("Group Lead", 28.02, 54);
INSERT INTO roles (title, salary, department_id) VALUES ("Manager", 32.10, 87);


INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Kate", "Faker", 2);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Myk", "Walker", 6);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Joey", "Lopez", 9);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Elizabeth", "Rivera", 4);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Brian", "No", 6);

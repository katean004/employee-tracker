-- Pre populated employee information 
INSERT INTO department (name) VALUES ("Manufacturing");
INSERT INTO department (name) VALUES ("Quality Assurance");
INSERT INTO department (name) VALUES ("Human Resources");
INSERT INTO department (name) VALUES ("Document Control");
INSERT INTO department (name) VALUES ("Quality Control");
INSERT INTO department (name) VALUES ("Facilities");
INSERT INTO department (name) VALUES ("Process Development");
INSERT INTO department (name) VALUES ("Cleaner");



INSERT INTO roles (title, salary, department_id) VALUES ("Associate", 25.23, 1);
INSERT INTO roles (title, salary, department_id) VALUES ("Senior Associate", 26.53, 4);
INSERT INTO roles (title, salary, department_id) VALUES ("Supervisor", 30.41, 3);
INSERT INTO roles (title, salary, department_id) VALUES ("Group Lead", 28.05, 2);
INSERT INTO roles (title, salary, department_id) VALUES ("Manager", 32.61, 5);
INSERT INTO roles (title, salary, department_id) VALUES ("Director", 50.61, 6);
INSERT INTO roles (title, salary, department_id) VALUES ("CEO", 99.61, 7);
INSERT INTO roles (title, salary, department_id) VALUES ("Cleaner", 12.41, 8);




INSERT INTO employee (first_name, last_name, role_id) VALUES ("Kate", "Boba", 7);
INSERT INTO employee (first_name, last_name, role_id) VALUES ("Myk", "Walker", 2);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Joey", "Lopez", 5, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Elizabeth", "Rivera", 3, 2);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Brian", "No", 6, 3);
INSERT INTO employee (first_name, last_name, role_id) VALUES ("Jefferson", "Fan", 1);
INSERT INTO employee (first_name, last_name, role_id) VALUES ("Jerry", "Loo", 4);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Ashley", "Yoon", 2, 5);

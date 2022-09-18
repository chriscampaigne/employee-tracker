USE employeesDB;

INSERT INTO department (name)

VALUES  ('Sales'),
        ('Engineering'),
        ('Finance'),
        ('Legal');

INSERT INTO roles (title,salary)

VALUES
        ('Sales Lead', '100000'),
        ('Sales Person','80000'),
        ('Lead Engineer','150000'),
        ('Software Engineer','120000'),
        ('Account Manager','160000'),
        ('Accountant','125000'),
        ('Legal Team Lead','250000'),
        ('Lawyer','190000'),
        
        

INSERT INTO employee (first_name,last_name,role_id,department_id)

VALUES
        ('Asuka','Langley','1','1'),
        ('Rei','Ayanami', '1','1'),
        ('Shinji','Ikari', '1','2'),
        ('Misato','Katsuragi', '2','2'),
        ('Ryoji','Kaji', '4','2'),
        ('Mari','Makanami', '5','3'),
        ('Kaworu','Nagisa', '6','3'),
        ('Hikari','Horaki', '7','4'),
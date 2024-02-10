-- Создать таблицу employees

use gt171023;

create table employees (
	employee_id int primary key auto_increment,
    first_name varchar (128) not null,
    last_name varchar (128) not null,
    email varchar (50) not null,
    phone varchar (20) not null
);

-- Ой, забыли про зарплату)) Добавить поле salary numeric(9, 2),
alter table employees
add column salary decimal(9,2);

-- Ойййй, нет, зарплата должна быть целым числом. Изменить тип salary на integer 
alter table employees
modify column salary int not null; 

-- Переименовать поле first_name -> fname
alter table employees
change first_name fname varchar(128) not null;

-- Удалить поле phone
alter table employees
drop column phone;

-- Добавить поле department строка не null 
alter table employees
add column department varchar(128) not null;

-- Заполнить таблицу (7 строк)
insert into employees (fname, last_name, email, salary, department)
values  ('John', 'Doe', 'john.doe@example.com', 1000, 'IT'),
		('Jane', 'Smith', 'jane.smith@example.com', 2000, 'HR'),
		('Bob', 'Johnson', 'bob.johnson@example.com', 1000, 'Finance'),
		('Alice', 'Williams', 'alice.williams@example.com', 3000, 'Marketing'),
		('Charlie', 'Brown', 'charlie.brown@example.com', 4000, 'IT'),
		('Eva', 'Jones', 'eva.jones@example.com', 5000, 'Finance'),
		('David', 'Miller', 'david.miller@example.com', 6000, 'Marketing')
        ;
			-- имена из gpt чата, сорри.
            
select * from employees;
use gt171023;

 create table employees(
 	employee_id int primary key auto_increment,
 	first_name varchar(128) not null,
 	last_name varchar(128) not null,
 	email varchar(128) not null,
 	salary int, 
	department varchar(128) not null
 );

select * from employees;

-- Повысить зарплаты для отдела sales на 20%, для finance 15%, для shipping 10%, для marketing 25%, для HR 20% и для IT 35%. Записать данные в новое поле new_salary.
-- Поле создавать не нужно, используем AS. 
set sql_safe_updates = 0;
update employees
set salary = salary + ((salary * 20)/100)
where department = "sales";

update employees
set salary = salary + ((salary * 15)/100)
where department = "finance";

update employees
set salary = salary + ((salary * 10)/100)
where department = "shipping";

update employees
set salary = salary + ((salary * 25)/100)
where department = "marketing";

update employees
set salary = salary + ((salary * 20)/100)
where department = "HR";

update employees
set salary = salary + ((salary * 25)/100)
where department = "IT";

set sql_safe_updates = 1;

select * from employees;

-- Создать поле new_salary типа numeric(7, 2)
alter table employees
add column new_salary numeric(7,2);

-- Заполнить поле: повысить зарплаты для отдела sales на 20%, для finance 15%, для shipping 10%, для marketing 25%, для HR 20% и для IT 35%.
set sql_safe_updates = 0;

update employees
set new_salary = salary + ((salary * 20)/100)
where department = "sales";

update employees
set new_salary = salary + ((salary * 15)/100)
where department = "finance";

update employees
set new_salary = salary + ((salary * 10)/100)
where department = "shipping";

update employees
set new_salary = salary + ((salary * 25)/100)
where department = "marketing";

update employees
set new_salary = salary + ((salary * 20)/100)
where department = "Human Resources";

update employees
set new_salary = salary + ((salary * 25)/100)
where department = "IT";

set sql_safe_updates = 1;

-- Вывести из таблицы employees firstname как username, lastname как surname и новое поле fullname, которое состоит из имен и фамилий сотрудников.
select first_name as username, last_name as surname, concat(first_name, ' ' , last_name) as fullname
from employees;

-- Вывести новое поле commission, которое будет null, если зарплата сотрудника меньше 3000, будет 10, если зарплата меньше 6000, будет 15, если зарплата меньше 9000, и будет 20, если зарплата больше/равно 9000.
select salary,
			case 
				when salary < 3000 then null
                when salary < 6000 then 10
				when salary < 9000 then 15
                when salary >= 9000 then 20
            end as commission
from employees;

-- Создать новое поле commission и соответственно заполнить.
alter table employees
add column commission int;

set sql_safe_updates = 0;
update employees
set commission =
			case 
				when salary <= 3000 then null
                when salary < 6000 then 10
				when salary < 9000 then 15
                when salary >= 9000 then 20
            end;
set sql_safe_updates = 1;

select*from employees;

-- Создать поле finalsalary и заполнить формулой salary + salary * commission / 10. Проверить commission на null, так чтобы в случае неопределенности finalprice принимал значение salary. 
alter table employees
add column finalsalary int;

set sql_safe_updates = 0;
update employees
set finalsalary =
				case
					when commission is null then salary
                    else salary + (salary * commission / 10)
				end;


-- Вывести поле email в нижнем регистре.
select lower(email) as email
from employees;

-- Создать новое поле chk_email типа varchar(128)
alter table employees
add column chk_email varchar(128);

-- Заполнить поле chkemail. Если длина email меньше 3, значением chkemail будет 'Введите больше символов',
-- если длина email больше/равно 3 и меньше 7,  значением chkemail будет 'Кол/во символов совпадает', если длина email больше/равно 7,  значением chkemail будет 'Введите меньше символов'.
update employees
set chk_email =
				case
					when length(email) <3 then 'Введите больше символов'
                    when length(email) >=3 and length(email) < 7 then 'Кол/во символов совпадает'
                    when length(email) >= 7 then 'Введите меньше символов'
               end;
use hr;

-- 1. Напишите запрос, который выводит идентификатор сотрудника, его имя и фамилию, а также категорию зарплаты на основе следующих условий:	
	-- Если зарплата меньше 5000, категория "Низкая"
	-- Если зарплата от 5000 до 10000, категория "Средняя"
	-- Если зарплата больше 10000, категория "Высокая"
    
select 
		first_name,
		last_name,
		case 
			when salary < 5000 then "Низкая"
            when salary > 5000 and salary < 10000 then "Средняя"
            else "Высокая"
		end as salary
from employees;

-- 2. Определение размера премии сотрудникам:
	-- Напишите запрос, который выводит идентификатор сотрудника, его имя и фамилию, а также размер премии на основе следующих условий:
	-- Если зарплата меньше 5000, премия составляет 10% от зарплаты.
	-- Если зарплата от 5000 до 10000, премия составляет 15% от зарплаты.
	-- Если зарплата больше 10000, премия составляет 20% от зарплаты.

select
		employee_id,
		first_name,
		last_name,
        case
				when salary < 5000 then salary * 0.1
				when salary > 5000 and salary < 10000 then salary * 0.15
				else salary * 0.2
        end as bonus
from employees
;

-- 3. Получить список стран с указанием их региона и обозначением страны "EU" для стран Европейского союза, "Non-EU" для остальных стран

select 
		c.country_name as country,
        case
			when reg.region_name = 'europe' then 'EU'
            else 'Non-EU'
        end as region 
from countries as c
inner join regions as reg
on reg.region_id = c.region_id
;

-- 4. Получить список стран с указанием количества символов в их названиях.

select 
	country_name, length(country_name) as country_length
from countries
;   

-- 5. Получить список стран и их первые три символа в названии

select
	country_name, left(country_name, 3) as short_name
from countries
; 
   
-- 6 Получить список сотрудников с заменой их email на "Confidential", если он содержит слово "sqltutorial"

select 
	first_name, 
    last_name,
case
	when email like upper('%sqltutorial%') then 'Confidential'
    else email
end as email_changed
from employees
;

-- 7. Получить список сотрудников и указать их email в нижнем регистре.

select
		first_name,
		last_name,
        lower(email)
from employees
;

-- 8. Получить список сотрудников(firstname, lastname) с указанием их должности(job_title).

select
		em.first_name,
		em.last_name,
        j.job_title as job_possition
from employees as em
inner join jobs as j
on em.job_id = j.job_id
;

-- 9. Получить список отделов(department_name) и их названий с указанием местоположения(city).

select
	dep.department_name,
    loc.city
from departments as dep
join locations as loc
on loc.location_id = dep.location_id
;

-- 10. Получить список отделов(departmentname) и их менеджеров(firstname, last_name).

select
	dep.department_name,
    em.first_name,
	em.last_name
from departments as dep
right join employees as em
on dep.manager_id = em.manager_id
;

-- 11. Получить список сотрудников(firstname, lastname) с указанием их департамента(department_name), отсортированный по департаменту.

select
	em.first_name,
	em.last_name,
    dep.department_name
from employees as em
right join departments as dep
on dep.manager_id = em.manager_id
order by dep.department_name asc
;

-- 12. Получить список сотрудников(firstname, lastname)  и их менеджеров(firstname, lastname) 

select 
	em.first_name, 
    em.last_name, 
    emp.first_name, 
    emp.last_name
from employees  as em
join employees as emp
on emp.manager_id = em.manager_id;


-- 13. Получить список стран (??), где местоположение находится в США.
-- может страны, которые находятся в регионе Americas

select 
	c.country_name as country
from countries as c
join regions as r
on c.region_id = r.region_id
where r.region_name = 'Americas'
;


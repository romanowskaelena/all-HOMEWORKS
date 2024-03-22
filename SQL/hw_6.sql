-- hw  
use homework;

-- Таблица - customers
-- Вывести максимальный и минимальный credit_limit.
select
	max(credit_limit),
    min(credit_limit)
from customers;

-- Вывести покупателей у которых creditlimit выше среднего creditlimit.
select
	CUST_FIRST_NAME,
    CUST_LAST_NAME
from customers
where credit_limit > (select avg(credit_limit) from customers) 
;

-- Найти кол/во покупателей имя которых начинается на букву 'D' и credit_limit больше 500.
select
	count(*) as customers_count
from customers
where CUST_FIRST_NAME = 'D%' and credit_limit > 500
;

-- Таблица - order_items
-- Найти среднее значение unit_price
select
	avg(UNIT_PRICE)
from order_items
;

-- Таблицы - orderitems, productinformation
-- Вывести имена продуктов(PRODUCT_NAME), кол/во(QUANTITY) которых меньше среднего.
select 
		t1.PRODUCT_NAME,
        t2.QUANTITY
from product_information as t1
inner join order_items as t2
on t1.PRODUCT_ID = t2.PRODUCT_ID
where QUANTITY < (select avg(QUANTITY) from order_items) 
;
        
-- Таблицы - orders, customers
-- Вывести имя и фамилию покупателя с максимальной общей суммой покупки(ORDER_TOTAL).
select
	t1.CUST_FIRST_NAME,
    t1.CUST_LAST_NAME,
    t2.ORDER_TOTAL
from customers as t1
inner join orders as t2
on t1.CUSTOMER_ID = t2.CUSTOMER_ID
where ORDER_TOTAL = (select max(ORDER_TOTAL) from orders)
;


-- Найти сумму общей суммы покупок(ORDER_TOTAL) всех женатых мужчин покупателей.
select 
	sum(ORDER_TOTAL)
from customers as t1
inner join orders as t2
on t1.CUSTOMER_ID = t2.CUSTOMER_ID
where t1.MARITAL_STATUS = 'married' and t1.GENDER = 'M'
;
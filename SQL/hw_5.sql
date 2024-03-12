-- Правой кнопкой нажать на новую базу данных, выбрать Table data import wizard -> browse -> выбрать таблицу -> open -> все время next... -> finish

create database homework;
use homework;

-- Вывести имя, фамилию пользователей и даты их заказов(order_date).
select 
	c.CUST_FIRST_NAME as name,
    c.CUST_LAST_NAME as lastname,
    o.ORDER_DATE
from customers c
join orders o
on c.customer_id = o.customer_id
;

-- Вывести даты заказов продуктов и описание этих продуктов(product_description).
select 
	 o.order_date,
     pr.product_description
from orders o
join order_items oi
on o.order_id = oi.order_id
join product_information pr
on oi.product_id = pr.product_id
;

-- Вывести имя, фамилию пользователей, даты заказов(orderdate), описание продуктов, которые они заказали и категории соответствующих продуктов (categoryname).
select 
	c.CUST_FIRST_NAME as name,
    c.CUST_LAST_NAME as lastname,
    o.ORDER_DATE,
    pr.product_description,
    ct.CATEGORY_NAME
from customers c
join orders o
on c.customer_id = o.customer_id
join order_items oi
on o.order_id = oi.order_id
join product_information pr
on oi.product_id = pr.product_id
join categories_tab ct
on ct.category_id = pr.category_id
;

-- Вывести названия(productname), описания категорий(categorydescription) и количества(quantity) тех продуктов, у которых минимальная стоимость (min_price) больше 300.
select 
	pri.PRODUCT_NAME,
    cat.CATEGORY_DESCRIPTION,
    pri.MIN_PRICE,
    oi.QUANTITY
from product_information pri
join categories_tab cat
on cat.category_id = pri.category_id
join order_items oi
on pri.product_id = oi.product_id
where pri.MIN_PRICE > 300
;

-- Вывести имя, фамилию покупателей, которые купили принтеры.
select 
	c.CUST_FIRST_NAME as name,
    c.CUST_LAST_NAME as lastname,
    ct.CATEGORY_DESCRIPTION
from customers c
join orders o
on c.customer_id = o.customer_id
join order_items oi
on o.order_id = oi.order_id
join product_information pr
on oi.product_id = pr.product_id
join categories_tab ct
on ct.category_id = pr.category_id
where ct.category_description = 'printers'
;

-- Вывести имя, фамилию всех женатых мужчин покупателей, которые покупали продукты со стоимостью (list_price) больше 550.
select 
	c.CUST_FIRST_NAME as name,
    c.CUST_LAST_NAME as lastname,
    pr.LIST_PRICE
from customers c
join orders o
on c.customer_id = o.customer_id
join order_items oi
on o.order_id = oi.order_id
join product_information pr
on oi.product_id = pr.product_id
join categories_tab ct
on ct.category_id = pr.category_id
where pr.list_price > 500 and (c.gender = 'm' and c.marital_status = 'married')
;

-- Вывести названия(product_name) тех продуктов, у которых стоимость больше, чем у продукта 'LaserPro 600/6/BW’.
select 
	product_name,
    list_price
from product_information

where list_price > (select list_price from product_information where product_name = 'LaserPro 600/6/BW')
;

use shop;

-- Найти общую сумму заказов для каждого клиента.
select sum(t1.AMT), t1.cust_id
from orders t1
join customers t2
on t1.cust_id = t2.cust_id
group by t1.cust_id
;

-- Получить количество заказов для каждого продавца.
select count(t1.ORDER_ID) as amout_orders, t2.sell_id as seller
from orders t1
join sellers t2
on t1.sell_id = t2.sell_id
group by t2.sell_id
;

-- Получить количество клиентов с рейтингом выше среднего.
select count(CUST_ID) as cust_amount
from customers
where rating > (select avg(rating) from customers)
;

-- Получить количество клиентов в каждом городе с рейтингом выше 200.
select count(CUST_ID)  as cust_amount, city
from customers
where rating > 200
group by city
;

-- Получить количество заказов, сделанных в каждый месяц.
select count(order_id) as order_amount, month(odate) as month_number
from orders
group by month(odate) 
;

-- Найти клиентов, у которых сумма заказов превышает среднюю сумму заказов всех клиентов.
select  t2.cust_id, count(t1.order_id) as order_amount, sum(t1.amt) as total_for_cust
from orders t1
join customers t2
on t1.cust_id = t2.cust_id
group by t1.cust_id
having sum(t1.AMT) > (select avg(amt) as avg_all_orders from orders)
;

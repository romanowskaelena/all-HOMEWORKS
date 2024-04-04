-- hw

-- Определить какие из покупок были совершены в июне
select ORDER_ID, ODATE
from orders
where month(ODATE) = 6;

-- Определить какие из покупок были совершены в интервале от 10 апреля 2022 до 10 мая 2022 года
select ORDER_ID, ODATE
from orders
where ODATE between '2022-04-10' and '2022-05-10';

-- Определить сколько покупок было совершено в марте
select count(ORDER_ID)
from orders
where month(ODATE) = 3;

-- Определить среднюю стоимость покупок в марте
select avg(AMT) as средняя_стоимость_покупок_в_марте
from orders
where month(ODATE) = 3;

-- Выведите минимальный рейтинг(rating) покупателя среди сделавших заказ в апреле 2022 года.
select min(RATING)
from customers as cus
inner join orders as ord
on cus.CUST_ID = ord.CUST_ID
where month(ord.ODATE) = 4;

-- Выведите продавцов, которые оформили заказ на наибольшую сумму в период с 1 марта по 1 май 2022 года
-- Вывести : sell_id, amt
select ord.amt, sel.sell_id 
from sellers as sel
inner join  orders as ord
on ord.SELL_ID = sel.SELL_ID
where ODATE between '2022-03-01' and '2022-05-01' and ord.amt = (select max(ord.amt))
;

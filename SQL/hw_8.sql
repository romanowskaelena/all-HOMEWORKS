use airport;

-- Посчитать количество рейсов по каждой модели самолета. Вывести modelname и flightcount.
select count(*) as flightcount, model_name
from airliners
group by model_name
;

-- Вычислить среднюю стоимость билета по классам обслуживания. Вывести serviceclass и averageprice.
select service_class, avg(price)
from tickets
group by service_class
;

-- Определить средний возраст клиентов, сгруппированных по классу обслуживания. Вывести serviceclass и averageage.
select service_class, avg(age)
from clients cl
inner join tickets t
on cl.id = t.client_id
group by service_class
;

-- Получить общее количество билетов, купленных каждым клиентом. Вывести name и ticket_count.
select cl.name, count(*) as ticket_count
from clients cl
inner join tickets t
on cl.id = t.client_id
group by cl.name
;

-- Определить количество рейсов, отправленных из каждого аэропорта. Вывести departure и departure_count.
select departure, count(*) as departure_count
from trips
group by departure
;

-- Вычислить общий доход от продажи билетов для каждой страны производителя самолетов. Вывести country и total_sum.
select air.country, sum(ti.price) as total_sum
from airliners air
inner join trips tr
on air.id = tr.airliner_id
inner join tickets ti
on tr.id = ti.id
group by air.country
having sum(ti.price) is not null
;




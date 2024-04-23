
// Домашнее задание
// Задача: вызов лифта
// В доме два лифта.
// Реализовать алгоритм отправки наиближайшего на вызывающий этаж.
// Алгоритм будет применяться в домах разной этажности.
// *Алгоритм будет применяться в домах с количеством > 2 лифтов
// Пример:
// ● в доме 19 этажей
// ● работают лифт А и лифт В
// ● лифт А находиться на 0 этаже
// ● лифт В находиться на 8 этаже
// ● на вход: 1
// ● отправляем лифт А

const lifts = {
    'A': 0, 
    'B': 8 
};

const currentFloor = 5; // где вызывается лифт

function callTheLift(currentFloor, lifts) {
    let nearestLift;
    let minDistance = Infinity; // Infinity —  положительную бесконечность
   
    for (let lift in lifts) {
        const floor = lifts[lift]; // lifts[lift] - value где находится лифт
        const currentDistance = Math.abs(floor - currentFloor);

        if (currentDistance <= minDistance ) { 
            minDistance = currentDistance;
            nearestLift = lift; // key 
        }
    }
    return nearestLift;
}

const nearest = callTheLift(currentFloor, lifts);
console.log("Отправляем лифт: ", nearest)


// // lesson_11 жадный алгоритм 
// задача 1. кодовый замок.
// 5432 код открывающий замок
// 2345 исходный код 
// ответ 8 оборотов
let current = [2,3,4,5]
let target  = [5,4,3,2] 

function turnsCounter(current, target) {
    let counter = 0
    
    if (current.length != target.length) { return console.log('Количество символов на двух барабанах не совпадают');
    } else {

        for (let i = 0; i < current.length; i++) {
        // if (Math.abs(current[i] -target[i]) <= 5) {
        //     counter += Math.abs(current[i] - target[i])
        //  } else{ counter +=  (10 - Math.abs(current[i] - target[i]))
        //  } // полный круг 10 оборотов

         counter += Math.min ( Math.abs(current[i] -target[i]), (10 - Math.abs(current[i] - target[i]) )) ; 
    }
    return console.log(`Нам понадобится ${counter} оборотов`);
    }
}
turnsCounter(current, target)


// // задача 2. дробный рюкзак.
// 10 за 60, 20 за 100, 30 за 120
const capacity = 50;

const items = [
    {
    weight: 10,
    value: 60,
    price: function(){
        return this.value / this.weight
    }
  },
  {
    weight: 20,
    value: 100,
    price: function(){
        return this.value / this.weight
    }
  },
  {
    weight: 30,
    value: 120,
    price: function(){
        return this.value / this.weight
    }
  },
];

function backPack(items, capacity) {
    let count = 0
    let restSpace = capacity
    let totalPrice = 0
    items.sort((a, b) => b.price() - a.price())
for (let i = 0; i < items.length; i++) {
        if (restSpace >= items[i].weight) {
           count = count +items[i].weight
           restSpace = restSpace - items[i].weight
           totalPrice  +=items[i].value
        //    console.log(`count = ${count},  restSpace = ${restSpace}, totalPrice = ${totalPrice}`);
        }  else{
            count += restSpace
            totalPrice += items[i].price() * restSpace
            restSpace = 0
            // console.log(`count = ${count},  restSpace = ${restSpace}, totalPrice = ${totalPrice}`);
            break
        }          
    }
return `В нашем рюкзаке ${count} кг. золота стоимостью ${totalPrice} сказочных денег`
}
console.log(backPack(items, capacity));


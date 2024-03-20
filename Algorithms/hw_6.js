////
// 1 уровень сложности: 1. Quick sort пишем еще раз “с чистого листа”, но сортировка в порядке убывания значения.
// 3*. Реализовать Quick sort используя итерационный подход.

const array = [29, 14, 15, 28, 6, 8, -6, 1, 3, 18];

const quickSort = (array) => {
    if (array.length < 2) {
        return array;
        
    }
    let pivot = array[0];
    const left = [];
    const right = [];

    for (let i = 1; i < array.length; i++) {
       if (pivot < array[i]) {
        left.push(array[i]);        
       }else{
        right.push(array[i]);
       }        
    }
    return quickSort(left).concat(pivot, quickSort(right))
}

console.log(array);
console.log(quickSort(array));


// 2. Написать проверку числа "простое" ли оно, используя итерационный подход. (не рекурсия) 
function simpleNumber(n) {
    for(let i = 2; i < n; i++) {
       if(n % i === 0) return false;
    }
    return n > 1;
   }
   
   console.log(simpleNumber(5)); 
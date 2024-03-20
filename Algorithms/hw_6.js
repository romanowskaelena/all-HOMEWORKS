////
// 1 уровень сложности: 1. Quick sort пишем еще раз “с чистого листа”, но сортировка в порядке убывания значения.
// 3*. Реализовать Quick sort используя итерационный подход.

function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[arr.length - 1];
    const left = [];
    const right = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] >= pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}


const unsortedArray = [3, 1, 4, 1, 5, 9, 2, 6, 5];
const sortedArray = quickSort(unsortedArray);
console.log(sortedArray); // [9, 6, 5, 5, 4, 3, 2, 1, 1]


// 2. Написать проверку числа "простое" ли оно, используя итерационный подход. (не рекурсия) 
function isPrime(number) {
    if (number <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}


const num = 17;
if (isPrime(num)) {
    console.log(num + " - простое число");
} else {
    console.log(num + " - не простое число");
}
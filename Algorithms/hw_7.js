/*  
Постройте частотный словарь букв русского (или английского) алфавита.

*/

function getSymbols(string) {
    let strSplited = string.split('');
    console.log(strSplited);

    let resCount = {};

    for (let i = 0; i < strSplited.length; i++) {
        let symbol = strSplited[i];
        if (resCount[symbol]) {
            resCount[symbol]++;
        } else {
            resCount[symbol] = 1;
        }
    }
    return resCount;
}

console.log(getSymbols("мумумууу")); // { 'м': 3, 'у': 5 }


//функция принимает строку, разбивает строку на символы, затем  сравнивает каждый символ с  последующим, если совпадения не встречаются, этому символу присваивается количество 1, если совпадения встречаются - количество увеличивается
function countSymbols(string) {
    let characters = string.split('');
    let counts = {};

    for (let i = 0; i < characters.length; i++) {
        let currentChar = characters[i];
        
        let count = 1;

        for (let j = i + 1; j < characters.length; j++) {
            if (currentChar === characters[j]) {
                count++; // +1
            }
        }

        if (!counts[currentChar]) {
            counts[currentChar] = count; // 1
        }
    }
    return counts;
}

let result = countSymbols("мумуму");
console.log(result);
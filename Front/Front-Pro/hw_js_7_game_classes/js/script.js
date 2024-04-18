// alert("hello");

console.log('герой-1: press a - to attack, x - to heal');
console.log('герой-2: press k - to attack, m - to heal');
console.log("let's start");

//// игра
// Основанный на истории о походе героев в поисках сокровища.
// Давайте представим, что у нас есть классы Hero (герой) и Treasure (сокровище), и мы хотим создать
// экземпляры этих классов и взаимодействовать с ними.

// В этом уроке мы создаем двух героев (hero1 и hero2) и сокровище (treasure). Герои могут атаковать
// друг друга и исцелять себя, а также находить и собирать сокровище. Вся эта функциональность реализована
// с помощью методов классов Hero и Treasure

class Hero {
    constructor(name, health) {
        this.name = name;
        this.health = health;
    }

    attack(target) {
        console.log(`${this.name} атакует ${target.name}!`);
        
        target.health -= 10;
        
        console.log(`${target.name} получает урон. Здоровье: ${target.health}%`);

        if (target.health <= 0) {
            console.log(`${target.name} умер `);
            // console.log(`${this.name} получает сокровища`);
           
            treasure.collect(this);
            gameOver();
        }
    }

    heal() {
        console.log(`${this.name} исцеляет себя!`);
        
        this.health += 5;
        
        console.log(`${this.name} исцелен. Здоровье: ${this.health}%`);

        if(gameOver()) {
            this.health = 0
        }
    }
}

class Treasure {
    constructor(value){
        this.value = value;
    }

    collect(hero){
        console.log(`${hero.name} получает сокровище стоимостью ${this.value}$`);
    }
}


function handleKeyPressed(event) {
    
    if(event.key === "a" || event.key === "A") {
        // console.log(`Keydown on ${event.key}`);
        hero1.attack(hero2);
    } else if(event.key === "k" || event.key === "K"){
        // console.log(`Keydown on ${event.key}`);
        hero2.attack(hero1);
    }

    if(event.key === "x" || event.key === "X") {  
        // console.log(`Keydown on ${event.key}`);
        hero1.heal()
    } else if (event.key === "m" || event.key === "M"){
        // console.log(`Keydown on ${event.key}`);
        hero2.heal();
    }
}


function gameOver() {
    console.log("Game Over");

    if (treasure.collect) {
        document.removeEventListener('keydown', handleKeyPressed)
    }   
}

document.addEventListener("keydown", handleKeyPressed);

const hero1 = new Hero("Герой-1", 100);
const hero2 = new Hero("Герой-2", 80);
const treasure = new Treasure(500);


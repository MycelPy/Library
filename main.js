// const name = "James";

// const person = { first: name };

// console.log(person);

// const sayHelloLinting = (fName) => {
//     console.log(`Hello linting, ${fName}`);
// };

// sayHelloLinting("Matus");

// const myObject = {
//     property: "Value!",
//     otherProperty: 77,
//     obnoxious: () => {
//         console.log("myObject.propery")
//     }
// }

// class Object1 {
//     constructor(namet, energy) {
//         this.name = namet
//         this.energy = energy
//     }

//     eat(amount) {
//         console.log(`${this.name} have ${amount}.`)
//         this.energy += amount
//     }
// }

// const leo = new Object1("Leo", "5")

// leo.eat(500)


// myObject.obnoxious();

// function Player(namer, marker) {
//     this.name = namer
//     this.marker = marker
//     this.sayName = () => {
//         console.log(namer)
//     }
// }

// const player1 = new Player("Steve", "X")
// const player2 = new Player("Juan", "O")
// player1.sayName()
// player2.sayName()

// function Book(title, author, numOfPages, read) {
//     this.title = title
//     this.author = author
//     this.numOfPages = numOfPages
//     this.read = read
//     this.info = () => `${title} by ${author}, ${numOfPages} pages, ${read} yet.`
// }

// function Car() {

// }

// Car.prototype.sayBrand = () => {
//     console.log(this.name)
// }

// Book.prototype = Object.create(Car.prototype)

// Book.prototype.print = () => "GOTCHA BITCH!"


// const gulag = new Book("Gulag", "Alexander Solzeniczin", 450, "read")
// const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, "not read")
// console.log(gulag.info())
// console.log(theHobbit.info())
// console.log(gulag.print())
// gulag.sayBrand()

// // INHERITANCE

// // const animal = {
// //     eats: true
// // }

// // const rabbit = {
// //     jumps: true,
// //     __proto__: animal
// // }

// // for (const prop in rabbit) {
// //     const isOwn = rabbit.hasOwnProperty(prop)

// //     if (isOwn) {
// //         alert(`Our: ${prop}`)
// //     } else {
// //         alert(`Inherited: ${prop}`)
// //     }
// // }
// console.log(Car.prototype)

// function Animal(name, age) {
//     this.name = name
//     this.age = age
// }
class Animal {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    eat = function() {
        console.log(`${this.name} is eating!`)
    }

    play = function() {
        console.log(`${this.name} is playing!`)
    }

    sleep = function() {
        console.log(`${this.name} is sleeping!`)
    }
}

class Dog extends Animal {
    constructor(name, age, breed) {
        super(name, age)
        this.breed = breed
    }

    bark() {
        console.log(`${this.name} is ${this.breed} and he is barking at you!`)
    }
}


// function Animal(name, age) {
//     this.name = name
//     this.age = age
// }

// Animal.prototype.eat = function() {
//     console.log(`${this.name} is eating!`)
// }

// Animal.prototype.play = function() {
//     console.log(`${this.name} is playing!`)
// }

// Animal.prototype.sleep = function() {
//     console.log(`${this.name} is sleeping!`)
// }

// function Dog(name, age, breed) {
//     Animal.call(this, name, age)
//     this.breed = breed
// }

// Dog.prototype = Object.create(Animal.prototype)

const coco = new Dog("Coco", 50, "Cockerspanish")

console.log(coco.name)
console.log(coco.age)
console.log(coco.breed)
coco.bark()
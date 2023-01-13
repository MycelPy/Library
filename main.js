// class Animal {
//     constructor(name, age) {
//         this.name = name
//         this.age = age
//     }

//     eat = function() {
//         console.log(`${this.name} is eating!`)
//     }

//     play = function() {
//         console.log(`${this.name} is playing!`)
//     }

//     sleep = function() {
//         console.log(`${this.name} is sleeping!`)
//     }
// }

// class Dog extends Animal {
//     constructor(name, age, breed) {
//         super(name, age)
//         this.breed = breed
//     }

//     bark() {
//         console.log(`${this.name} is ${this.breed} and he is barking at you!`)
//     }
// }

// const coco = new Dog("Coco", 50, "Cockerspanish")

// console.log(coco.name)
// console.log(coco.age)
// console.log(coco.breed)
// coco.bark()

let myLibrary = ["Gulag, ", "The Great Gatsby, ", "Harry Potter, ", "Lord of the Rings, ", "Wim Hof, "]
let content = document.querySelector('.content')
const btn = document.querySelector('.btn')
const btnD = document.querySelector('.btnD')
    // class Book {
    //     constructor() {

//     }
// }

function loopLibrary() {
    content.textContent = ""
    myLibrary.forEach(book => {
        content.textContent += book
    })
}

window.onload = loopLibrary()

function addBook() {
    let book = prompt("Please add book to library!")

    if (book === null || book === undefined) {
        return
    } else if (myLibrary.includes(book + ", ")) {
        alert(`Book: ${book} is already in library!`)
    } else {
        myLibrary.push(book + ", ")
    }

    loopLibrary()
}

function deleteBook() {
    let deleted = prompt("What book do you want to delete ?")

    if (deleted === null || deleted === undefined) {
        return
    } else if (!myLibrary.includes(deleted + ", ")) {
        alert(`Book: ${deleted} is NOT in library!`)
    } else {
        let a = myLibrary.indexOf(deleted + ", ")
        myLibrary.splice(a, 1)
    }

    loopLibrary()
}

btn.addEventListener("click", () => {
    addBook()
})

btnD.addEventListener("click", () => {
    deleteBook()
})
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
// class Book {
//     constructor(book, author, numofpgs, read) {
//         this.book = book
//         this.author = author
//         this.numofpgs = numofpgs
//         this.read = read
//     }
// }

// const gulag = new Book('Gulag', 'Alexander Solzeniczin', '1500', 'read')
// const gatsby = new Book('The Great Gatsby', 'Francis Scott Key Fitzgerald', '450', 'not read')
// const lotr = new Book('Lord of the Rings', 'Tolkien', '1230', 'read')
// const potter = new Book('Harry Potter', 'Rowling', '400', 'note read')

// let myLibrary = [gulag1, gatsby1, lotr1, potter1]
// let content = document.querySelector('.content')
// const btn = document.querySelector('.btn')
// const btnD = document.querySelector('.btnD')
// const library = document.querySelector('.library')

// console.log(myLibrary)

// function loopLibrary() {
//     content.textContent = ""
//     myLibrary.forEach(book => {
//         content.textContent += book
//     })
// }

// window.onload = loopLibrary()

// function addBook() {
//     let book = prompt("Please add book to library!")

//     if (book === null || book === undefined) {
//         return
//     } else if (myLibrary.includes(book + ", ")) {
//         alert(`Book: ${book} is already in library!`)
//     } else {
//         myLibrary.push(book + ", ")
//     }

//     loopLibrary()
// }

// function deleteBook() {
//     let deleted = prompt("What book do you want to delete ?")

//     if (deleted === null || deleted === undefined) {
//         return
//     } else if (!myLibrary.includes(deleted + ", ")) {
//         alert(`Book: ${deleted} is NOT in library!`)
//     } else {
//         let a = myLibrary.indexOf(deleted + ", ")
//         myLibrary.splice(a, 1)
//     }

//     loopLibrary()
// }

// btn.addEventListener("click", () => {
//     addBook()
// })

// btnD.addEventListener("click", () => {
//     deleteBook()
// })

let myLibrary = []
const btn = document.querySelector('.btn')
const former = document.querySelector('.former')
const library = document.querySelector('.library')
const submit = document.querySelector('.submit')
const overlay = document.querySelector('.overlay')
const formerDiv = document.querySelector('.formerDiv')

let isValid = former.checkValidity()
former.style.display = 'none'
class Book {
    constructor(name, author, numofpgs, read) {
        this.name = name
        this.author = author
        this.numofpgs = numofpgs
        this.read = read
    }
}

btn.addEventListener('click', () => {

    formerDiv.classList.add('indexer')

    if (overlay.classList.contains('active')) {
        overlay.classList.remove('active')
    } else {
        overlay.classList.add('active')
    }

    if (former.style.display === 'none') {
        former.style.display = 'block'
    } else {
        former.style.display = 'none'
    }

    submit.onclick = (event) => {

        if (former.checkValidity()) {
            let bookf = document.querySelector('.book')
            let authorf = document.querySelector('.author')
            let numofpgsf = document.querySelector('.numofpgs')
            let readf = document.querySelector('.read')

            former.checkValidity()
            former.reportValidity()

            myLibrary.push(bookf.value)

            event.preventDefault()

            const tab = document.createElement('div')
            const book = document.createElement('p')
            const author = document.createElement('p')
            const numofpgs = document.createElement('p')
            const conBtn = document.createElement('div')
            const delBtn = document.createElement('button')
            const readBtn = document.createElement('button')

            tab.classList.add('card')
            conBtn.classList.add('cardBtn')
            library.appendChild(tab)
            tab.append(book, author, numofpgs, conBtn)
            conBtn.append(delBtn, readBtn)

            book.textContent = `Book: ${bookf.value}`
            author.textContent = `Author: ${authorf.value}`
            numofpgs.textContent = `Num of pages: ${numofpgsf.value} pages`
            delBtn.textContent = 'DELETE BOOK'
            delBtn.classList.add('red', 'btn')

            if (readf.checked) {
                readBtn.classList.add('btn', 'green')
                readBtn.textContent = 'READ'
            } else {
                readBtn.classList.add('btn', 'red')
                readBtn.textContent = 'NOT READ'
            }

            readBtn.addEventListener('click', () => {
                if (readBtn.classList.contains('green')) {
                    readBtn.classList.remove('green')
                    readBtn.classList.add('red')
                    readBtn.textContent = 'NOT READ'
                } else {
                    readBtn.classList.remove('red')
                    readBtn.classList.add('green')
                    readBtn.textContent = 'READ'
                }
            })

            former.reset()
            former.style.display = 'none'
            overlay.classList.remove('active')
            formerDiv.classList.remove('indexer')

            delBtn.addEventListener('click', () => {
                tab.remove()
            })

        } else {
            former.reportValidity()
        }
    }
})
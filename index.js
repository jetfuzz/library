const myLibrary = [];
const form = document.getElementById('form')
const formBtn = document.getElementById('formSubmit')

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', '320', 'Not read')
const CrimeAndPunishment = new Book('Crime and Punishment', 'Fyodor Dostoevsky', '720', 'Read')
myLibrary.push(theHobbit, CrimeAndPunishment);
displayBook(myLibrary)

//add function that can take users input and store the new book objects into myLibrary

function addBookToLibrary() {
  formBtn.addEventListener('click', function(event) {
    event.preventDefault();

    const bookTitle = document.getElementById('title').value;
    const bookAuthor = document.getElementById('author').value;
    const bookPages = document.getElementById('pages').value;
    const bookRead = document.getElementById('read').checked ? 'Read' : 'Not read';

    const newBook = new Book(bookTitle, bookAuthor, bookPages, bookRead);
    myLibrary.push(newBook);
    displayBook(myLibrary);
    form.reset();
  })
}

//display each book on the page

function displayBook(items) {
  let table = document.getElementById('tableBody');
  table.innerHTML = ""
  items.forEach(item => {
    let row = table.insertRow();
    let title = row.insertCell(0);
    title.innerHTML = item.title;
    let author = row.insertCell(1);
    author.innerHTML = item.author;
    let pages = row.insertCell(2);
    pages.innerHTML = item.pages;
    let read = row.insertCell(3);
    read.innerHTML = item.read;
  })
}

addBookToLibrary();
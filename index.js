const myLibrary = [];
const form = document.getElementById('form')
const formBtn = document.getElementById('formSubmit')

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function() {
    return [this.title, this.author, this.pages, this.read]
  }
}

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', '320')
myLibrary.push(theHobbit);

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
    form.reset();
  })
}

addBookToLibrary();
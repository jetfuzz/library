const myLibrary = [];

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
  
}

addBookToLibrary();

//write function that loops through the array, and displays each book in a table or card

//add "new book" button that brings up a form allowing users to input details for new book object.
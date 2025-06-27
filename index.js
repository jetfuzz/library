const myLibrary = [];
const form = document.getElementById('form');
const formBtn = document.getElementById('form-submit');

const formTitle = document.getElementById('title');
const titleError = document.querySelector("#title + span.error");
const formAuthor = document.getElementById('author');
const authorError = document.querySelector("#author + span.error");
const formPages = document.getElementById("pages");
const pageError = document.querySelector("#pages + span.error");

class Book {
  constructor(title, author, pages, read) {
    this.bookId = `book${++Book.id}`;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

//static property
Book.id = 0;

//placeholder books for populating table
const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', '320', 'Not read');
const crimeAndPunishment = new Book('Crime and Punishment', 'Fyodor Dostoevsky', '720', 'Read');
const theSecretHistory = new Book('The Secret History', 'Donna Tartt', '576', 'Read');
myLibrary.push(theHobbit, crimeAndPunishment, theSecretHistory);
displayBook(myLibrary);

//take users input and stores new book objects in myLibrary
function addBookToLibrary() {
  formBtn.addEventListener('click', function(event) {
    event.preventDefault();
    if (!form.checkValidity()) {
      checkFormErrors();
    } else {
      checkFormErrors();
      const bookTitle = document.getElementById('title').value;
      const bookAuthor = document.getElementById('author').value;
      const bookPages = document.getElementById('pages').value;
      const bookRead = document.getElementById('read').checked ? 'Read' : 'Not read';

      const newBook = new Book(bookTitle, bookAuthor, bookPages, bookRead);
      myLibrary.push(newBook);
      displayBook(myLibrary);
      form.reset();
    }
  })
}

//display each book on the page
function displayBook(items) {
  let tableBody = document.getElementById('table-body');
  tableBody.innerHTML = "";

  items.forEach(item => {
    let row = tableBody.insertRow();
    row.dataset.bookId = item.bookId;

    let title = row.insertCell(0);
    title.innerHTML = item.title;

    let author = row.insertCell(1);
    author.innerHTML = item.author;

    let pages = row.insertCell(2);
    pages.innerHTML = item.pages;

    let read = row.insertCell(3);
    read.innerHTML = `<button>${item.read}</button>`;
    read.onclick = readBook;

    let btn = row.insertCell(4);
    btn.innerHTML = "<button>Delete</button>";
    btn.onclick = deleteBook;
  })
}

//add a button on each books display to remove the book from the library
function deleteBook() {
  const bookId = this.parentElement.dataset.bookId;

  const findBook = myLibrary.findIndex(
    (element) => element.bookId === bookId
  );

  const delBook = myLibrary.splice(findBook, 1);
  this.parentElement.remove();
}

//add a button to each books display to change its read status
function readBook() {
  const bookId = this.parentElement.dataset.bookId;

  const book = myLibrary.find((item) => item.bookId === bookId)

  if (book.read === 'Not read') {
    book.read = 'Read';
    this.innerHTML = `<button>${book.read}</button>`;
  } else {
    book.read = 'Not read';
    this.innerHTML = `<button>${book.read}</button>`;
  }
}

function checkFormErrors() {
    if (formTitle.validity.valueMissing) {
      titleError.textContent = "Please enter a book title";
    } else if (formTitle.validity.valid) {
      titleError.textContent = ""
      titleError.className = "error";
    }
    if (formAuthor.validity.valueMissing) {
      authorError.textContent = "Please enter an author name";
    } else if (formAuthor.validity.valid) {
      authorError.textContent = ""
      authorError.className = "error";
    }
    if (formPages.validity.valueMissing) {
      pageError.textContent = "Please enter the number of pages";
    } else if (formPages.validity.rangeUnderflow) {
      pageError.textContent = "Page count must be at least 1";
    } else if (formPages.validity.rangeOverflow) {
      pageError.textContent = "Page count cannot exceed 10,000";
    } else if (formPages.validity.valid) {
      pageError.textContent = ""
      pageError.className = "error";
    } else {
      pageError.textContent = "Please enter a valid number";
    }
}

addBookToLibrary();
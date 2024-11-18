const myLibrary = [];
const form = document.getElementById('form')
const formBtn = document.getElementById('formSubmit')

//object constructor
function Book(title, author, pages, read) {
  this.bookId = `book${++Book.id}`;
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

//static property
Book.id = 0;

//placeholder books for populating table
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
  let tableBody = document.getElementById('tableBody');
  tableBody.innerHTML = "";

  items.forEach(item => {
    let row = tableBody.insertRow();
    row.classList.add(`${item.bookId}`);

    let title = row.insertCell(0);
    title.innerHTML = item.title;

    let author = row.insertCell(1);
    author.innerHTML = item.author;

    let pages = row.insertCell(2);
    pages.innerHTML = item.pages;

    let read = row.insertCell(3);
    read.innerHTML = item.read;

    let btn = row.insertCell(4);
    btn.innerHTML = "<button class='deleteBtn'>Delete</button>";
    btn.onclick = DeleteBook;
  })
}

//add a button on each books display to remove the book from the library
function DeleteBook() {
  const bookId = this.parentElement.classList[1];

  const findBook = myLibrary.findIndex(
    (element) => element.bookId === bookId
  );
  const delBook = myLibrary.splice(findBook, 1);
  this.parentElement.remove();
}

addBookToLibrary();
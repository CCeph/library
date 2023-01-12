//An empty array to store all the books in.
let myLibrary = []

function main() {
    addBookButton();
}

//Constructor for book objects.
function Book(author, title, pagesNum, read) {
    this.author = author;
    this.title = title;
    this.pagesNum = pagesNum;
    this.read = read;
}

//Function that uses user input to create a book object
//and then add it to the myLibrary array.
function addBookToLibrary(author, title, pagesNum, read) {
    let newBook = new Book(author, title, pagesNum, read);
    myLibrary.push(newBook);
}

//Function adds interactivity to "addBook" button.
function addBookButton() {
    button = document.querySelector(".addBook");
    button.addEventListener("click", createForm);
}

//This function activates when a button is pressed to add
//a book. It will create a form for the user to input
//details of their book.
function createForm() {
    console.log("Works");
}

main();
//An empty array to store all the books in.
let myLibrary = []

function main() {
    enableCloseBtn();
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
    button.addEventListener("click", showForm);
}

//This function activates when a button is pressed to add
//a book. It will create a form for the user to input
//details of their book.
function showForm() {
    popup = document.querySelector(".bookPopup");
    popup.classList.add("active");
}

//This function hides the popup form when the cross in the
//top right hand corner of the form is clicked.
function enableCloseBtn() {
    closeBtn = document.querySelector(".close-btn");
    closeBtn.addEventListener("click", function() {
        popup = document.querySelector(".bookPopup");
        popup.classList.remove("active")
    })
}

main();
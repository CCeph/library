//An empty array to store all the books in.
let myLibrary = []

function main() {
    submitForm();
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
function addBookToLibrary(formAnswers) {
    let newBook = new Book(formAnswers[0], formAnswers[1], formAnswers[2], formAnswers[3]);
    myLibrary.push(newBook);
}

//Function adds interactivity to "addBook" button.
function addBookButton() {
    button = document.querySelector(".addBook");
    button.addEventListener("click", showForm);
}

//This function activates when a button is pressed to add
//a book. It will show a form for the user to input
//details of their book.
function showForm() {
    popup = document.querySelector(".bookPopup");
    popup.classList.add("active");
}

//This function hides the popup form when the cross in the
//top right hand corner of the form is clicked.
function enableCloseBtn() {
    closeBtn = document.querySelector(".close-btn");
    closeBtn.addEventListener("click", hideForm)
}

//This function hides the form for adding new books when
//necessary.
function hideForm() {
    popup = document.querySelector(".bookPopup");
        popup.classList.remove("active")
}

//This function handles the form submission of a new book.
//The data is passed to and stored in the array of books.
function submitForm() {
    const form = document.querySelector("form");

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(form);
        //Creates an empty array to store the form answers in.
        let formAnswers = []

        //Iterates over the formData object to extract the form answers
        //and store them in the formAnswers array.
        for (item of formData) {
            formAnswers.push(item[1])
        }
        
        addBookToLibrary(formAnswers);
    })
}

main();
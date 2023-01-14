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
    secondButton = document.querySelector(".secondBookBtn")
    button.addEventListener("click", showForm);
    secondButton.addEventListener("click", showForm);
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

function hideAddButton() {
    button = document.querySelector(".main-panel .addBook")
    button.classList.remove("active")
}

function showAddButton() {
    button = document.querySelector(".main-panel .addBook")
    button.classList.add("active")
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
        
        if (myLibrary.length === 0) {
            hideAddButton();
        }
        addBookToLibrary(formAnswers);
        displayBooks();
    })
}

//This function iterates over the myLibrary array and displays all
//book objects on the webpage.
function displayBooks() {
    container = document.querySelector(".bookContainer");
    //Erases the container before redisplaying all the books.
    container.innerHTML = "";
    let counter = 0

    for (book of myLibrary) {
        counter += 1
        let newCard = document.createElement('div');
        container.appendChild(newCard);
        newCard.classList.add("book")
        newCard.innerHTML = `<h2 class="title${counter}"></h2>
        <p class="cardAuthor${counter}"></p>
        <p class="cardPage${counter}"></p>
        <p class="readStatus readStatus${counter}"></p>
        <button class="delete">Remove Book</button>`
        document.querySelector(`.book .title${counter}`).textContent = `${book.title}`
        document.querySelector(`.book .cardAuthor${counter}`).textContent = `Written by ${book.author}.`
        document.querySelector(`.book .cardPage${counter}`).textContent = `${book.pagesNum} pages.`
        if (book.read === 'true') {
            document.querySelector(`.book .readStatus${counter}`).textContent = `Read`;
        } else if (book.read === 'false') {
            document.querySelector(`.book .readStatus${counter}`).textContent = `Not read`;
        }
    }
}

main();
//An empty array to store all the books in.
let myLibrary = []

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
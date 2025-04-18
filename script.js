const myLibrary = [];

// Create the object schema
function Book(title, author, pages) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.uniqueId = crypto.randomUUID()
};

// Create the book and pushing it to the list DataSet
function addBookToLibrary(title, author, pages) {
    const book = new Book(title, author, pages);
    myLibrary.push(book);
    displayBooks(book);
};

function displayBooks(book) {
    
    // Adding a div to consult the id with dataset
    const divId = document.createElement("div");
    divId.classList.add("divDelete");


    const newTr = document.createElement("tr");
    const tbody = document.querySelector("tbody");
    tbody.appendChild(newTr);
    tbody.appendChild(divId);

    const tdRead = document.createElement("td");
    newTr.appendChild(tdRead);
    const tdReadBtn = document.createElement("button");
    tdReadBtn.textContent = "☑️"
    tdReadBtn.classList.add("readingStatus")
    tdRead.appendChild(tdReadBtn);

    const tdTitle = document.createElement("td")
    tdTitle.textContent = book.title;
    newTr.appendChild(tdTitle);

    const tdAuthor = document.createElement("td");
    tdAuthor.textContent = book.author;
    newTr.appendChild(tdAuthor);

    const tdPages = document.createElement("td");
    tdPages.textContent = book.pages;
    newTr.appendChild(tdPages);

    const tdDelete = document.createElement("td");
    const btnDelete = document.createElement("button");
    btnDelete.textContent = "🗑️"
    btnDelete.classList.add("btnDeleted");
    newTr.appendChild(tdDelete);
    tdDelete.appendChild(btnDelete);

    for (let i = 0; i < myLibrary.length; i++){
        document.querySelectorAll(".btnDeleted")[i].addEventListener("click", function () {
            this.parentNode.parentNode.remove();
        });
    };

    for (let i = 0; i < myLibrary.length ; i++){
        document.querySelectorAll(".readingStatus")[i].addEventListener("click", function () {
            if ( this.textContent === "☑️" ) {
                this.textContent = "✅";
            } else if ( this.textContent === "✅" ){
                this.textContent = "☑️";
            };
            
        });
    };
};
const btnOpenDialog = document.querySelector("#btnOpenDialog").addEventListener("click", function() {
    document.querySelector("#opener").showModal();
});

const btnCloseDialog = document.querySelector("#btnCloseDialog").addEventListener("click", function () {
    const title = document.querySelector("#bookTitle").value
    const author = document.querySelector("#bookAuthor").value
    const pages = document.querySelector("#bookPages").value

    addBookToLibrary(title, author, pages);

    document.querySelector("#opener").close();
});

// addBookToLibrary("Harry Potter and the Philisopher's Stone", "J. K. Rowling", 320);
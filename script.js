// The O-Library

const addButt = document.querySelector(".add-book");
const bookHold = document.querySelector(".book-hold");


// the Card
function createCard (title, author, read) {
    const card = document.createElement("div");
    card.classList.add("book-card");

    const card_title = document.createElement("p");
    const card_author = document.createElement("p");
    const card_read = document.createElement("p");

    const card_remove = document.createElement("button");
    card_remove.textContent = "Remove";
    card_remove.classList.add("card-button-remove");
    const card_read_button = document.createElement("button");
    card_read_button.textContent = "change read status";
    card_read_button.classList.add("card-button")

    card_author.textContent = "Author : ";
    card_read.textContent = "Read yet ? : ";

    card_title.textContent += title;
    card_author.textContent += author;
    card_read.textContent += read;
;
    card.appendChild(card_title);
    card.appendChild(card_author);
    card.appendChild(card_read);
    card.appendChild(card_read_button);
    card.appendChild(card_remove);

    return card;
}

addButt.addEventListener("click", () => {
    const newCard = createCard("Elden ring", "G.R.R martin", "not yet")
    bookHold.appendChild(newCard);
})

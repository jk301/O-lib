// The O-Library

const addButt = document.querySelector(".add-book");
const bookHold = document.querySelector(".book-hold");

// the Card
function createCard (title, author, pages, id, read) {
    const card = document.createElement("div");
    card.classList.add("book-card");

    const card_title = document.createElement("p");
    const card_author = document.createElement("p");
    const card_pages = document.createElement("p");
    const card_read = document.createElement("p");
    const card_id = document.createElement("p");
    
    const card_remove = document.createElement("button");
    card_remove.textContent = "Remove";
    card_remove.classList.add("card-button-remove");
    const card_read_button = document.createElement("button");
    card_read_button.textContent = "change read status";
    card_read_button.classList.add("card-button")

    card_title.textContent += title;
    card_author.textContent = `Author : ${author}`;
    card_pages.textContent = `Pages : ${pages}`
    card_read.textContent = `Read yet ? : ${read}`;
    card_id.textContent = `ID : ${id}`;

    card.appendChild(card_title);
    card.appendChild(card_author);
    card.appendChild(card_pages);
    card.appendChild(card_read);
    card.appendChild(card_id);
    card.appendChild(card_read_button);
    card.appendChild(card_remove);

    return card;
}


const myLibrary = [];

// the constructor
// function makeBook (title, author, pages, id, read) {
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     this.id = id;
//     this.read = read;
// }

// const lib = [];
// myLibrary.push({...new makeBook("oro", "boro", 100, 213, "yeah")})


// The Add book form
function layout_form() {
    const form = document.createElement("form");

    const form_title_label = document.createElement("label");
    form_title_label.textContent = " Title ";
    const form_title_input = document.createElement("input");
    form_title_input.type = "text";
    form_title_input.placeholder = " Enter title ";

    const form_author_label = document.createElement("label");
    form_author_label.textContent = " Author ";
    const form_author_input = document.createElement("input");
    form_author_input.type = "text";
    form_author_input.placeholder = " Enter author ";

    const form_pages_label = document.createElement("label");
    form_pages_label.textContent = " Pages ";
    const form_pages_input = document.createElement("input");
    form_pages_input.type = "number";
    form_pages_input.placeholder = " Enter pages ";

    const form_read_status = document.createElement("p");
    form_read_status.textContent = " Read status ";

    const read_label_unread = document.createElement("label");
    read_label_unread.textContent = "Unread";
    const read_input_unread = document.createElement("input");
    read_input_unread.type = "radio";
    read_input_unread.name = "read_status";
    read_input_unread.value = "unread";

    const read_label_reading = document.createElement("label");
    read_label_reading.textContent = "Reading";
    const read_input_reading = document.createElement("input");
    read_input_reading.type = "radio";
    read_input_reading.name = "read_status";
    read_input_reading.value = "reading";

    const read_label_read = document.createElement("label");
    read_label_read.textContent = "Read";
    const read_input_read = document.createElement("input");
    read_input_read.type = "radio";
    read_input_read.name = "read_status";
    read_input_read.value = "read";

    const radio_div = document.createElement("div");
    radio_div.classList.add("radio-div");
    radio_div.appendChild(read_label_unread);
    radio_div.appendChild(read_input_unread);
    radio_div.appendChild(read_label_reading);
    radio_div.appendChild(read_input_reading);
    radio_div.appendChild(read_label_read);
    radio_div.appendChild(read_input_read);


    const form_button_div = document.createElement("div");
    form_button_div.classList.add("form-button-div");
    const form_accept = document.createElement("button");
    form_accept.textContent = "Accept";
    form_accept.type = "submit";
    const form_cancel = document.createElement("button");
    form_cancel.textContent = "Cancel";
    form_cancel.type = "button";
    form_button_div.appendChild(form_accept);
    form_button_div.appendChild(form_cancel);

    // append everything to form
    form.appendChild(form_title_label);
    form.appendChild(form_title_input);
    form.appendChild(form_author_label);
    form.appendChild(form_author_input);
    form.appendChild(form_pages_label);
    form.appendChild(form_pages_input);
    form.appendChild(form_read_status);
    form.appendChild(radio_div);
    form.appendChild(form_button_div);

    return form;
}



// function createCard (title, author, pages, id, read)
addButt.addEventListener("click", () => {
    // const newCard = createCard("Elden ring", "G.R.R martin", 290, 3421, "No");
    bookHold.appendChild(layout_form());    
})

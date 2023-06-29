const box = document.querySelector(".container");
const addBtn = document.querySelector(".add-btn");
const mdBox = document.querySelector(".modal-container");
const mdClose = mdBox.querySelector(".modal-close");
const addForm = document.forms.add;



let user = localStorage.getItem("cat12"); 
if (!user) {
    user = prompt("Ваше уникальное имя: ", "mrs_jaky");
    localStorage.setItem("cat12", user);
}

const path = `https://cats.petiteweb.dev/api/single/${user}`;

let cats = localStorage.getItem("cats-data") 

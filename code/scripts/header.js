const button = document.querySelector("header > button");
const menu   = document.querySelector("header .menu");
const buttonClose  = document.querySelector("header .menu div > img");

button.addEventListener("click", ()=>{
    menu.classList.add("active");
});

buttonClose.addEventListener("click", ()=>{
    menu.classList.remove("active");
});
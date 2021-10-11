const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav__menu");
const mainMenu = document.querySelector(".main");
const navLinks = document.querySelectorAll(".nav__link");
// const formButton = document.querySelector(".form__button");
const form = document.getElementById("form").reset();

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    hamburger.classList.toggle("active");
});

//remove navmenu and button close after a button is clicked
navLinks.forEach(link => link.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}


// form
// const userName = document.getElementById("name");
// const email = document.getElementById("email");
// const message = document.getElementById("message");
// const formButton = document.querySelector(".form__button");

// formButton.addEventListener("", () => {
//     userName.value = "";
//     message.value = "";
//     email.value = "";
// })
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav__menu");
const mainMenu = document.querySelector(".main");

hamburger.addEventListener("click", (event) => {
    navMenu.classList.toggle("active");
    hamburger.classList.toggle("active");
    // mainMenu.classList.toggle('lock-scroll');
})
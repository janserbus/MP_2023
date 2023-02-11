const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const dropdown = document.querySelector(".menu__list--dropdown");

hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active");
    menu.classList.toggle("active");    
});

dropdown.addEventListener("click", () =>{
    dropdown.classList.toggle("open");
});
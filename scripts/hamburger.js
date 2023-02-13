var hamburger = document.querySelector(".hamburger");
var menu = document.querySelector(".menu");
var dropdown = document.querySelector(".menu__list--dropdown");

hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active");
    menu.classList.toggle("active");    
});

dropdown.addEventListener("click", () =>{
    dropdown.classList.toggle("open");
});
var hamburger = document.querySelector(".hamburger");
var menu = document.querySelector(".menu");
var dropdown = document.querySelector(".menu__list--dropdown");
var dropdownContent = document.querySelector(".submenu");

hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active");
    menu.classList.toggle("active");    
});

dropdown.addEventListener("click", () =>{
    console.log("dropdown clicked")
    dropdownContent.classList.toggle("open");
});
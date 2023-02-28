var hamburger = document.querySelector(".hamburger");
var menu = document.querySelector(".navmenu");
var dropdown = document.querySelector(".navmenu__list--dropdown");
var dropdownLink = document.querySelector(".navmenu__link--dropdown")
var dropdownContent = document.querySelector(".submenu");

hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active");
    menu.classList.toggle("active");    
});

// dropdown.addEventListener("click", () =>{
//     console.log("dropdown clicked");
//     dropdownLink.classList.toggle("open");
//     dropdownContent.classList.toggle("open");
// });

// dropdown.addEventListener("mouseover", () =>{
//     console.log("dropdown hovered");
//     dropdownLink.classList.toggle("open");
//     dropdownContent.classList.toggle("open");
// });
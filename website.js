let burger = document.querySelector(".burger");
let navbar = document.querySelector(".navigation");
let navComponents = document.querySelector(".nav-components");
let searchbar = document.querySelector(".searchbar");

burger.addEventListener('click', ()=>{
    searchbar.classList.toggle("visibility");
    navComponents.classList.toggle("visibility");
    navbar.classList.toggle("nav");
});
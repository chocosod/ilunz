
let el = document.querySelector(".menu_icon");
let el2 = document.querySelector(".side_menu");
let el3 = document.querySelector(".sticky_background_area");

function onClick(){
    el.classList.toggle("active");
    el2.classList.toggle("show");
    el3.classList.toggle("active");
}

el.addEventListener("click", onClick);
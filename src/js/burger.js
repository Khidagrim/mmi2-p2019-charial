let burger = document.getElementsByClassName("header__burger")[0];
let menu = document.getElementsByClassName("header__menu")[0];

burger.addEventListener("click",function(){

    burger.classList.toggle("header__burger--open");
    menu.classList.toggle("header__menu--open");

});
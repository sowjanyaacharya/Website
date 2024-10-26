burger = document.querySelector('.burger');
navbar = document.querySelector('.navbar');
nav_left = document.querySelector('.nav-left');
nav_right = document.querySelector('.nav-right');

burger.addEventListener('click', ()=>{
    navbar.classList.toggle('h-nav-res');
    nav_left.classList.toggle('v-class-res');
    nav_right.classList.toggle('v-class-res');
})
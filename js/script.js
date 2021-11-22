const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.header__main-btn');
const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.close');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
});

overlay.addEventListener('click', ()=> {
    menu.classList.toggle('active');
});

closeBtn.addEventListener('click', ()=> {
    menu.classList.toggle('active');
});
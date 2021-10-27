const menu = document.querySelector(".nav-menu");
const contact = document.querySelector(".nav-contact");
const tog = document.querySelector(".nav-tog");

tog.addEventListener('click', ()=>{
    menu.classList.toggle('active');
    contact.classList.toggle('active');
});
const toggleBtn = document.querySelector('.nav-tog');
const menu = document.querySelector('.nav-menu');
const contact = document.querySelector('.nav-contact');

toggleBtn.addEventListener('click', ()=>{
    menu.classList.toggle('active');
    contact.classList.toggle('active');
});
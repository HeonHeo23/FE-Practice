const title = document.querySelector("#title-but");
const text = document.querySelector(".info-data-title-text")
title.addEventListener('click', ()=>{
    const a = title.querySelector(".active");
    const b = title.querySelector(".inactive");
    a.classList.replace('active','inactive');
    b.classList.replace('inactive', 'active');
    text.classList.toggle('open');
});
const tog = document.querySelector('.title-btn');
const title = document.querySelector('.title-text');
const button = document.querySelectorAll('.buttons li button');

tog.addEventListener('click', ()=>{
    title.classList.toggle('clamp');
    tog.classList.toggle('clicked');
});

function buttonClick(target){
    const a = target.querySelector(i);
    a.classList.toggle('active');
}

/* 뻘짓
var a;
for (a of button){ 
    a.addEventListener('click',()=>{
        alert(a.innerHTML);
        const b = a.querySelector('i');
        alert(b.innerHTML);
        b.classList.toggle('active');
    })
}
*/
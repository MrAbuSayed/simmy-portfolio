
const handleNav= document.querySelector('.navHandler');
const closeNav =document.querySelector('.navClose');

handleNav.addEventListener('click',()=>{
document.querySelector('.section').style.display='inline';
document.querySelector('.navHandler').style.display='none';
document.querySelector('.navClose').style.display='inline';
})

closeNav.addEventListener('click',()=>{
    document.querySelector('.section').style.display='none';
    document.querySelector('.navHandler').style.display='inline';
    document.querySelector('.navClose').style.display='none';
})


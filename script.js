const wrapper = document.querySelector('.wrapper');
const loginlinks = document.querySelector('.login-links');
const registrerlinks = document.querySelector('.registrer-links');
const btnpopup = document.querySelector('.btnlogin-popup');
const iconclose = document.querySelector('.icon-close');


registrerlinks.addEventListener('click',()=>{
    wrapper.classList.add('active');
})


loginlinks.addEventListener('click',()=>{
    wrapper.classList.remove('active');
})


btnpopup.addEventListener('click',()=>{
    wrapper.classList.add('active-popup');
})

iconclose.addEventListener('click',()=>{
    wrapper.classList.remove('active-popup');
})
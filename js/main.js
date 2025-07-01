const hamburger = document.getElementById('hamburger');
const headerList = document.querySelector('.header__list');
const menuLinks = document.querySelectorAll('.header__list a');
const logo = document.querySelector('.site__title');
hamburger.addEventListener('click',() => {
    hamburger.classList.toggle('active');
    console.log('押されたよ');
    if(hamburger.classList.contains('active')) {
        headerList.classList.add('active');
        logo.classList.add('active');
    } else {
        headerList.classList.remove('active');
        logo.classList.remove('active');
    }
})

menuLinks.forEach(link => {
    link.addEventListener('click',() => {
        hamburger.classList.remove('active');
        headerList.classList.remove('active');
        logo.classList.remove('active');
    })
})

logo.addEventListener('click',() => {
    hamburger.classList.remove('active');
    headerList.classList.remove('active');
    logo.classList.remove('active');
})

const header = document.getElementById('header');
const fv = document.getElementById('fv');
const fvHeight = fv.offsetHeight;

window.addEventListener('scroll',() => {
    const fvHeight = fv.offsetHeight;
    if(window.scrollY > fvHeight) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
})
const hamburger = document.getElementById('hamburger');
const header__list = document.querySelector('.header__list');
const menuLinks = document.querySelectorAll('.header__list a');
const logo = document.querySelector('.site__title');
hamburger.addEventListener('click',() => {
    hamburger.classList.toggle('active');
    console.log('押されたよ');
    if(hamburger.classList.contains('active')) {
        header__list.classList.add('active');
        logo.classList.add('active');
    } else {
        header__list.classList.remove('active');
        logo.classList.remove('active');
    }
})

menuLinks.forEach(link => {
    link.addEventListener('click',() => {
        hamburger.classList.remove('active');
        header__list.classList.remove('active');
    })
})

logo.addEventListener('click',() => {
    hamburger.classList.remove('active');
    header__list.classList.remove('active');
})
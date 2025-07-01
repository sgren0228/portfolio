const hamburger = document.getElementById('hamburger');
const header__list = document.querySelector('.header__list');
hamburger.addEventListener('click',() => {
    hamburger.classList.toggle('active');
    console.log('押されたよ');
    if(hamburger.classList.contains('active')) {
        header__list.classList.add('active');
    } else {
        header__list.classList.remove('active');
    }
})
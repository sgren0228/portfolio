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
// ヘッダー切り替え
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

// モーダルウィンドウ
const modal = document.querySelectorAll('modal');
const mask = document.getElementById('mask');
document.querySelectorAll('.works__item').forEach(item => {
    item.addEventListener('click', function() {
        const modalId = this.getAttribute('data-modal');

        document.querySelectorAll('.modal').forEach(function(modal) {
            modal.classList.remove('open');
        });

        if (modalId) {
            document.getElementById(modalId).classList.add('open');
        }
        document.getElementById('mask').classList.add('open');
        document.body.style.overflow = 'hidden';
    });
});

mask.addEventListener('click', () => {

    document.querySelectorAll('.modal').forEach(modal => {
        modal.classList.remove('open');
    });
    mask.classList.remove('open');
    document.body.style.overflow = 'auto';
});

// スムーズスクロール
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    let target;
    if (href === '#' || href === '') {
      // ページトップへ
      target = document.documentElement; // または document.body
    } else {
      target = document.querySelector(href);
    }
    if (target) {
      e.preventDefault();
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

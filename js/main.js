$(function () {

  $(window).on('load', function () {
    $("#splash").delay(1500).fadeOut('slow');
    $("#splash_logo").delay(1200).fadeOut('slow');
  });

  $('.hamburger').on('click', function () {
    console.log('🍔 clicked!', this);
    $(this).toggleClass('active');
    $('.header__menu').toggleClass('open');
  });

  // slickの初期化は要素が存在する時だけ！
  if ($('.slider').length > 0) {
    $('.slider').slick({
      infinite: true,
      autoplay: true,
      autoplaySpeed: 1000,
      speed: 800,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      dots: false,
      pauseOnHover: false,
      cssEase: 'ease',

      responsive: [
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            variableWidth: false
          }
        }
      ]
    });
  }

});
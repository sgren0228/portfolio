$(function(){

  $(window).on('load',function(){
    $("#splash").delay(1500).fadeOut('slow');//ローディング画面を1.5秒（1500ms）待機してからフェードアウト
    $("#splash_logo").delay(1200).fadeOut('slow');//ロゴを1.2秒（1200ms）待機してからフェードアウト
  });

  $('.hamburger').on('click', function () {
    $(this).toggleClass('active'); // ハンバーガーにアニメーションつけたい時とかに使える
    $('.header__menu').toggleClass('open'); // メニューの表示・非表示
  });

    $('.slider').slick({
      infinite: true,
      autoplay: true,
      autoplaySpeed: 1000,
      speed: 800,
      slidesToShow: 3,        // デフォルトは3枚
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
  });
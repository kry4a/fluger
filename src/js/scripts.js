$(function (){
  console.log('init');
  
  $('.map__layer').parallax(
    {mouseport: $("body"),xorigin: 0,yorigin: 0},
    {xparallax: '0', yparallax: '0'},{xparallax: '30px',yparallax: '30px'},{xparallax: '45px',yparallax: '45px'},{xparallax: '60px',yparallax: '60px'}
  );

  $(window).scroll(function(){
    var header = $('.header'),
        main = $('.main'),
        scroll = $(window).scrollTop();
    if (scroll >= 300) {
      header.addClass('header--fixed');
      main.addClass('main--fixed');
    } else {
      header.removeClass('header--fixed');
      main.removeClass('main--fixed');
    }
  });

});




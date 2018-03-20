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

  $('body').delegate('.scroll-to-target', 'click', function(e) {
    var target = $(this).data('target');
    var offset = 200;
    if ($(this).data('offset') != undefined) offset = $(this).data('offset');
    
    $.scrollTo(target, 600, { offset: -offset });
    
    return false;
  });

  $('body').delegate('.overlay__close', 'click', function(e) {
    $('body').removeClass('noscroll');
    $('html').removeClass('noscroll');
    $('.overlay').removeClass('overlay--active');

    if ($(this).hasClass('overlay__close--remove')) {
      $(this).closest('.overlay').remove();
    }
    return false;
  });

  $('body').delegate('.product', 'click', function(e) {
    console.log('product');
    //var overlay = $(this).data('overlay');
    //if (overlay) {
      $('.overlay').addClass('overlay--active');
      $('body').addClass('noscroll');
      $('html').addClass('noscroll');
    //}
    return false;
  });

  $('.toggler').click(function(e){
    var _target = $(this).data('target');
    var _class = $(this).data('class');
    $('#'+_target).toggleClass(_class);
    $('body').toggleClass('noscroll');
    $('html').toggleClass('noscroll');
  });

  var w_width = $(window).width();
  if (w_width>767 && $('.parallax').length) {
    var parallax_1 = document.querySelectorAll(".parallax__inner");
      speed = 0.25;

    window.onscroll = function(){
      [].slice.call(parallax_1).forEach(function(el,i){

        var windowYOffset = window.pageYOffset,
            big_pos = "50% " + (windowYOffset * speed) + "px";
            el.style.backgroundPosition = big_pos;
      });
      
    };
  }
});




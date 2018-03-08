$(function (){
  console.log('init');
  $('.map__layer').parallax(
    {mouseport: $("body"),xorigin: 0,yorigin: 0},
    {xparallax: '0', yparallax: '0'},{xparallax: '30px',yparallax: '30px'},{xparallax: '45px',yparallax: '45px'},{xparallax: '60px',yparallax: '60px'}

  );
});




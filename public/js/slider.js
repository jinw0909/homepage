$(function() {
  $('.bxslider').bxSlider({
    mode: 'fade',
    // speed: 500,
    auto: true,
    pause: 7000,
    stopAutoOnClick: true,
    oneToOneTouch: false,
    touchEnabled: false,
    onSliderLoad: function() {
      $('.slide-image, .slide-title, .slide-btn').removeClass('show');
      setTimeout(function() {
        $('.slide-image').addClass('show');
      }, 1000);
      setTimeout(function() {
        $('.slide-title').addClass('show');
      }, 1500);
      setTimeout(function() {
        $('.slide-btn').addClass('show');
      }, 2000);
    },
    onSlideBefore: function() {
      $('.slide-image, .slide-title, .slide-btn').removeClass('show');
      setTimeout(function() {
        $('.slide-image').addClass('show');
      }, 1000);
      setTimeout(function() {
        $('.slide-title').addClass('show');
      }, 1500);
      setTimeout(function() {
        $('.slide-btn').addClass('show');
      }, 2000);
    },
  });

  // $('.bx-next, .bx-prev, .bx-pager-link').on('click', function() {
  //   $('.slide-image, .slide-title, .slide-btn').removeClass('show');
  //   setTimeout(function() {
  //     $('.slide-image').addClass('show');
  //   }, 1000);
  //   setTimeout(function() {
  //     $('.slide-title').addClass('show');
  //   }, 1500);
  //   setTimeout(function() {
  //     $('.slide-btn').addClass('show');
  //   }, 2000);
  // });

})
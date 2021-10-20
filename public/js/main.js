$(function(){
  //main naviagtion
  $('.main-nav-item').first().on('click', function() {
    $('.nav-overlay').toggleClass('fade-in');
    $('.main-nav-modal').toggleClass('show');
    $(this).siblings().toggleClass('opacity-down');
    $('.item-dropdown').toggleClass('flip');
    $('.sitelogo').removeClass('show');
    for (let i = 0; i < $('.sitelogo').length; i++) {
      setTimeout(function() {
        $(`.sitelogo:nth-of-type(${i + 1})`).addClass('show'); 
      }, (i + 1) * 100);
    }
  });

  //mobile navigation
  $('.mobile-modal-title > .mobile-modal-link').on('click', function() {
    let modalItemHeight = $('.mobile-modal-toggle-item').innerHeight();
    let modalItemCount = document.querySelectorAll('.mobile-modal-toggle-item').length;
    console.log('modalItemHeight: ' + modalItemHeight);
    console.log('modalItemCount: ' + modalItemCount);
    $('.mobile-modal-toggle').toggleClass('show');
    $('.mobile-modal-dropdown').toggleClass('flip');
  })
  $('.mobile-nav-menu').on('click', function() {
    $('.main-mobile-modal').removeClass('in');
    $('.main-mobile-modal').addClass('out');
    $('.nav-overlay').addClass('fade-in');
  });
  $('.mobile-modal-close').on('click', function() {
    $('.main-mobile-modal').removeClass('out');
    $('.main-mobile-modal').addClass('in');
    $('.nav-overlay').removeClass('fade-in');
  });

  // click overlay
  $('.nav-overlay').on('click', function() {
    $(this).removeClass('fade-in');
    $('.main-nav-modal').removeClass('show');
    $('.item-dropdown').removeClass('flip');
    $('.sitelogo').removeClass('show');
    $('.modal').removeClass('show');
    
    $('.main-mobile-modal').removeClass('out');
    $('.main-mobile-modal').addClass('in');
    $('.mobile-modal-toggle').removeClass('show');
    $('.mobile-modal-dropdown').removeClass('flip');
  });
  
  // modals
  $('.spec-linkbutton').on('click', function() {
    $('.spec-modal').addClass('show');
    $('.nav-overlay').addClass('fade-in');
  })
  $('.contact-linkbutton').on('click', function() {
    $('.contact-modal').addClass('show');
    $('.nav-overlay').addClass('fade-in');
  })

  // NEWS PAGE
  // news navigation (news-dropdown)
  $('.news-nav-dropdown-select').on('click', function() {
    $('.news-nav-dropdown-content').toggleClass('show');
    $('.news-nav-icon').toggleClass('hidden');
    $(this).toggleClass('selected');
  });

  $(document).click(function(e){
    if( $(e.target).closest(".news-nav-dropdown-content").length > 0 ) {
        return false;
    } else if ($(e.target).closest(".news-nav-dropdown-select").length > 0) {
      return false;
    }
    if ($(".news-nav-dropdown-content").hasClass('show')) {
      $(".news-nav-dropdown-content").removeClass('show');
      $(".news-nav-dropdown-select").removeClass("selected");
      $('.news-nav-icon').toggleClass('hidden');
    }
  });

});

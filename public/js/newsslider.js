$(function() {
    // let slider = $('news-bxslider').bxSlider();
    let slideSettings = {
        minsSlides: 1,
        maxSlides: 4,
        slideWidth: 0,
        moveSlides: 1,
        shrinkItems: false,
        pager: false,
        controls: false,
        touchEnabled: false,
        adaptiveHeight: true,
    }
    let slider = $('.news-bxslider').bxSlider();

    // resizeHandler
    function slideHandler() {
        let sliderWidth = $('.news-banner').innerWidth();
        if ($(window).innerWidth() >= 1280) {
            slideSettings.slideWidth = sliderWidth / 4;
            slideSettings.controls = false;
        } else if ($(window).innerWidth() < 1280) {
            slideSettings.slideWidth = sliderWidth / 3;
            slideSettings.controls = true; 
        } 
        if ($(window).innerWidth() < 768) {
            slideSettings.slideWidth = sliderWidth / 2;
        }
        if ($(window).innerWidth() < 480) {
            slideSettings.slideWidth = sliderWidth;
        }
        slider.reloadSlider(slideSettings);

        let itemWidth = $('.news-slide').innerWidth() * 0.9;
        let itemHeight = $('.news-bxslider').innerHeight();
        console.log('H :' + itemHeight + ', W' + itemWidth);
        let item = $('.news-slide-article');
        // item.css({'width':itemWidth});
        item.css({'width':itemWidth, 'height':itemHeight});
    }
    $(window).on('load', slideHandler);
    $(window).on('resize', slideHandler);
    slideHandler();
});
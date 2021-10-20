$(function(){
    let newsItemHeight = $('.news-item').innerHeight();
    let length = $('.news-item').length;
    console.log(length);
    $('.news-list').height(newsItemHeight * 4 + 5);
   
    $('#more-btn').on('click', function() {
        let increasedHeight = $('.news-list').height() + (newsItemHeight * 4);
        if (increasedHeight > newsItemHeight * length) {
            increasedHeight = newsItemHeight * length;
        }

        $('.news-list').height(increasedHeight + (2 * length));

    });

});

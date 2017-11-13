/**
 * Created by Никита on 13.11.2017.
 */
$(function() {
    $('.detail-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        // adaptiveHeight: true,
        autoplay: true,
        arrows: 0,
        dots: true,
    });
    
    var cross = $('.detail-window__cross');
    var detail = $('.detail-window');
    cross.click(function () {
       detail.removeClass('detail-window_active');
    });
});
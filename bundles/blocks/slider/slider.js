$(function() {

    $('.slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        adaptiveHeight: true,
        autoplay: false,
        arrows: 0,
        dots: true,
    });

    $('.slick-dots').css({
        position : 'absolute',
        bottom : '5%'
    });
    $('.slick-dots li').css({
        border : '1px solid #736458',
        borderRadius: '50px',
        width : '15px',
        height : '15px'
    });

});
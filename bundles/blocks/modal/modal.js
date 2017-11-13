/**
 * Created by Никита on 10.11.2017.
 */
$(function() {

    var item = $('.catalog__item');
    var modal = $('.modal-window');
    var cross = $('.modal__cross');
    var detail = $('.detail-window');

    item.click(function () {
        modal.animate({
            opacity : 1,
            zIndex: 1,
            left: 0
        }, 350);
    });

    cross.click(function () {
        modal.animate({
            opacity : 0,
            zIndex: 0,
            left: '-4000px'
        }, 550);
    });

    var img = $('.slider__img');
    img.click(function () {
        detail.animate({
            zIndex: 2,
            opacity: 1
        }, 200);
    });

});
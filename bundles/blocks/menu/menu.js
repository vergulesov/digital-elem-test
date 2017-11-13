/**
 * Created by Никита on 13.11.2017.
 */
$(function() {

    var bgImg = $('.background-img');
    var page = $("html, body");

    $('.href_main').click(function () {
        var goto = $('.main');
        page.animate({
            scrollTop: goto.offset().top
        }, 1000);
        bgImg.animate({
            bottom : 0
        }, 1000);
    });

    $('.href_about').click(function () {
        var goto = $('.about');
        page.animate({
            scrollTop: goto.offset().top
        }, 1000);
        bgImg.animate({
            bottom : '40vh'
        }, 1000);
    });

    $('.href_products').click(function () {
        var goto = $('.products');
        page.animate({
            scrollTop: goto.offset().top
        }, 1000);
        bgImg.animate({
            bottom : '80vh'
        }, 1000);
    });

    $('.href_contacts').click(function () {
        var goto = $('.contacts');
        page.animate({
            scrollTop: goto.offset().top
        }, 1000);
        bgImg.animate({
            bottom : '120vh'
        }, 1000);
    });

    $('.href_feedback').click(function () {
        var goto = $('.feedback');
        page.animate({
            scrollTop: goto.offset().top
        }, 1000);
        bgImg.animate({
            bottom : '160vh'
        }, 1000);
    });

});
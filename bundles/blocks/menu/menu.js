/**
 * Created by Никита on 13.11.2017.
 */
$(function() {

    var page = $("html, body");
    $('.href_about').click(function () {
        var goto = $('.about');
        page.animate({
            scrollTop: goto.offset().top
        }, 1000);
    });

    $('.href_products').click(function () {
        var goto = $('.products');
        page.animate({
            scrollTop: goto.offset().top
        }, 1000);
    });

    $('.href_contacts').click(function () {
        var goto = $('.contacts');
        page.animate({
            scrollTop: goto.offset().top
        }, 1000);
    });

    $('.href_feedback').click(function () {
        var goto = $('.feedback');
        page.animate({
            scrollTop: goto.offset().top
        }, 1000);
    });

});
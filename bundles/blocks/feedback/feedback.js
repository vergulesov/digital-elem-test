/**
 * Created by Никита on 13.11.2017.
 */
$(function() {

    $('.feedback__submit').click(function () {
        var name = $('.feedback__name').val();
        if ( !name ) {
            $('.feedback__name').next().css('visibility', 'visible');
        }
        var mail = $('.feedback__email').val();
        if ( !mail ) {
            $('.feedback__email').next().css('visibility', 'visible');
        }
        var textarea = $('.feedback__input_textarea').val();
        if ( !textarea ) {
            $('.feedback__input_textarea').next().css('visibility', 'visible');
        }
        if (name && mail && textarea) {
            $('.form-container_form').hide();
            $('.form-container_result').show('slow');
        }
    });

    $( ".feedback__input" ).focus(function() {
        $('.tooltip__text').css('visibility', 'hidden');
    });

});
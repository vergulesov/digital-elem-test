/**
 * Created by Никита on 08.11.2017.
 */
$(function() {

    // при инициализации скроллим на самый верх
    var page = $("html, body");
    page.animate({
        scrollTop: 0
    }, 800);

    // отключим скролл
    $('body').on('scroll touchmove mousewheel', function(){
        return false;
    });

    // отключаем стандратное управление
    $(document).keydown(function(e) {
        switch(e.which) {
            case 37: // left
                break;

            case 38: // up
                break;

            case 39: // right
                break;

            case 40: // down
                break;

            case 34: // pgdpwn
                break;

            case 33: // pgup
                break;

            default: return; // exit this handler for other keys
        }
        e.preventDefault(); // prevent the default action (scroll / move caret)
    });

    // парралакс фона
    var bgImg = $('.background-img');
    function parralax() {
        var bottom = parseInt(bgImg.css('bottom'));
        var height = 0.4 * $(window).outerHeight();
        bgImg.animate({ bottom : bottom+height }, 1000);
    }

    // обратный парралакс фона
    function inverseParralax() {
        var bottom = parseInt(bgImg.css('bottom'));
        var height = 0.4 * $(window).outerHeight();
        // проверонька, чтобы фон не смещался когда мы в начале документа
        if ( window.scrollY < 50 ) {
            bgImg.animate({ bottom : 0 }, 800);
        } else {
            bgImg.animate({bottom: bottom - height}, 1000);
        }
    }

    // кнопки след. страница
    var nextPage = $('.next-page');
    nextPage.click(function () {
        var nextContainer = $(this).parent('.container').next();
        page.animate({
            scrollTop: nextContainer.offset().top
        }, 1000);
        parralax();
    });

    // события на колесо мыши
    $('.container').on('mousewheel', function(event) {
        var nextContainer = $(this).next();
        var prevContainer = $(this).prev();

        // прекратить выполнение, если прошлая анимация не закончилась
        if($('html').is(':animated') || $('body').is(':animated')) return false;

        // wheel up || wheel down
        if (event.deltaY < 0) {
            page.animate({
                scrollTop: nextContainer.offset().top
            }, 800);
            parralax();
        } else if ( event.deltaY > 0 ) {
            page.animate({
                scrollTop: prevContainer.offset().top
            }, 800);
            inverseParralax();
        }
    });

});
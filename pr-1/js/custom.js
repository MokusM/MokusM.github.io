$(window).on('load', function() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
        $('body').addClass('ios');
    } else {
        $('body').addClass('web');
    };
    setTimeout(function() {
        $(".js-bg").each(function() {
            $(this).css('background-image', 'url(' + $(this).data("preload") + ')');
        });
        $(".js-img").each(function () {
            $(this).attr('src', $(this).data("src"));
        });
    }, 200);
    setTimeout(function() {
        $('body').removeClass('loaded');
        wow = new WOW({
            offset: 50
        })
        wow.init(); 
    }, 5400);
});
/* viewport width */
function viewport() {
    var e = window,
        a = 'inner';
    if (!('innerWidth' in window)) {
        a = 'client';
        e = document.documentElement || document.body;
    }
    return {
        width: e[a + 'Width'],
        height: e[a + 'Height']
    }
};
/* viewport width */
$(function() {
    /* placeholder*/
    $('input, textarea').each(function() {
        var placeholder = $(this).attr('placeholder');
        $(this).focus(function() {
            $(this).attr('placeholder', '');
        });
        $(this).focusout(function() {
            $(this).attr('placeholder', placeholder);
        });
    });
    /* placeholder*/
    /*Cursor init*/
    function moveCursor(e) {
        $('.cursor').css({
            "top": e.pageY,
            "left": e.pageX
        });
        $(".video-slider").mouseover(function() {
           $('.cursor').addClass('is-moving');
        });
        $(".video-slider").mouseout(function() {
            $('.cursor').removeClass('is-moving');
            $('.cursor').removeClass('drag');
        });
    }
    $(window).on('mousemove', moveCursor);
    /*button nav*/    
    $('.js-button-nav-2').click(function() {
        $(".js-button-nav").click();
        return false;
    });
    $(".js-button-nav").toggle(function() {
        $(".js-button-nav").addClass('active'),
            $('.main-nav').addClass('show-nav');
        $('body').addClass('open-nav');
        $('header').addClass('fixed-nav');
        if ($(document).height() > $(window).height()) {
            var scrollTop = ($('html').scrollTop()) ? $('html').scrollTop() : $('body').scrollTop();
            $('html').addClass('noscroll').css('top', -scrollTop);
        }
        setTimeout(function() {
            $('.main-nav').addClass('show-nav-end');                      
        }, 1300);
    }, function() {
        $(".js-button-nav").removeClass('active'),
            $('.main-nav').removeClass('show-nav');
        $('body').removeClass('open-nav');
        $('header').removeClass('fixed-nav');
        var scrollTop = parseInt($('html').css('top'));
        $('html').removeClass('noscroll');
        $('html,body').scrollTop(-scrollTop);
        $('.main-nav').removeClass('show-nav-end');
    });
    /*button nav*/
    
    /*scroll id*/
    $('.js-scroll').click(function() {
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 1000);
        return false;
    });
    /*scroll id*/
    /*marquee text*/
    var marquee = $("#marquee");
    marquee.css({
        "overflow": "hidden",
        "width": "200vw"
    });
    marquee.wrapInner("<div>");
    marquee.find("span").css({
        "width": "50%",
        "display": "inline-block",
        "text-align": "center"
    });
    marquee.append(marquee.find("span").clone());
    marquee.wrapInner("<div>");
    marquee.find("div").css("width", "200vw");
    var reset = function() {
        $(this).css("margin-left", "0%");
        $(this).animate({
            "margin-left": "-50%"
        }, 50000, 'linear', reset);
    };
    reset.call(marquee.find("div"));

    var marquee1 = $("#marquee_1");
    marquee1.css({
        "overflow": "hidden",
        "width": "200vw",
        "left": "-100vw"
    });
    marquee1.wrapInner("<span>");
    marquee1.find("span").css({
        "width": "50%",
        "display": "inline-block",
        "text-align": "center"
    });
    marquee1.append(marquee1.find("span").clone());
    marquee1.wrapInner("<div>");
    marquee1.find("div").css("width", "200vw");
    var reset1 = function() {
        $(this).css({
            "right": "0",
            "position": "relative"
        });
        $(this).animate({
            "right": "-50%"
        }, 50000, 'linear', reset1);
    };
    reset1.call(marquee1.find("div"));
    /*marquee text*/
    /* components */
    if ($('.js-main-screen-slider').length) {
        $('.js-main-screen-slider').owlCarousel({
            loop: true,
            items: 1,
            dots: true
        })
    }
    if ($('.js-owl-carousel').length) {
        owl = $(".js-owl-carousel").owlCarousel({
            autoWidth: true,
            items: 1,
            dots: false
        });
        owl.on('drag.owl.carousel', function(e) {
            $('.cursor').addClass('drag');
        });
    }
    if ($('.js-counter').length) {
        $('.js-counter').counterUp({
            delay: 100,
            time: 1500
        });
    }


    if ($('#form').length) {
        $("#form").validate({
            rules: {
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                email: {
                    required: "Необходимо указать e-mail",
                    email: "E-mail введен неверно, попробуйте еще раз."
                }
            }
        });
    }
    if ($('.js-fancybox').length) {
        $('.js-fancybox').fancybox({
            margin: 10,
            padding: 0
        });
    };
    $("#form").submit(function(event) {
        event.preventDefault();
        if ($(this).valid()) {
            var form = $(this);
            var data = $(this).serialize();
            var action = form.attr('action');
            var ajax = $.post(action, data);
            var message = 'Ошибка при отправке.';
            var place = $('.window-open-cont')[0];
            ajax.done(function (data) {
                try {
                    var json = JSON.parse(data);
                    message = json.message;
                } catch (err) {
                    console.warn(err);
                }
            })
            ajax.always(function() {
                place.innerHTML = message;
                $('.js-fancybox').click();
                form[0].reset()
            })
            return false;
        }
    });
    if ($('.js-word-letter').length) {
        $(".js-word-letter").lettering();
    }
    /* components */
    /*button hover*/
    if ($('.button-nav').length) {
        $('.button-nav').each(function(i, elem) {
            var lFollowX = 0,
                lFollowY = 0,
                x = 0,
                y = 0;

            function moveBackground() {
                x += (lFollowX - x);
                y += (lFollowY - y);

                translate = 'translate(' + x + 'px, ' + y + 'px)';

                $(elem).css({
                    '-webit-transform': translate,
                    '-moz-transform': translate,
                    'transform': translate
                });


                window.requestAnimationFrame(moveBackground);
            }

            $(this).on('mousemove', function(e) {
                var lMouseX = e.clientX - $(this).offset().left + $(window).scrollLeft();
                var lMouseY = e.clientY - $(this).offset().top + $(window).scrollTop();
                lFollowX = (30 * lMouseX) / 100;
                lFollowY = (30 * lMouseY) / 100;
            });
            
            moveBackground();
        });
    };
    /*button hover*/

});

var handler = function() {

    var height_footer = $('footer').height();
    var height_header = $('header').height();
    //$('.content').css({'padding-bottom':height_footer+40, 'padding-top':height_header+40});


    var viewport_wid = viewport().width;
    var viewport_height = viewport().height;

    if (viewport_wid <= 991) {

    }
    var registration_height = $('.box-registration').outerHeight();
    var main_section = $('.main-screen').height() + registration_height;
    $(window).scroll(function() {
        if ($(window).scrollTop() > main_section) {
            $('header').addClass("fixed");
        } else {
            $('header').removeClass("fixed");
        };
    });
    $(window).load(function() {
        if ($(window).scrollTop() > main_section) {
            $('header').addClass("fixed");
        } else {
            $('header').removeClass("fixed");
        };
    });


}
$(window).bind('load', handler);
$(window).bind('resize', handler);

$(window).on('load', function() {
    if ($('.box-registration').length) {
        var registration_height = $('.box-registration').outerHeight();
        var main_section = $('.main-screen').height() - registration_height;
        $('.box-registration').parent().height(registration_height);
        /*if ($(window).scrollTop() + viewport().height > main_section + registration_height ) {
            $('.box-registration').addClass('fixed');
        } else {
            $('.box-registration').removeClass('fixed');
        };
        $(window).scroll(function() {
            if ($(window).scrollTop() + viewport().height > main_section + registration_height) {
                $('.box-registration').addClass('fixed');
            } else {
                $('.box-registration').removeClass('fixed');
            };
        });*/
        /*subscribe form*/ 
        $('.js-show-form').click(function() {            
            $(this).addClass('active');
            $('.registration__form').addClass('show-form');
            $('.box-registration').removeClass('registration-hidden');
            return false;
        })
        /*subscribe form*/
        var mywindow = $(window);
        var mypos = mywindow.scrollTop();
        var up = false;        
        var newscroll;
        mywindow.scroll(function () {
            newscroll = mywindow.scrollTop();
            if (newscroll > mypos && !up) {
                $('.box-registration').addClass('registration-hidden');
                $('.registration__form').removeClass('show-form');
                up = !up;
            } else if(newscroll < mypos && up) {
                $('.box-registration').removeClass('registration-hidden');
                $('.registration__form').removeClass('show-form');
                up = !up;
            }            
            mypos = newscroll;
        });
        $('.registration__input').focus(function() {
            $('.registration__form').addClass('show-form-2');
            $('.box-registration').addClass('open-form');
        });        
        $('.registration__input').focusout(function() {
            $('.box-registration').removeClass('open-form');
            $('.registration__form').removeClass('show-form-2');
        });
    };
})

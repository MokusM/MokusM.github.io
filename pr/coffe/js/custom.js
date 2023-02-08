$(window).load(function() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
        $('body').addClass('ios');
    } else {
        $('body').addClass('web');
    };
    $('body').removeClass('loaded');
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
    $(".button-nav").toggle(function() {
        $(this).addClass('active'),
            $('.box-main-nav').addClass('active');
        if ($(document).height() > $(window).height()) {
            var scrollTop = ($('html').scrollTop()) ? $('html').scrollTop() : $('body').scrollTop();
            $('html').addClass('noscroll').css('top', -scrollTop);
        }
    }, function() {
        $(this).removeClass('active'),
            $('.box-main-nav').removeClass('active');
        var scrollTop = parseInt($('html').css('top'));
        $('html').removeClass('noscroll');
        $('html,body').scrollTop(-scrollTop);
    });
    /*scroll id*/
    $('.js-scroll').click(function() {
        var target = $(this).attr('href');
        $('html').removeClass('noscroll');
        $(".button-nav").removeClass('active')
        $('.box-main-nav').removeClass('active');
        $('html, body').animate({
            scrollTop: $(target).offset().top - 50
        }, 1000);
        return false;
    });
    /*scroll id*/
    /* tabs*/
    $('.tabs li a').click(function() {
        $(this).parents('.tab-wrap').find('.tab-cont').addClass('hide-tab');
        $(this).parent().siblings().removeClass('active');
        var id = $(this).attr('href');
        $(id).removeClass('hide-tab');
        $(this).parent().addClass('active');
        return false;
    });
    /* tabs*/
    /* components */
    $('.gallery').parallax({
        imageSrc: 'img/gallery-img.png'
    });
    $('.inf').parallax({
        imageSrc: 'img/inf-bg.jpg'
    });
    $('.box-title').parallax({
        imageSrc: 'img/first-screen.jpg'
    });
    if ($('.js-slider').length) {
        var $numberReview = $('.number-review-slide');
        var $slickReview = $('.js-slider');
        $slickReview.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide) {
            var i = (currentSlide ? currentSlide : 0) + 1;
            $numberReview.html('<span class="curr-number">' + i + '</span> <span class="curr-number_arr"> from</span> ' + slick.slideCount);
        });
        $('.js-slider').slick({
            dots: false,
            infinite: true,
            speed: 300,
            centerMode: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            variableWidth: true,
            prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button"><i class="icon-arrows-left"></i></button>',
            nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button"><i class="icon-arrows-right"></i></button>'
        });
    };

    if ($('.js-testimonials-slider').length) {
        $('.js-testimonials-slider').slick({
            dots: true,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 4000,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button"><i class="icon-arrow-left"></i></button>',
            nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button"><i class="icon-arrow-right"></i></button>'
        });
    };
    if ($('.js-partners').length) {
        $('.js-partners').slick({
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 6,
            autoplay: true,
            autoplaySpeed: 6000,
            slidesToScroll: 1,
            prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button"><i class="icon-arrow-left"></i></button>',
            nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button"><i class="icon-arrow-right"></i></button>',
            responsive: [{
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                    }
                }
            ]
        });
    };
});
var handler = function() {
    $(window).scroll(function() {
        if ($(window).scrollTop() > 20) {
            $('header').addClass("fixed");
        } else {
            $('header').removeClass("fixed");
        };
    });
    $(window).load(function() {
        if ($(window).scrollTop() > 20) {
            $('header').addClass("fixed");
        } else {
            $('header').removeClass("fixed");
        };
    });    
}
$(window).bind('load', handler);
$(window).bind('resize', handler);
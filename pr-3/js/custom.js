$(window).on('load', function() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
        $('body').addClass('ios');
    } else {
        $('body').addClass('web');
    };
    $('body').removeClass('loaded');
    setTimeout(function() {
        $('.video-wrap').each(function() {
            var wid_poster = $(this).attr('data-poster');
            $(this).find('.plyr__video-wrapper').css({
                'background-image': 'url(' + wid_poster + ')'
            })
        });
    }, 300);
    $('.section-1 .js-zoomIn').addClass('zoomIn animated');
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
    $('.form-control').focus(function() {
        $(this).closest('.box-field').addClass('focused-field');
    });
    $('.form-control').focusout(function() {
        var val_field = $(this).val().length;
        if (val_field > 0) {
            $(this).closest('.box-field').addClass('focused-field');
        } else {
            $(this).closest('.box-field').removeClass('focused-field');
        };
    });
    $('.js-input-count').keyup(function() {
        var message_length = $(this).val().length;
        $('.form-control-count span').html(message_length);
    });

    /* placeholder*/

    $(".button-nav" ).toggle(function() {
        $(this).addClass('active'), 
        $('.main-nav').addClass('open-nav');
        if ($(document).height() > $(window).height()) {
            var scrollTop = ($('html').scrollTop()) ? $('html').scrollTop() : $('body').scrollTop();
            $('html').addClass('no-scroll').css('top',-scrollTop);         
        }
    }, function() {
        $(this).removeClass('active'), 
        $('.main-nav').removeClass('open-nav');
        var scrollTop = parseInt($('html').css('top'));
        $('html').removeClass('no-scroll');
        $('html,body').scrollTop(-scrollTop);
    });


    $('.faq-list li a').click(function() {
        $(this).parent().siblings().removeClass('active');
        $(this).parent().siblings().find('.faq-list__answer').slideUp();
        $(this).parent().find('.faq-list__answer').slideDown();
        $(this).parent().addClass('active');
        return false;
    });

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
    /*counter product*/
    $('.counter__link_next').click(function() {
        var $input = $(this).parents('.box-counter').find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.counter__link_prev').click(function() {
        var $input = $(this).parents('.box-counter').find('input');
        var count = parseInt($input.val()) + 1;
        count = count > ($input.attr("maxlength")) ? ($input.attr("maxlength")) : count;
        $input.val(count);
        $input.change();
        return false;
    });
    /*counter product*/
    /*next-step*/
    $('.js-next-step').click(function() {
        $(this).parents('li').removeClass('active').find('.ordering-step__cont').slideUp();
        $(this).parents('li').next().addClass('active').find('.ordering-step__cont').slideDown();
        return false;
    });
    /*next-step*/

    $('.js-pay-link').click(function() {
        $(this).parent().siblings().removeClass('active');
        $(this).parents('li').addClass('active');
        return false;
    });


    /* components */
    if ($('.js-fancybox').length) {
        $('.js-fancybox').fancybox({
            margin: 10,
            padding: 0
        });
    };
    if ($('.js-fancybox-order').length) {
        $('.js-fancybox-order').fancybox({
            margin: 0,
            padding: 0,
            wrapCSS: 'fancybox-order',
            helpers: {
                media: true
            },
            width: "100%",
            height: "100%",
            autoSize: false,
            scrolling: false,
            beforeShow: function() {
                $("html").css({
                    'overflow-y': 'hidden'
                });
            },
            afterClose: function() {
                $("html").css({
                    'overflow-y': 'visible'
                });
            }
        });
    };


    if ($('.js-slider-step').length) {
        $('.js-slider-step').slick({
            dots: true,
            infinite: false,
            speed: 000,
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1
        });
    };

    if ($('.js-faq-slider').length) {
        $('.js-faq-slider').slick({
            dots: false,
            infinite: false,
            speed: 400,
            arrows: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button"><i class="icon-arrow-left"></i></button>',
            nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button"><i class="icon-arrow-right"></i></button>'
        });
    };

    if ($('.js-reviews-photo').length) {
        $('.js-reviews-photo').slick({
            dots: false,
            infinite: true,
            speed: 300,
            arrows: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button"><i class="icon-arrow-left"></i></button>',
            nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button"><i class="icon-arrow-right"></i></button>',
        });
    };

    if ($('.twentytwenty-container').length) {
        $(".twentytwenty-container").twentytwenty();
    };
    if ($('.js-scroll').length) {
        $(".js-scroll").mCustomScrollbar({
            axis: "x",
            theme: "dark-thin",
            autoExpandScrollbar: true,
            mouseWheel: {
                enable: false
            },
            scrollbarPosition: "outside",
            contentTouchScroll: false,
            advanced: {
                autoExpandHorizontalScroll: true
            }
        });
    };

    if ($('.js-reviews-photo-list').length) {
        $('.js-reviews-photo-list').slick({
            dots: false,
            infinite: false,
            speed: 600,
            arrows: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button"><i class="icon-arrow-left"></i></button>',
            nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button"><i class="icon-arrow-right"></i></button>',
            responsive: [{
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 650,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    };
    if ($('.js-reviews').length) {
        $(document).on('click', '.reviews-list__item', function() {
            n = $(this).index();
            $('.js-reviews-text').slick('slickGoTo', n);
        });
        $('.js-reviews-text').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            fade: true,
            infinite: false,
            asNavFor: '.js-reviews-img',
            prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button"><i class="icon-arrow-left"></i></button>',
            nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button"><i class="icon-arrow-right"></i></button>'
        });
        $('.js-reviews-img').slick({
            asNavFor: '.js-reviews-text',
            dots: false,
            infinite: false,
            speed: 600,
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: true

        });
    };

    if ($('.audio').length) {
        $('.audio').acornMediaPlayer();
    }
    if ($('.js-styled').length) {
        $('.js-styled').styler();
    };
    if ($('#map').length) {
        // When the window has finished loading create our google map below
        google.maps.event.addDomListener(window, 'load', init);

        function init() {
            // Basic options for a simple Google Map
            // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
            var mapOptions = {
                // How zoomed in you want the map to start at (always required)
                zoom: 16,
                scrollwheel: false,

                // The latitude and longitude to center the map (always required)
                center: new google.maps.LatLng(55.765868, 37.604852),

                // How you would like to style the map. 
                // This is where you would paste any style found on Snazzy Maps.

                styles: [{
                    "featureType": "all",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "color": "#8e8e8e"
                    }, {
                        "weight": "0.9"
                    }, {
                        "lightness": "10"
                    }, {
                        "saturation": "0"
                    }, {
                        "visibility": "on"
                    }]
                }, {
                    "featureType": "all",
                    "elementType": "labels.text.stroke",
                    "stylers": [{
                        "color": "#ffffff"
                    }, {
                        "lightness": 8
                    }, {
                        "visibility": "on"
                    }]
                }, {
                    "featureType": "all",
                    "elementType": "labels.icon",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "administrative",
                    "elementType": "geometry.fill",
                    "stylers": [{
                        "color": "#e7e7e7"
                    }]
                }, {
                    "featureType": "administrative",
                    "elementType": "geometry.stroke",
                    "stylers": [{
                        "color": "#f8f8f8"
                    }, {
                        "lightness": 14
                    }, {
                        "weight": 1.4
                    }]
                }, {
                    "featureType": "landscape",
                    "elementType": "all",
                    "stylers": [{
                        "color": "#f8f8f8"
                    }]
                }, {
                    "featureType": "poi",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#e7e7e7"
                    }, {
                        "lightness": 5
                    }]
                }, {
                    "featureType": "road.highway",
                    "elementType": "geometry.fill",
                    "stylers": [{
                        "color": "#ffffff"
                    }]
                }, {
                    "featureType": "road.highway",
                    "elementType": "geometry.stroke",
                    "stylers": [{
                        "color": "#ffffff"
                    }, {
                        "lightness": 25
                    }, {
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "road.arterial",
                    "elementType": "geometry.fill",
                    "stylers": [{
                        "color": "#ffffff"
                    }]
                }, {
                    "featureType": "road.arterial",
                    "elementType": "geometry.stroke",
                    "stylers": [{
                        "color": "#ffffff"
                    }, {
                        "lightness": 16
                    }]
                }, {
                    "featureType": "road.local",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#ffffff"
                    }]
                }, {
                    "featureType": "transit",
                    "elementType": "all",
                    "stylers": [{
                        "color": "#1e1e1e"
                    }]
                }, {
                    "featureType": "water",
                    "elementType": "all",
                    "stylers": [{
                        "color": "#eeeeee"
                    }]
                }]
            };
            // Get the HTML DOM element that will contain your map 
            // We are using a div with id="map" seen below in the <body>
            var mapElement = document.getElementById('map');
            // Create the Google Map using our element and options defined above
            var map = new google.maps.Map(mapElement, mapOptions);
            // Let's also add a marker while we're at it
            var image = 'img/marcker.png';
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(55.765868, 37.604852),
                map: map,
                icon: image
            });
        }
    };
    /* maps */
    /* components */


    $('.star-gallery-img img').each(function(index, element) {
        var image = $(this).attr('src');
        $(this).parent('.star-gallery-img').css('background-image', 'url(' + image + ')');
        $(this).remove();
    });



});
$(function() {
    if ($('.js-player').length) {
        plyr.setup('.js-player');
    };
});
var handler = function() {

    var height_footer = $('footer').height();
    var height_header = $('header').height();
    //$('.content').css({'padding-bottom':height_footer+40, 'padding-top':height_header+40});


    var viewport_wid = viewport().width;
    var viewport_height = viewport().height;

    if (viewport_wid <= 991) {

    }
    /*pading slider*/
    var wd = parseInt($(document).width() - parseInt($('.wrapper').width())) / 2;
    $('.wrapper-weight').css('padding-left', wd);
    /*pading slider*/
    if ($('#fullpage').length) {
        if ($(window).height() > 669 && $(window).width() > 1023) {
            createFullPage();
        } else {
            if (typeof $.fn.fullpage.destroy == 'function') {
                $.fn.fullpage.destroy('all');
            }
        }
    }

    $(window).scroll(function() {
        if ($(window).scrollTop() > 60) {
            $('header').addClass("fixed");
        } else {
            $('header').removeClass("fixed");
        };
    });
    $(window).load(function() {
        if ($(window).scrollTop() > 60) {
            $('header').addClass("fixed");
        } else {
            $('header').removeClass("fixed");
        };
    });


}
$(window).bind('load', handler);
$(window).bind('resize', handler);

function createFullPage() {
    if ($('#fullpage').length) {
        $('#fullpage').fullpage({
            anchors: ['screen-1', 'screen-2', 'screen-3', 'screen-4', 'screen-5', 'screen-6', 'screen-7', 'screen-8', 'screen-9', 'screen-10', 'screen-11', 'screen-12', 'screen-13', 'screen-14', 'screen-15', 'screen-16', 'screen-17', 'screen-18'],
            scrollingSpeed: 300,
            navigation: false,
            onLeave: function(index, nextIndex, direction) {
                // first animation 
                if (index == 2 && direction == 'down') {
                    $('.section-2 .js-zoomIn').removeClass('zoomIn animated');
                    $('.section-2 .js-zoomIn-delay1').removeClass('zoomIn animated');
                    $('.section-2 .js-zoomIn-delay2').removeClass('zoomIn animated');
                    $('.section-2 .js-zoomIn-delay3').removeClass('zoomIn animated');
                    $('.section-2 .js-zoomIn-delay4').removeClass('zoomIn animated');
                } else {
                    if (index == 2 && direction == 'up') {
                        $('.section-2 .js-zoomIn').removeClass('zoomIn animated');
                        $('.section-2 .js-zoomIn-delay1').removeClass('zoomIn animated');
                        $('.section-2 .js-zoomIn-delay2').removeClass('zoomIn animated');
                        $('.section-2 .js-zoomIn-delay3').removeClass('zoomIn animated');
                        $('.section-2 .js-zoomIn-delay4').removeClass('zoomIn animated');
                        $('.section-1 .js-zoomIn').addClass('zoomIn animated');
                    } else {
                        if (index == 3 && direction == 'up') {
                            $('.section-2 .js-zoomIn').addClass('zoomIn animated');
                            $('.section-2 .js-zoomIn-delay1').addClass('zoomIn animated').css('animation-delay', '0.2s');
                            $('.section-2 .js-zoomIn-delay2').addClass('zoomIn animated').css('animation-delay', '0.4s');
                            $('.section-2 .js-zoomIn-delay3').addClass('zoomIn animated').css('animation-delay', '0.6s');
                            $('.section-2 .js-zoomIn-delay4').addClass('zoomIn animated').css('animation-delay', '0.8s');
                        } else {
                            if (index == 1 && direction == 'down') {
                                $('.section-2 .js-zoomIn').addClass('zoomIn animated');
                                $('.section-2 .js-zoomIn-delay1').addClass('zoomIn animated').css('animation-delay', '0.2s');
                                $('.section-2 .js-zoomIn-delay2').addClass('zoomIn animated').css('animation-delay', '0.4s');
                                $('.section-2 .js-zoomIn-delay3').addClass('zoomIn animated').css('animation-delay', '0.6s');
                                $('.section-2 .js-zoomIn-delay4').addClass('zoomIn animated').css('animation-delay', '0.8s');
                                $('.section-1 .js-zoomIn').removeClass('zoomIn animated');
                            };
                        };
                    };
                };
                if (index == 3 && direction == 'down') {
                    $('.section-3 .js-zoomIn').removeClass('zoomIn animated');
                    $('.section-3 .js-zoomIn-delay1').removeClass('zoomIn animated');
                    $('.section-3 .js-zoomIn-delay2').removeClass('zoomIn animated');
                    $('.section-3 .js-zoomIn-delay3').removeClass('zoomIn animated');
                    $('.section-3 .js-zoomIn-delay4').removeClass('zoomIn animated');
                } else {
                    if (index == 3 && direction == 'up') {
                        $('.section-3 .js-zoomIn').removeClass('zoomIn animated');
                        $('.section-3 .js-zoomIn-delay1').removeClass('zoomIn animated');
                        $('.section-3 .js-zoomIn-delay2').removeClass('zoomIn animated');
                        $('.section-3 .js-zoomIn-delay3').removeClass('zoomIn animated');
                        $('.section-3 .js-zoomIn-delay4').removeClass('zoomIn animated');
                    } else {
                        if (index == 4 && direction == 'up') {
                            $('.section-3 .js-zoomIn').addClass('zoomIn animated');
                            $('.section-3 .js-zoomIn-delay1').addClass('zoomIn animated').css('animation-delay', '0.2s');
                            $('.section-3 .js-zoomIn-delay2').addClass('zoomIn animated').css('animation-delay', '0.4s');
                            $('.section-3 .js-zoomIn-delay3').addClass('zoomIn animated').css('animation-delay', '0.6s');
                            $('.section-3 .js-zoomIn-delay4').addClass('zoomIn animated').css('animation-delay', '0.8s');
                        } else {
                            if (index == 2 && direction == 'down') {
                                $('.section-3 .js-zoomIn').addClass('zoomIn animated');
                                $('.section-3 .js-zoomIn-delay1').addClass('zoomIn animated').css('animation-delay', '0.2s');
                                $('.section-3 .js-zoomIn-delay2').addClass('zoomIn animated').css('animation-delay', '0.4s');
                                $('.section-3 .js-zoomIn-delay3').addClass('zoomIn animated').css('animation-delay', '0.6s');
                                $('.section-3 .js-zoomIn-delay4').addClass('zoomIn animated').css('animation-delay', '0.8s');
                            };
                        };
                    };
                };
                if (index == 4 && direction == 'down') {
                    $('.section-4 .js-zoomIn').removeClass('zoomIn animated');
                    $('.section-4 .js-zoomIn-delay1').removeClass('fadeInRight animated');
                    $('.section-4 .js-zoomIn-delay2').removeClass('fadeInRight animated');
                    $('.section-4 .js-zoomIn-delay3').removeClass('fadeInRight animated');
                    $('.section-4 .js-zoomIn-delay4').removeClass('fadeInRight animated');
                } else {
                    if (index == 4 && direction == 'up') {
                        $('.section-4 .js-zoomIn').removeClass('zoomIn animated');
                        $('.section-4 .js-zoomIn-delay1').removeClass('fadeInRight animated');
                        $('.section-4 .js-zoomIn-delay2').removeClass('fadeInRight animated');
                        $('.section-4 .js-zoomIn-delay3').removeClass('fadeInRight animated');
                        $('.section-4 .js-zoomIn-delay4').removeClass('fadeInRight animated');
                    } else {
                        if (index == 5 && direction == 'up') {
                            $('.section-4 .js-zoomIn').addClass('zoomIn animated');
                            $('.section-4 .js-zoomIn-delay1').addClass('fadeInRight animated').css('animation-delay', '0.2s');
                            $('.section-4 .js-zoomIn-delay2').addClass('fadeInRight animated').css('animation-delay', '0.4s');
                            $('.section-4 .js-zoomIn-delay3').addClass('fadeInRight animated').css('animation-delay', '0.6s');
                            $('.section-4 .js-zoomIn-delay4').addClass('fadeInRight animated').css('animation-delay', '0.8s');
                        } else {
                            if (index == 3 && direction == 'down') {
                                $('.section-4 .js-zoomIn').addClass('zoomIn animated');
                                $('.section-4 .js-zoomIn-delay1').addClass('fadeInRight animated').css('animation-delay', '0.2s');
                                $('.section-4 .js-zoomIn-delay2').addClass('fadeInRight animated').css('animation-delay', '0.4s');
                                $('.section-4 .js-zoomIn-delay3').addClass('fadeInRight animated').css('animation-delay', '0.6s');
                                $('.section-4 .js-zoomIn-delay4').addClass('fadeInRight animated').css('animation-delay', '0.8s');
                            };
                        };
                    };
                };
                if (index == 5 && direction == 'down') {
                    $('.section-5 .js-zoomIn').removeClass('zoomIn animated');
                    $('.section-5 .js-zoomIn-delay1').removeClass('zoomIn animated');
                    $('.section-5 .js-zoomIn-delay2').removeClass('fadeInLeft animated');
                    $('.section-5 .js-zoomIn-delay3').removeClass('fadeInLeft animated');
                    $('.section-5 .js-zoomIn-delay4').removeClass('fadeInLeft animated');
                    $('.section-5 .js-zoomIn-delay5').removeClass('fadeInLeft animated');
                    $('.section-5 .js-zoomIn-delay6').removeClass('fadeInLeft animated');
                    $('.section-5 .js-zoomIn-delay7').removeClass('fadeInLeft animated');
                } else {
                    if (index == 5 && direction == 'up') {
                        $('.section-5 .js-zoomIn').removeClass('zoomIn animated');
                        $('.section-5 .js-zoomIn-delay1').removeClass('zoomIn animated');
                        $('.section-5 .js-zoomIn-delay2').removeClass('fadeInLeft animated');
                        $('.section-5 .js-zoomIn-delay3').removeClass('fadeInLeft animated');
                        $('.section-5 .js-zoomIn-delay4').removeClass('fadeInLeft animated');
                        $('.section-5 .js-zoomIn-delay5').removeClass('fadeInLeft animated');
                        $('.section-5 .js-zoomIn-delay6').removeClass('fadeInLeft animated');
                        $('.section-5 .js-zoomIn-delay7').removeClass('fadeInLeft animated');
                    } else {
                        if (index == 6 && direction == 'up') {
                            $('.section-5 .js-zoomIn').addClass('zoomIn animated');
                            $('.section-5 .js-zoomIn-delay1').addClass('zoomIn animated').css('animation-delay', '0.4s');
                            $('.section-5 .js-zoomIn-delay2').addClass('fadeInLeft animated').css('animation-delay', '0.4s');
                            $('.section-5 .js-zoomIn-delay3').addClass('fadeInLeft animated').css('animation-delay', '0.6s');
                            $('.section-5 .js-zoomIn-delay4').addClass('fadeInLeft animated').css('animation-delay', '0.8s');
                            $('.section-5 .js-zoomIn-delay5').addClass('fadeInLeft animated').css('animation-delay', '1s');
                            $('.section-5 .js-zoomIn-delay6').addClass('fadeInLeft animated').css('animation-delay', '1.2s');
                            $('.section-5 .js-zoomIn-delay7').addClass('fadeInLeft animated').css('animation-delay', '1.4s');
                        } else {
                            if (index == 4 && direction == 'down') {
                                $('.section-5 .js-zoomIn').addClass('zoomIn animated');
                                $('.section-5 .js-zoomIn-delay1').addClass('zoomIn animated').css('animation-delay', '0.2s');
                                $('.section-5 .js-zoomIn-delay2').addClass('fadeInLeft animated').css('animation-delay', '0.4s');
                                $('.section-5 .js-zoomIn-delay3').addClass('fadeInLeft animated').css('animation-delay', '0.6s');
                                $('.section-5 .js-zoomIn-delay4').addClass('fadeInLeft animated').css('animation-delay', '0.8s');
                                $('.section-5 .js-zoomIn-delay5').addClass('fadeInLeft animated').css('animation-delay', '1s');
                                $('.section-5 .js-zoomIn-delay6').addClass('fadeInLeft animated').css('animation-delay', '1.2s');
                                $('.section-5 .js-zoomIn-delay7').addClass('fadeInLeft animated').css('animation-delay', '1.4s');

                            };
                        };
                    };
                };
                if (index == 6 && direction == 'down') {
                    $('.section-6 .js-zoomIn').removeClass('zoomIn animated');
                } else {
                    if (index == 6 && direction == 'up') {
                        $('.section-6 .js-zoomIn').removeClass('zoomIn animated');
                    } else {
                        if (index == 7 && direction == 'up') {
                            $('.section-6 .js-zoomIn').addClass('zoomIn animated');
                        } else {
                            if (index == 5 && direction == 'down') {
                                $('.section-6 .js-zoomIn').addClass('zoomIn animated');
                            };
                        };
                    };
                };
                if (index == 7 && direction == 'down') {
                    $('.section-7 .js-zoomIn').removeClass('zoomIn animated');
                    $('.section-7 .js-zoomIn-delay1').removeClass('zoomIn animated');
                    $('.section-7 .js-zoomIn-delay2').removeClass('zoomIn animated');
                    $('.section-7 .js-zoomIn-delay3').removeClass('zoomIn animated');
                    $('.section-7 .js-zoomIn-delay4').removeClass('zoomIn animated');
                } else {
                    if (index == 7 && direction == 'up') {
                        $('.section-7 .js-zoomIn').removeClass('zoomIn animated');
                        $('.section-7 .js-zoomIn-delay1').removeClass('zoomIn animated');
                        $('.section-7 .js-zoomIn-delay2').removeClass('zoomIn animated');
                        $('.section-7 .js-zoomIn-delay3').removeClass('zoomIn animated');
                        $('.section-7 .js-zoomIn-delay4').removeClass('zoomIn animated');
                    } else {
                        if (index == 8 && direction == 'up') {
                            $('.section-7 .js-zoomIn').addClass('zoomIn animated');
                            $('.section-7 .js-zoomIn-delay1').addClass('zoomIn animated').css('animation-delay', '0.2s');
                            $('.section-7 .js-zoomIn-delay2').addClass('zoomIn animated').css('animation-delay', '0.4s');
                            $('.section-7 .js-zoomIn-delay3').addClass('zoomIn animated').css('animation-delay', '0.6s');
                            $('.section-7 .js-zoomIn-delay4').addClass('zoomIn animated').css('animation-delay', '0.8s');
                        } else {
                            if (index == 6 && direction == 'down') {
                                $('.section-7 .js-zoomIn').addClass('zoomIn animated');
                                $('.section-7 .js-zoomIn-delay1').addClass('zoomIn animated').css('animation-delay', '0.2s');
                                $('.section-7 .js-zoomIn-delay2').addClass('zoomIn animated').css('animation-delay', '0.4s');
                                $('.section-7 .js-zoomIn-delay3').addClass('zoomIn animated').css('animation-delay', '0.6s');
                                $('.section-7 .js-zoomIn-delay4').addClass('zoomIn animated').css('animation-delay', '0.8s');
                            };
                        };
                    };
                };
                if (index == 8 && direction == 'down') {
                    $('.section-8 .js-zoomIn').removeClass('zoomIn animated');
                    $('.section-8 .js-step').removeClass('step-animated');
                } else {
                    if (index == 8 && direction == 'up') {
                        $('.section-8 .js-zoomIn').removeClass('zoomIn animated');
                        $('.section-8 .js-step').removeClass('step-animated');
                    } else {
                        if (index == 9 && direction == 'up') {
                            $('.section-8 .js-zoomIn').addClass('zoomIn animated');
                            $('.section-8 .js-step').addClass('step-animated');
                        } else {
                            if (index == 7 && direction == 'down') {
                                $('.section-8 .js-zoomIn').addClass('zoomIn animated');
                                $('.section-8 .js-step').addClass('step-animated');
                            };
                        };
                    };
                };
                if (index == 9 && direction == 'down') {
                    $('.section-9 .js-zoomIn').removeClass('zoomIn animated');
                    $('.section-9 .js-zoomIn-delay1').removeClass('zoomIn animated');
                    $('.section-9 .js-zoomIn-delay2').removeClass('zoomIn animated');
                    $('.section-9 .js-zoomIn-delay3').removeClass('zoomIn animated');
                    $('.section-9 .js-zoomIn-delay4').removeClass('zoomIn animated');
                    $('.section-9 .js-zoomIn-delay5').removeClass('zoomIn animated');
                } else {
                    if (index == 9 && direction == 'up') {
                        $('.section-9 .js-zoomIn').removeClass('zoomIn animated');
                        $('.section-9 .js-zoomIn-delay1').removeClass('zoomIn animated');
                        $('.section-9 .js-zoomIn-delay2').removeClass('zoomIn animated');
                        $('.section-9 .js-zoomIn-delay3').removeClass('zoomIn animated');
                        $('.section-9 .js-zoomIn-delay4').removeClass('zoomIn animated');
                        $('.section-9 .js-zoomIn-delay5').removeClass('zoomIn animated');
                    } else {
                        if (index == 10 && direction == 'up') {
                            $('.section-9 .js-zoomIn').addClass('zoomIn animated');
                            $('.section-9 .js-zoomIn-delay1').addClass('zoomIn animated').css('animation-delay', '0.2s');
                            $('.section-9 .js-zoomIn-delay2').addClass('zoomIn animated').css('animation-delay', '0.4s');
                            $('.section-9 .js-zoomIn-delay3').addClass('zoomIn animated').css('animation-delay', '0.6s');
                            $('.section-9 .js-zoomIn-delay4').addClass('zoomIn animated').css('animation-delay', '0.8s');
                            $('.section-9 .js-zoomIn-delay5').addClass('zoomIn animated').css('animation-delay', '1s');
                        } else {
                            if (index == 8 && direction == 'down') {
                                $('.section-9 .js-zoomIn').addClass('zoomIn animated');
                                $('.section-9 .js-zoomIn-delay1').addClass('zoomIn animated').css('animation-delay', '0.2s');
                                $('.section-9 .js-zoomIn-delay2').addClass('zoomIn animated').css('animation-delay', '0.4s');
                                $('.section-9 .js-zoomIn-delay3').addClass('zoomIn animated').css('animation-delay', '0.6s');
                                $('.section-9 .js-zoomIn-delay4').addClass('zoomIn animated').css('animation-delay', '0.8s');
                                $('.section-9 .js-zoomIn-delay5').addClass('zoomIn animated').css('animation-delay', '1s');
                            };
                        };
                    };
                };
                if (index == 10 && direction == 'down') {
                    $('.section-10 .js-zoomIn').removeClass('zoomIn animated');
                    $('.section-10 .js-zoomIn-delay1').removeClass('zoomIn animated');
                    $('.section-10 .js-zoomIn-delay2').removeClass('fadeInLeft animated');
                    $('.section-10 .js-zoomIn-delay3').removeClass('fadeInLeft animated');
                    $('.section-10 .js-zoomIn-delay4').removeClass('fadeInLeft animated');
                    $('.section-10 .js-zoomIn-delay5').removeClass('fadeInLeft animated');
                    $('.section-10 .js-zoomIn-delay6').removeClass('fadeInLeft animated');
                    $('.section-10 .js-zoomIn-delay7').removeClass('fadeInLeft animated');
                    $('.section-10 .js-zoomIn-delay8').removeClass('fadeInLeft animated');
                    $('.section-10 .js-zoomIn-delay9').removeClass('fadeInLeft animated');
                    $('.section-10 .js-zoomIn-delay10').removeClass('fadeInLeft animated');
                    $('.section-10 .js-zoomIn-delay11').removeClass('fadeInLeft animated');
                } else {
                    if (index == 10 && direction == 'up') {
                        $('.section-10 .js-zoomIn').removeClass('zoomIn animated');
                        $('.section-10 .js-zoomIn-delay1').removeClass('zoomIn animated');
                        $('.section-10 .js-zoomIn-delay2').removeClass('fadeInLeft animated');
                        $('.section-10 .js-zoomIn-delay3').removeClass('fadeInLeft animated');
                        $('.section-10 .js-zoomIn-delay4').removeClass('fadeInLeft animated');
                        $('.section-10 .js-zoomIn-delay5').removeClass('fadeInLeft animated');
                        $('.section-10 .js-zoomIn-delay6').removeClass('fadeInLeft animated');
                        $('.section-10 .js-zoomIn-delay7').removeClass('fadeInLeft animated');
                        $('.section-10 .js-zoomIn-delay8').removeClass('fadeInLeft animated');
                        $('.section-10 .js-zoomIn-delay9').removeClass('fadeInLeft animated');
                        $('.section-10 .js-zoomIn-delay10').removeClass('fadeInLeft animated');
                        $('.section-10 .js-zoomIn-delay11').removeClass('fadeInLeft animated');
                    } else {
                        if (index == 11 && direction == 'up') {
                            $('.section-10 .js-zoomIn').addClass('zoomIn animated');
                            $('.section-10 .js-zoomIn-delay1').addClass('zoomIn animated').css('animation-delay', '0.4s');
                            $('.section-10 .js-zoomIn-delay2').addClass('fadeInLeft animated').css('animation-delay', '0.4s');
                            $('.section-10 .js-zoomIn-delay3').addClass('fadeInLeft animated').css('animation-delay', '0.6s');
                            $('.section-10 .js-zoomIn-delay4').addClass('fadeInLeft animated').css('animation-delay', '0.8s');
                            $('.section-10 .js-zoomIn-delay5').addClass('fadeInLeft animated').css('animation-delay', '1s');
                            $('.section-10 .js-zoomIn-delay6').addClass('fadeInLeft animated').css('animation-delay', '1.2s');
                            $('.section-10 .js-zoomIn-delay7').addClass('fadeInLeft animated').css('animation-delay', '1.4s');
                            $('.section-10 .js-zoomIn-delay8').addClass('fadeInLeft animated').css('animation-delay', '1.6s');
                            $('.section-10 .js-zoomIn-delay9').addClass('fadeInLeft animated').css('animation-delay', '1.8s');
                            $('.section-10 .js-zoomIn-delay10').addClass('fadeInLeft animated').css('animation-delay', '2s');
                            $('.section-10 .js-zoomIn-delay11').addClass('fadeInLeft animated').css('animation-delay', '2.2s');
                        } else {
                            if (index == 9 && direction == 'down') {
                                $('.section-10 .js-zoomIn').addClass('zoomIn animated');
                                $('.section-10 .js-zoomIn-delay1').addClass('zoomIn animated').css('animation-delay', '0.2s');
                                $('.section-10 .js-zoomIn-delay2').addClass('fadeInLeft animated').css('animation-delay', '0.4s');
                                $('.section-10 .js-zoomIn-delay3').addClass('fadeInLeft animated').css('animation-delay', '0.6s');
                                $('.section-10 .js-zoomIn-delay4').addClass('fadeInLeft animated').css('animation-delay', '0.8s');
                                $('.section-10 .js-zoomIn-delay5').addClass('fadeInLeft animated').css('animation-delay', '1s');
                                $('.section-10 .js-zoomIn-delay6').addClass('fadeInLeft animated').css('animation-delay', '1.2s');
                                $('.section-10 .js-zoomIn-delay7').addClass('fadeInLeft animated').css('animation-delay', '1.4s');
                                $('.section-10 .js-zoomIn-delay8').addClass('fadeInLeft animated').css('animation-delay', '1.6s');
                                $('.section-10 .js-zoomIn-delay9').addClass('fadeInLeft animated').css('animation-delay', '1.8s');
                                $('.section-10 .js-zoomIn-delay10').addClass('fadeInLeft animated').css('animation-delay', '2s');
                                $('.section-10 .js-zoomIn-delay11').addClass('fadeInLeft animated').css('animation-delay', '2.2s');

                            };
                        };
                    };
                };
                if (index == 11 && direction == 'down') {
                    $('.section-11 .js-zoomIn').removeClass('zoomIn animated');
                    $('.section-11 .js-fadeInLeft-delay1').removeClass('fadeInLeft animated');
                    $('.section-11 .js-fadeInLeft-delay2').removeClass('fadeInLeft animated');
                    $('.section-11 .js-fadeInLeft-delay3').removeClass('fadeInLeft animated');
                    $('.section-11 .js-zoomIn-delay4').removeClass('zoomIn animated');

                } else {
                    if (index == 11 && direction == 'up') {
                        $('.section-11 .js-zoomIn').removeClass('zoomIn animated');
                        $('.section-11 .js-fadeInLeft-delay1').removeClass('fadeInLeft animated');
                        $('.section-11 .js-fadeInLeft-delay2').removeClass('fadeInLeft animated');
                        $('.section-11 .js-fadeInLeft-delay3').removeClass('fadeInLeft animated');
                        $('.section-11 .js-zoomIn-delay4').removeClass('zoomIn animated');
                    } else {
                        if (index == 12 && direction == 'up') {
                            $('.section-11 .js-zoomIn').addClass('zoomIn animated');
                            $('.section-11 .js-fadeInLeft-delay1').addClass('fadeInLeft animated').css('animation-delay', '0.2s');
                            $('.section-11 .js-fadeInLeft-delay2').addClass('fadeInLeft animated').css('animation-delay', '0.4s');
                            $('.section-11 .js-fadeInLeft-delay3').addClass('fadeInLeft animated').css('animation-delay', '0.6s');
                            $('.section-11 .js-zoomIn-delay4').addClass('zoomIn animated').css('animation-delay', '0.8s');
                        } else {
                            if (index == 10 && direction == 'down') {
                                $('.section-11 .js-zoomIn').addClass('zoomIn animated');
                                $('.section-11 .js-fadeInLeft-delay1').addClass('fadeInLeft animated').css('animation-delay', '0.2s');
                                $('.section-11 .js-fadeInLeft-delay2').addClass('fadeInLeft animated').css('animation-delay', '0.4s');
                                $('.section-11 .js-fadeInLeft-delay3').addClass('fadeInLeft animated').css('animation-delay', '0.6s');
                                $('.section-11 .js-zoomIn-delay4').addClass('zoomIn animated').css('animation-delay', '0.8s');
                            };
                        };
                    };
                };
                if (index == 12 && direction == 'down') {
                    $('.section-12 .js-zoomIn').removeClass('zoomIn animated');
                    $('.section-12 .js-scale').removeClass('bounceIn animated');

                } else {
                    if (index == 12 && direction == 'up') {
                        $('.section-12 .js-zoomIn').removeClass('zoomIn animated');
                        $('.section-12 .js-scale').removeClass('bounceIn animated');
                    } else {
                        if (index == 13 && direction == 'up') {
                            $('.section-12 .js-zoomIn').addClass('zoomIn animated');
                            $('.section-12 .js-scale').addClass('bounceIn animated');
                        } else {
                            if (index == 11 && direction == 'down') {
                                $('.section-12 .js-zoomIn').addClass('zoomIn animated');
                                $('.section-12 .js-scale').addClass('bounceIn animated');
                            };
                        };
                    };
                };
                if (index == 13 && direction == 'down') {
                    $('.section-13 .js-zoomIn').removeClass('zoomIn animated');
                    $('.section-13 .js-zoomIn-delay1').removeClass('fadeInLeft animated');
                    $('.section-13 .js-zoomIn-delay2').removeClass('fadeInLeft animated');
                    $('.section-13 .js-zoomIn-delay3').removeClass('fadeInLeft animated');
                    $('.section-13 .js-zoomIn-delay4').removeClass('fadeInLeft animated');
                    $('.section-13 .js-zoomIn-delay5').removeClass('fadeInLeft animated');
                } else {
                    if (index == 13 && direction == 'up') {
                        $('.section-13 .js-zoomIn').removeClass('zoomIn animated');
                        $('.section-13 .js-zoomIn-delay1').removeClass('fadeInLeft animated');
                        $('.section-13 .js-zoomIn-delay2').removeClass('fadeInLeft animated');
                        $('.section-13 .js-zoomIn-delay3').removeClass('fadeInLeft animated');
                        $('.section-13 .js-zoomIn-delay4').removeClass('fadeInLeft animated');
                        $('.section-13 .js-zoomIn-delay5').removeClass('fadeInLeft animated');
                    } else {
                        if (index == 14 && direction == 'up') {
                            $('.section-13 .js-zoomIn').addClass('zoomIn animated');
                            $('.section-13 .js-zoomIn-delay1').addClass('fadeInLeft animated').css('animation-delay', '0.2s');
                            $('.section-13 .js-zoomIn-delay2').addClass('fadeInLeft animated').css('animation-delay', '0.4s');
                            $('.section-13 .js-zoomIn-delay3').addClass('fadeInLeft animated').css('animation-delay', '0.6s');
                            $('.section-13 .js-zoomIn-delay4').addClass('fadeInLeft animated').css('animation-delay', '0.8s');
                            $('.section-13 .js-zoomIn-delay5').addClass('fadeInLeft animated').css('animation-delay', '1s');
                        } else {
                            if (index == 12 && direction == 'down') {
                                $('.section-13 .js-zoomIn').addClass('zoomIn animated');
                                $('.section-13 .js-zoomIn-delay1').addClass('fadeInLeft animated').css('animation-delay', '0.2s');
                                $('.section-13 .js-zoomIn-delay2').addClass('fadeInLeft animated').css('animation-delay', '0.4s');
                                $('.section-13 .js-zoomIn-delay3').addClass('fadeInLeft animated').css('animation-delay', '0.6s');
                                $('.section-13 .js-zoomIn-delay4').addClass('fadeInLeft animated').css('animation-delay', '0.8s');
                                $('.section-13 .js-zoomIn-delay5').addClass('fadeInLeft animated').css('animation-delay', '1s');
                            };
                        };
                    };
                };
                if (index == 14 && direction == 'down') {
                    $('.section-14 .js-zoomIn').removeClass('zoomIn animated');
                    $('.section-14 .js-zoomIn-delay1').removeClass('zoomIn animated');
                    $('.section-14 .js-zoomIn-delay2').removeClass('zoomIn animated');
                    $('.section-14 .js-zoomIn-delay3').removeClass('zoomIn animated');
                    $('.section-14 .js-fadeInUp').removeClass('fadeInUp animated');
                } else {
                    if (index == 14 && direction == 'up') {
                        $('.section-14 .js-zoomIn').removeClass('zoomIn animated');
                        $('.section-14 .js-zoomIn-delay1').removeClass('zoomIn animated');
                        $('.section-14 .js-zoomIn-delay2').removeClass('zoomIn animated');
                        $('.section-14 .js-zoomIn-delay3').removeClass('zoomIn animated');
                        $('.section-14 .js-fadeInUp').removeClass('fadeInUp animated');
                    } else {
                        if (index == 15 && direction == 'up') {
                            $('.section-14 .js-zoomIn').addClass('zoomIn animated');
                            $('.section-14 .js-zoomIn-delay1').addClass('zoomIn animated').css('animation-delay', '0.2s');
                            $('.section-14 .js-zoomIn-delay2').addClass('zoomIn animated').css('animation-delay', '0.3s');
                            $('.section-14 .js-zoomIn-delay3').addClass('zoomIn animated').css('animation-delay', '0.4s');
                            $('.section-14 .js-fadeInUp').addClass('fadeInUp animated').css('animation-delay', '0.6s');
                        } else {
                            if (index == 13 && direction == 'down') {
                                $('.section-14 .js-zoomIn').addClass('zoomIn animated');
                                $('.section-14 .js-zoomIn-delay1').addClass('zoomIn animated').css('animation-delay', '0.2s');
                                $('.section-14 .js-zoomIn-delay2').addClass('zoomIn animated').css('animation-delay', '0.3s');
                                $('.section-14 .js-zoomIn-delay3').addClass('zoomIn animated').css('animation-delay', '0.4s');
                                $('.section-14 .js-fadeInUp').addClass('fadeInUp animated').css('animation-delay', '0.6s');

                            };
                        };
                    };
                };
                if (index == 15 && direction == 'down') {
                    $('.section-15 .js-zoomIn').removeClass('zoomIn animated');
                    $('.section-15 .js-zoomIn-delay1').removeClass('fadeInRight animated');
                    $('.section-15 .js-zoomIn-delay2').removeClass('fadeInRight animated');
                    $('.section-15 .js-zoomIn-delay3').removeClass('fadeInRight animated');
                    $('.section-15 .js-zoomIn-delay4').removeClass('fadeInRight animated');

                } else {
                    if (index == 15 && direction == 'up') {
                        $('.section-15 .js-zoomIn').removeClass('zoomIn animated');
                        $('.section-15 .js-zoomIn-delay1').removeClass('fadeInRight animated');
                        $('.section-15 .js-zoomIn-delay2').removeClass('fadeInRight animated');
                        $('.section-15 .js-zoomIn-delay3').removeClass('fadeInRight animated');
                        $('.section-15 .js-zoomIn-delay4').removeClass('fadeInRight animated');
                    } else {
                        if (index == 16 && direction == 'up') {
                            $('.section-15 .js-zoomIn').addClass('zoomIn animated');
                            $('.section-15 .js-zoomIn-delay1').addClass('fadeInRight animated').css('animation-delay', '0.2s');
                            $('.section-15 .js-zoomIn-delay2').addClass('fadeInRight animated').css('animation-delay', '0.4s');
                            $('.section-15 .js-zoomIn-delay3').addClass('fadeInRight animated').css('animation-delay', '0.6s');
                            $('.section-15 .js-zoomIn-delay4').addClass('fadeInRight animated').css('animation-delay', '0.8s');
                        } else {
                            if (index == 14 && direction == 'down') {
                                $('.section-15 .js-zoomIn').addClass('zoomIn animated');
                                $('.section-15 .js-zoomIn-delay1').addClass('fadeInRight animated').css('animation-delay', '0.2s');
                                $('.section-15 .js-zoomIn-delay2').addClass('fadeInRight animated').css('animation-delay', '0.4s');
                                $('.section-15 .js-zoomIn-delay3').addClass('fadeInRight animated').css('animation-delay', '0.6s');
                                $('.section-15 .js-zoomIn-delay4').addClass('fadeInRight animated').css('animation-delay', '0.8s');
                            };
                        };
                    };
                };
                if (index == 16 && direction == 'down') {
                    $('.section-16 .js-zoomIn').removeClass('zoomIn animated');
                    $('.section-16 .js-zoomIn-delay1').removeClass('zoomIn animated');
                    $('.section-16 .js-zoomIn-delay2').removeClass('zoomIn animated');
                    $('.section-16 .js-zoomIn-delay3').removeClass('zoomIn animated');
                    $('.section-16 .js-zoomIn-delay4').removeClass('zoomIn animated');

                } else {
                    if (index == 16 && direction == 'up') {
                        $('.section-16 .js-zoomIn').removeClass('zoomIn animated');
                        $('.section-16 .js-zoomIn-delay1').removeClass('zoomIn animated');
                        $('.section-16 .js-zoomIn-delay2').removeClass('zoomIn animated');
                        $('.section-16 .js-zoomIn-delay3').removeClass('zoomIn animated');
                        $('.section-16 .js-zoomIn-delay4').removeClass('zoomIn animated');
                    } else {
                        if (index == 17 && direction == 'up') {
                            $('.section-16 .js-zoomIn').addClass('zoomIn animated');
                            $('.section-16 .js-zoomIn-delay1').addClass('zoomIn animated').css('animation-delay', '0.2s');
                            $('.section-16 .js-zoomIn-delay2').addClass('zoomIn animated').css('animation-delay', '0.4s');
                            $('.section-16 .js-zoomIn-delay3').addClass('zoomIn animated').css('animation-delay', '0.6s');
                            $('.section-16 .js-zoomIn-delay4').addClass('zoomIn animated').css('animation-delay', '0.8s');
                        } else {
                            if (index == 15 && direction == 'down') {
                                $('.section-16 .js-zoomIn').addClass('zoomIn animated');
                                $('.section-16 .js-zoomIn-delay1').addClass('zoomIn animated').css('animation-delay', '0.2s');
                                $('.section-16 .js-zoomIn-delay2').addClass('zoomIn animated').css('animation-delay', '0.4s');
                                $('.section-16 .js-zoomIn-delay3').addClass('zoomIn animated').css('animation-delay', '0.6s');
                                $('.section-16 .js-zoomIn-delay4').addClass('zoomIn animated').css('animation-delay', '0.8s');
                            };
                        };
                    };
                };
                if (index == 17 && direction == 'down') {
                    $('.section-17 .js-zoomIn').removeClass('zoomIn animated');
                    $('.section-17 .js-zoomIn-delay1').removeClass('zoomIn animated');
                    $('.section-17 .js-zoomIn-delay2').removeClass('zoomIn animated');
                    $('.section-17 .js-zoomIn-delay3').removeClass('zoomIn animated');
                    $('.section-17 .js-zoomIn-delay4').removeClass('zoomIn animated');
                    $('.section-17 .js-zoomIn-delay5').removeClass('zoomIn animated');
                } else {
                    if (index == 17 && direction == 'up') {
                        $('.section-17 .js-zoomIn').removeClass('zoomIn animated');
                        $('.section-17 .js-zoomIn-delay1').removeClass('zoomIn animated');
                        $('.section-17 .js-zoomIn-delay2').removeClass('zoomIn animated');
                        $('.section-17 .js-zoomIn-delay3').removeClass('zoomIn animated');
                        $('.section-17 .js-zoomIn-delay4').removeClass('zoomIn animated');
                        $('.section-17 .js-zoomIn-delay5').removeClass('zoomIn animated');
                    } else {
                        if (index == 18 && direction == 'up') {
                            $('.section-17 .js-zoomIn').addClass('zoomIn animated');
                            $('.section-17 .js-zoomIn-delay1').addClass('zoomIn animated').css('animation-delay', '0.2s');
                            $('.section-17 .js-zoomIn-delay2').addClass('zoomIn animated').css('animation-delay', '0.4s');
                            $('.section-17 .js-zoomIn-delay3').addClass('zoomIn animated').css('animation-delay', '0.6s');
                            $('.section-17 .js-zoomIn-delay4').addClass('zoomIn animated').css('animation-delay', '0.8s');
                            $('.section-17 .js-zoomIn-delay5').addClass('zoomIn animated').css('animation-delay', '1s');
                        } else {
                            if (index == 16 && direction == 'down') {
                                $('.section-17 .js-zoomIn').addClass('zoomIn animated');
                                $('.section-17 .js-zoomIn-delay1').addClass('zoomIn animated').css('animation-delay', '0.2s');
                                $('.section-17 .js-zoomIn-delay2').addClass('zoomIn animated').css('animation-delay', '0.4s');
                                $('.section-17 .js-zoomIn-delay3').addClass('zoomIn animated').css('animation-delay', '0.6s');
                                $('.section-17 .js-zoomIn-delay4').addClass('zoomIn animated').css('animation-delay', '0.8s');
                                $('.section-17 .js-zoomIn-delay5').addClass('zoomIn animated').css('animation-delay', '1s');
                            };
                        };
                    };
                };
                if (index == 18 && direction == 'down') {
                    $('.section-18 .js-zoomIn').removeClass('zoomIn animated');
                    $('.section-18 .js-zoomIn-delay1').removeClass('fadeInRight animated');
                    $('.section-18 .js-zoomIn-delay2').removeClass('fadeInRight animated');
                    $('.section-18 .js-zoomIn-delay3').removeClass('fadeInRight animated');
                    $('.section-18 .js-zoomIn-delay4').removeClass('fadeInRight animated');
                    $('.section-18 .js-zoomIn-delay5').removeClass('fadeInRight animated');
                } else {
                    if (index == 18 && direction == 'up') {
                        $('.section-18 .js-zoomIn').removeClass('zoomIn animated');
                        $('.section-18 .js-zoomIn-delay1').removeClass('fadeInRight animated');
                        $('.section-18 .js-zoomIn-delay2').removeClass('fadeInRight animated');
                        $('.section-18 .js-zoomIn-delay3').removeClass('fadeInRight animated');
                        $('.section-18 .js-zoomIn-delay4').removeClass('fadeInRight animated');
                    } else {
                        if (index == 17 && direction == 'down') {
                            $('.section-18 .js-zoomIn').addClass('zoomIn animated');
                            $('.section-18 .js-zoomIn-delay1').addClass('fadeInRight animated').css('animation-delay', '0.2s');
                            $('.section-18 .js-zoomIn-delay2').addClass('fadeInRight animated').css('animation-delay', '0.4s');
                            $('.section-18 .js-zoomIn-delay3').addClass('fadeInRight animated').css('animation-delay', '0.6s');
                            $('.section-18 .js-zoomIn-delay4').addClass('fadeInRight animated').css('animation-delay', '0.8s');
                        };
                    };
                };
            }
        });
    }
}
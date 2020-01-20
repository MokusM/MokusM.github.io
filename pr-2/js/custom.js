$(window).on('load', function () {
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('body').addClass('ios');
	} else{
		$('body').addClass('web');
	};
	$('body').removeClass('loaded').addClass('load');
	
	setTimeout(function() {
		//$('body').addClass('load');                     
	}, 500);
	if($('.wow').length) {
		wow = new WOW({
			offset: 50
		})
		wow.init(); 
	}		
	$(".ui-slider-handle").focus(function() {		
		$('.ui-slider-range-min').addClass("active");
	});
	$(".ui-slider-handle").focusout(function() {		
		$('.ui-slider-range-min').removeClass("active");
	});
	
	$(".slider-img .slick-next").mouseover(function() {
		$(".custom-cursor").addClass("custom-cursor_link");
	});
	$(".slider-img .slick-next").mouseout(function() {
		$(".custom-cursor").removeClass("custom-cursor_link");
	});  
	$(".slider-img .slick-prev").mouseover(function() {
		$(".custom-cursor").addClass("custom-cursor_link-left").addClass("custom-cursor_link");
	});
	$(".slider-img .slick-prev").mouseout(function() {
		$(".custom-cursor").removeClass("custom-cursor_link-left").removeClass("custom-cursor_link");
	});  
	$(".js-more-link").mouseover(function() {
		if($(this).hasClass('active')){
			$(".custom-cursor").addClass("custom-cursor_link-top");
		}
		$(".custom-cursor").addClass("custom-cursor_link-bottom").addClass("custom-cursor_link");
	});
	
	$(".js-more-link").mouseout(function() {
		$(".custom-cursor").removeClass("custom-cursor_link-bottom");
		$(".custom-cursor").removeClass("custom-cursor_link-top").removeClass("custom-cursor_link");
	});

	$(".servises-slider-nav__link").mouseover(function() {
		//$(".custom-cursor").addClass("custom-cursor_link-top");
		if($(this).parents('.servises-slider-nav').hasClass('item-1')){
			$(".custom-cursor").addClass("custom-cursor_link-top");
		}
		if($(this).parents('.servises-slider-nav').hasClass('item-4')){
			$(".custom-cursor").removeClass("custom-cursor_link-top");			
			$(".custom-cursor").addClass("custom-cursor_link-bottom");
		}
		if($(this).parents('.servises-slider-nav').hasClass('item-2')){
			$(".custom-cursor").removeClass("custom-cursor_link-top");			
			$(".custom-cursor").addClass("custom-cursor_link-bottom");
		}	
	});
	$(".servises-slider-nav__link").mouseover(function() {
		if($(this).parents('.servises-slider-nav').hasClass('item-2')){
			$(".custom-cursor").addClass("custom-cursor_link-top");
		}
	});
	$(".servises-slider-nav__item:nth-child(1) .servises-slider-nav__link").mouseover(function() {
		$(".custom-cursor").removeClass("custom-cursor_link-top");
		if($(this).parents('.servises-slider-nav').hasClass('item-2')){
			$(".custom-cursor").addClass("custom-cursor_link-bottom");
		}
	});
	$(".servises-slider-nav__link").mouseover(function() {
		if($(this).parents('.servises-slider-nav').hasClass('item-3')){
			$(".custom-cursor").addClass("custom-cursor_link-bottom");
		}
	});
	$(".servises-slider-nav__item:nth-child(4) .servises-slider-nav__link").mouseover(function() {
		$(".custom-cursor").removeClass("custom-cursor_link-bottom");
		if($(this).parents('.servises-slider-nav').hasClass('item-3')){
			$(".custom-cursor").addClass("custom-cursor_link-top");
		}
	});

	$(".servises-slider-nav__link").mouseout(function() {
		$(".custom-cursor").removeClass("custom-cursor_link-bottom");
		$(".custom-cursor").removeClass("custom-cursor_link-top");
	});


	$('.ui-slider-handle, .about-content .slick-arrow').hover(function(){
		$(".custom-cursor").addClass('disabled');
    }, function(){
    	$(".custom-cursor").removeClass('disabled');
    });
	
    
});

/* viewport width */
function viewport(){
	var e = window, 
		a = 'inner';
	if ( !( 'innerWidth' in window ) )
	{
		a = 'client';
		e = document.documentElement || document.body;
	}
	return { width : e[ a+'Width' ] , height : e[ a+'Height' ] }
};
/* viewport width */
$(function(){
	/*loaded*/
	$('a.js-anim-page').click(function(e) {
        e.preventDefault();
        var url_link = $(this).attr('href');
        $('body').addClass('close-page');
        setTimeout(function() {
            location.href = url_link;
        }, 600);
        setTimeout(function() {
            $('body').removeClass('close-page');
        }, 700);
    });
    /*loaded*/
    if($('#pBar').length) {
		window.onscroll = function() {myFunction()};		
		function myFunction() {
			var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
			var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
			var scrolled = (winScroll / height) * 100;
			document.getElementById("pBar").style.width = scrolled + "%";
			
		}
	} 
	/* placeholder*/	   
	$('input, textarea').each(function(){
 		var placeholder = $(this).attr('placeholder');
 		$(this).focus(function(){ $(this).attr('placeholder', '');});
 		$(this).focusout(function(){			 
 			$(this).attr('placeholder', placeholder);  			
 		});
 	});
	/* placeholder*/
	/*button open main nav begin*/
	$(".js-button-nav" ).toggle(function() {
        $(this).addClass('active'); 
		$('.main-nav').addClass('show-nav');
		$('header').addClass('show-nav');
        if ($(document).height() > $(window).height()) {
	     	var scrollTop = ($('html').scrollTop()) ? $('html').scrollTop() : $('body').scrollTop();
	     	$('html').addClass('noscroll').css('top',-scrollTop);         
		}
    }, function() {
        $('.main-nav').addClass('close-nav');
        $('header').removeClass('show-nav');  
        $(this).removeClass('active');        
        var scrollTop = parseInt($('html').css('top'));
		$('html').removeClass('noscroll');
		$('html,body').scrollTop(-scrollTop);  
		setTimeout(function() {
			$('.main-nav').removeClass('close-nav');		     
	        $('.main-nav').removeClass('show-nav');	                         
		}, 800);
    });
	/*button open main nav end*/
	/*current time*/
	if($('.js-time').length) {
		function updateClock() {
			var time;
		    var now = new Date();
		    var	hour = now.getHours();
		    var	minute = now.getMinutes();
	    	if (hour < 10) {
	    	    hour =  "0" + hour;
	    	};
	    	if (minute < 10) {
	    	    minute = "0" + minute;
	    	};
	        time = hour + ':' + minute;
		    $('.js-time').text(time)
		    setTimeout(updateClock, 1000);
		}
		updateClock();
	}
	/*current time*/
	/*drag ticket*/
	if($('#draggable').length) {
		$("#draggable").draggable({
			revert: true,
			axis: "y"
		});	  
		$("#droppable").droppable({
			activeClass: "active",
			drop: function (event, ui) {
				$('.main-screen-hold').addClass('active'); 
				$('.main-screen__ticket').addClass('show');
				$('.main-screen__ticket-hidden').addClass('hide');  
				setTimeout(function() {
					$('.ticket-page').addClass('show');                      
				}, 1400);
			}
		});
	}
	/*drag ticket*/
	/*contacts background*/	
	if($('.fullscreen-bg').length) {
		$('.fullscreen-bg').each(function (i, elem) {
			var lFollowX = 0,
				x = 0;
			function moveBackground() {
				x += (lFollowX - x);
				translate = 'translate(' + x + 'px, 0px)';
				$(elem).css({
					'-webit-transform': translate,
					'-moz-transform': translate,
					'transform': translate
				});
				window.requestAnimationFrame(moveBackground);
			}
			$(window).on('mousemove click', function (e) {
				var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
				lFollowX = (30 * lMouseX) / 100;
			});
			moveBackground();
		});
	}
	/*contacts background*/
	/*graphic-list*/	
	$('.js-graphic-list li a').hover(function(){
		$('.station-desc li').removeClass('active')
		var id = $(this).attr('data-href');
		var point = $(this).attr('data-point');
		$(id).addClass('active');
		$('.'+point).addClass('hover');
    }, function(){
    	$('.station-desc li').removeClass('active');
    	$('#station-0').addClass('active');
        $('svg circle').removeClass('hover');
    });
	/*graphic-list*/
	/*more text*/
	$(".js-more-link").toggle(function() {
		$(this).addClass('active');
	    $(this).next('.hidden-text').slideDown();
	     $(this).text("– Close");
	    }, function() {
	    $(this).removeClass('active');
	    $(this).next('.hidden-text').slideUp();	   
	    $(this).text("+ More info");
	});
	/*more text*/
	/*img bg*/
	$(".js-bg").each(function () {
		var url = $(this).find('img').attr('src');
		$(this).css('background-image', 'url(' + url + ')');
		$(this).find('img').remove();
	});	
	$('.js-hover-big').hover(function(){
      	$('.js-hover-big, .box-additional').addClass('hover');
    }, function(){
    	$('.js-hover-big, .box-additional').removeClass('hover');
    });
    /*img bg*/	
    /*	servises slider*/
	$('.js-servises-slider-nav a').click(function(){
		var itemClass = $(this).attr('data-class');
		var itemId = $(this).attr('href');
		$(this).parent().siblings().removeClass('active');
		$(this).parents('.servises-slider-nav')
			.removeClass('item-1')
			.removeClass('item-2')
			.removeClass('item-3')
			.removeClass('item-4');
		$(this).parents('.servises-slider-nav').addClass(itemClass);
		$(this).parent().addClass('active');
		$('.servises-slider-img__item').addClass('hide-tab');
		$(itemId).removeClass('hide-tab');
		return false;
	});
	/*	servises slider*/
	/*scroll */
	$('.js-right-button').click(function() {
	  $('#graphic-scroll').animate({
	    scrollLeft: "+=70px"
	  }, "slow");
	  return false;
	});

	$('.js-left-button').click(function() {
	  $('#graphic-scroll').animate({
	    scrollLeft: "-=70px"
	  }, "slow");
	  return false;
	});
	/* components begin*/
	if($('.js-slick-slider').length) {
		$('.js-slick-slider').slick({
			dots: false,
			infinite: true,
			fade: false
		});
	};
	if($('.js-additional-slider').length) {
		$('.js-additional-slider').slick({
			dots: false,
			infinite: true,
			fade: true,
			speed: 0,
			prevArrow: '.js-slick-prev',
			nextArrow: '.js-slick-next',
		});
	};
	if($('.js-additional-slider-mob').length) {
		$('.js-additional-slider-mob').slick({
			dots: false,
			infinite: true,
			fade: true,
			speed: 0,
			prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button"><i class="icon-arr-left"></i></button>',
			nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button"><i class="icon-arr-right"></i></button>'
		});
	};

	
	
	if($('.js-slider-list').length) {
		$('.js-slider-list').slick({
			dots: false,
			infinite: true,
			arrows: true,
			slidesToShow: 3,
			slidesToScroll: 1,
			centerMode: true,
			variableWidth: true,
			speed: 500,
			prevArrow: '.js-slick-prev-project',
			nextArrow: '.js-slick-next-project',
		});
		$('.js-slider-list').on('beforeChange', function(event, slick, currentSlide, nextSlide){
		 	$('.slick-slide').removeClass('anim');
		 	setTimeout(function() {
		 		$('.slick-current').addClass('anim');                     
		 	}, 1200);
		  
		});
	};
	
	if($('.js-servises-slider').length) {
		$('.js-slider-for').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			fade: true,
			asNavFor: '.js-slider-nav'
		});
		$('.js-slider-nav').slick({
			slidesToShow: 4,
			slidesToScroll: 1,
			asNavFor: '.js-slider-for',
			dots: false,
			arrows: false,
			focusOnSelect: true,
			vertical: true
		});
	}
	if($('#animate1').length) {
		var controller = new ScrollMagic.Controller();
		// build scene
		var scene = new ScrollMagic.Scene({
			triggerElement: "#trigger1",
			duration: "100%",
			triggerHook: 1
		})
		.setTween("#animate1", 2.5, {scale: 1.48})
		//.addIndicators({name: "1 (duration: 0)"})
		.addTo(controller);
	}
	
	
	if($('.hand-img').length) {
		$.fn.parallax = function(resistance, mouse) {
			$el = $(this);
			TweenLite.to($el, 0.2, {
				x: -((mouse.clientX - window.innerWidth / 2) / resistance),
				y: -((mouse.clientY - window.innerHeight / 2) / resistance)
			});
		};

		$(document).mousemove(function(e) {
			$(".hand-img").parallax(-50, e);
		});
	}	
	/* components end*/


});
var scroller;
var handler = function(){	
	var height_footer = $('footer').height();	
	var height_header = $('header').height();		
	
	
	var viewport_wid = viewport().width;
	var viewport_height = viewport().height;
	$('.scroll-container').css({'min-height':viewport_height});	
	$('.graphic').css({'height':viewport_height - height_header + 7});

	setTimeout(function() {
    	var wd = parseInt($(document).width() - parseInt($('.wrapper').width())) / 2;
        $('.box-slider-list, .box-additional h2').css('padding-left', wd+'px');
        $('.box-additional .slick-arrow').css('left', wd+'px');
	}, 500);

	if (viewport_wid >= 1024) {
		if($('#scroll-container').length) {
			scroller = new SmoothScroll({
			    target: document.querySelector("#scroll-container"),
			    scrollEase: 0.05
			});
		}        
    } 	
	$(window).scroll(function() {
        if ($(window).scrollTop() > 100) {
            $('.header-fixed').addClass("fixed");
        } else {
            $('.header-fixed').removeClass("fixed");
        };
        $('.hover-reveal').css('opacity', 0)
    });
    $(window).load(function() {
        if ($(window).scrollTop() > 100) {
            $('.header-fixed').addClass("fixed");
        } else {
            $('.header-fixed').removeClass("fixed");
        };
    });
}
$(window).bind('load', handler);
$(window).bind('resize', handler);


var slider = $('#hold-scale');


$( function() {
	if($('.main-screen').length) {
	    function baseRefresh() {
	        currentValue = slider.slider('value');
	        $('.main-screen__ticket').css('bottom', currentValue + 4 + '%');
	        $('.main-screen__ticket').css('opacity', currentValue*2 / 100);
	        if (currentValue === 100) {
	        	$('.main-screen-hold').removeClass('disabled-hold');             
	            setTimeout(function() {
	                $('.ticket-page').addClass('show');
	            }, 800);
	            setTimeout(function() {
	                location.href = 'project-graphic.html';
	            }, 3200);
	        } else{
	        	$('.main-screen-hold').addClass('disabled-hold');
	        	$(".ui-slider-handle").css("bottom","0%");
	        	$(".ui-slider-range-min").css("height","0%");
	        }
	    }
	    function refreshSunset() {
	        baseRefresh();
	    }
	    slider.slider({
	    	orientation: "vertical",
	    	range: "min",
	    	min: 0,
	    	max: 100,
	    	value: 0,
	       	slide: function( event, ui ) {
	       		baseRefresh();	            
	        },
	        change: function ( event, ui ) {
	        	refreshSunset();
	           	if(ui.value < 100){
	           		$('.main-screen__ticket').css('bottom', 0);
	        		$('.main-screen__ticket').css('opacity', 0);
	        		$('.ui-slider-range-min').removeClass("active");
	           	}
	           	
	        }
	    });
	};


} );

/*cursor animation*/
document.addEventListener("DOMContentLoaded", function(event) {
	var cursor = document.querySelector(".custom-cursor");
	var links = document.querySelectorAll("a, .js-show-ticket, input.btn");
	
	var initCursor = false;
	
	for (var i = 0; i < links.length; i++) {
		var selfLink = links[i];
		
		selfLink.addEventListener("mouseover", function() {
			cursor.classList.add("custom-cursor_link");
			//$(".custom-cursor svg").css("fill","#101010");
			//$(".custom-cursor svg").css("stroke","none");
		});
		selfLink.addEventListener("mouseout", function() {
			cursor.classList.remove("custom-cursor_link");
			//$(".custom-cursor svg").css("fill","none");
			//$(".custom-cursor svg").css("stroke","rgba(255,220,0,.8)");
		});
	}
	
	
	window.onmousemove = function(e) {
		var mouseX = e.clientX;
		var mouseY = e.clientY;
		
		if (!initCursor) {
                  // cursor.style.opacity = 1;
                  TweenLite.to(cursor, 0.3, {
                  	opacity: 1
                  });
                  initCursor = true;
              }
              
              TweenLite.to(cursor, 0, {
              	top: mouseY + "px",
              	left: mouseX + "px"
              });
          };
          
          window.ontouchmove = function(e) {
          	var mouseX = e.touches[0].clientX;
          	var mouseY = e.touches[0].clientY;
          	if (!initCursor) {
                  // cursor.style.opacity = 1;
                  TweenLite.to(cursor, 0.3, {
                  	opacity: 1
                  });
                  initCursor = true;
              }
              
              TweenLite.to(cursor, 0, {
              	top: mouseY + "px",
              	left: mouseX + "px"
              });
          };
          
          window.onmouseout = function(e) {
          	TweenLite.to(cursor, 0.3, {
          		opacity: 0
          	});
          	initCursor = false;
          };
          
          window.ontouchstart = function(e) {
          	TweenLite.to(cursor, 0.3, {
          		opacity: 1
          	});
          };
          
          window.ontouchend = function(e) {
          	setTimeout( function() {
          		TweenLite.to(cursor, 0.3, {
          			opacity: 0
          		});
          	}, 200);   
          };
          
      });
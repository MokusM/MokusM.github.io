$(window).on("load", function () {
	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
		$("body").addClass("ios");
	} else {
		$("body").addClass("web");
	}
	$("body").removeClass("loaded");
});

/* viewport width */
function viewport() {
	var e = window,
		a = "inner";
	if (!("innerWidth" in window)) {
		a = "client";
		e = document.documentElement || document.body;
	}
	return { width: e[a + "Width"], height: e[a + "Height"] };
}
/* viewport width */
$(function () {
	/* placeholder*/
	$("input, textarea").each(function () {
		var placeholder = $(this).attr("placeholder");
		$(this).focus(function () {
			$(this).attr("placeholder", "");
		});
		$(this).focusout(function () {
			$(this).attr("placeholder", placeholder);
		});
	});
	/* placeholder*/

	$(".form-control").focus(function () {
		$(this).parents(".box-field").addClass("focused-field");
	});
	$(".form-control").focusout(function () {
		$(this).parents(".box-field").removeClass("focused-field");
	});

	/*change current lang*/
	$(".js-lang-select").click(function () {
		$(this).parent().toggleClass("active");
		return false;
	});
	$(".js-list-lang li a").click(function () {
		$(this).parent().toggleClass("active");
		$(this).parent().siblings().removeClass("active");
		$(".box-lang").removeClass("active");
		var srcFlag = $(this).find("img").attr("src");
		$(".js-lang-select").find("img").attr("src", srcFlag);
		return false;
	});
	$(document).on("touchstart click", function (e) {
		if ($(e.target).parents().filter(".box-lang:visible").length != 1) {
			$(".box-lang").removeClass("active");
		}
	});
	/*change current lang*/

	/*faq accordion*/
	$(".js-list-faq li a").click(function () {
		$(this).parent().toggleClass("active");
		$(this).parent().find(".list-faq__answer").slideToggle();
		$(this).parent().siblings().removeClass("active");
		$(this).parent().siblings().find(".list-faq__answer").slideUp();
		return false;
	});
	/*faq accordion*/

	/* tabs*/
	$(".js-tabs li a").click(function () {
		$(this).parents(".tab-wrap").find(".tab-cont").addClass("hide-tab");
		$(this).parent().siblings().removeClass("active");
		var id = $(this).attr("href");
		$(id).removeClass("hide-tab");
		$(this).parent().addClass("active");
		return false;
	});
	if ($(".js-tabs-auto").length) {
		var tabs = $(".js-tabs-auto li");
		tabs.click(function () {
			$(this).addClass("active").siblings(".active").removeClass("active");
			$(this).parents(".tab-wrap").find(".tab-cont").addClass("hide-tab");
			var id = $(this).find("a").attr("href");
			var itemWidth = $(this).find("a").attr("data-width");
			$(".nav-tab-list-line__dark").css("width", itemWidth);
			$(id).removeClass("hide-tab");
			return false;
		});
		//auto-rotate every 5 seconds
		setInterval(function () {
			var onTab = tabs.filter(".active");
			var nextTab = onTab.index() < tabs.length - 1 ? onTab.next() : tabs.first();
			nextTab.click();
		}, 5000);
	}
	/* tabs*/

	$(".js-copy-code").click(function () {
		var copyText = document.getElementById("code-field");
		copyText.select();
		document.execCommand("copy");
		return false;
	});
	$(".js-copy-currency").click(function () {
		var copyText = document.getElementById("currency-field");
		copyText.select();
		document.execCommand("copy");
		return false;
	});

	if ($(".js-fancybox").length) {
		$(".js-fancybox").fancybox({
			margin: 0,
			padding: 0,
		});
	}

	$.fn.parallax = function (resistance, mouse) {
		$el = $(this);
		TweenLite.to($el, 0.2, {
			x: -((mouse.clientX - window.innerWidth / 2) / resistance),
			y: -((mouse.clientY - window.innerHeight / 2) / resistance),
		});
	};

	$(document).mousemove(function (e) {
		$(".main-sreen__plus").parallax(-50, e);
		$(".main-sreen h1").parallax(105, e);
		$(".tab-plus").parallax(85, e);
		$("h2").parallax(112, e);
		$(".faq-plus-1").parallax(100, e);
		$(".faq-plus-2").parallax(70, e);
	});

	$("select").selectpicker();

	/*$("select").on("show.bs.select", function (e) {
		if (!throttleTimeout) {
			throttleTimeout = setTimeout(function () {
				api.reinitialise();
				throttleTimeout = null;
			}, 50);
		}
		alert("test");
	});

	if ($("#bs-select-1").length) {
		$("#bs-select-1").jScrollPane({
			verticalDragMinHeight: 23,
			verticalDragMaxHeight: 23,
		});
		var api = $("#bs-select-1").data("jsp");
		var throttleTimeout;

		$(window).bind("resize", function () {
			if (!throttleTimeout) {
				throttleTimeout = setTimeout(function () {
					api.reinitialise();
					throttleTimeout = null;
				}, 50);
			}
		});
	}*/
	/* components begin*/

	/*	
	

	if ($('.js-img').length) {
		var jsImg = $(".js-img");
		new LazyLoad(jsImg, {
				root: null,
				rootMargin: "0px",
				threshold: 0
		});
	};
	if ($('.js-slick-slider').length) {
        $('.js-slick-slider').slick({
            dots: true,
            infinite: false,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 4,
            arrows: false,
            responsive: [{
                    breakpoint: 6000,
                    settings: "unslick"
                },
                {
                    breakpoint: 1023,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    };

	if($('.js-styled').length) {
		$('.js-styled').styler();
	};
	
	
	if($('.js-scroll').length) {
		$(".js-scroll").mCustomScrollbar({
			axis:"x",
			theme:"dark-thin",
			autoExpandScrollbar:true,
			advanced:{autoExpandHorizontalScroll:true}
		});
	};	
	*/
	/* components end*/
});

var handler = function () {
	var height_footer = $("footer").height();
	var height_header = $("header").height();
	//$('.content').css({'padding-bottom':height_footer+40, 'padding-top':height_header+40});

	var viewport_wid = viewport().width;
	var viewport_height = viewport().height;

	if (viewport_wid <= 991) {
	}
};
$(window).bind("load", handler);
$(window).bind("resize", handler);

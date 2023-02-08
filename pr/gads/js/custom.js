$(window).on("load", function () {
	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
		$("body").addClass("ios");
	} else {
		$("body").addClass("web");
	}

	setTimeout(() => {
		$("body").removeClass("loaded");
		AOS.init({
			offset: 0,
			duration: 500,
			once: false,
			disable: "mobile",
		});
	}, 100);
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
	/*button open main nav begin*/
	$(".js-button-nav").click(function () {
		$(this).toggleClass("active");
		$(".main-nav").toggleClass("active");
		$("html").toggleClass("noscroll");
		$("html").toggleClass("noscroll");
		return false;
	});
	//
	$(".main-nav__mask").click(function () {
		$(".js-button-nav").removeClass("active");
		$(".main-nav").removeClass("active");
		$("html").removeClass("noscroll");
		$("html").removeClass("noscroll");
		return false;
	});

	/*button open main nav end*/

	/*scroll id*/
	$(".js-scroll-nav a").click(function () {
		$(".js-button-nav").removeClass("active");
		$(".main-nav").removeClass("active");
		$("html").removeClass("noscroll");
		$("html").removeClass("noscroll");
		$(this).parent().addClass("active");
		$(this).parent().siblings().removeClass("active");
		var target = $(this).attr("href");
		$("html, body").animate(
			{
				scrollTop: $(target).offset().top,
			},
			1000
		);
		return false;
	});
	/*scroll id*/
	/*scroll id*/
	$(".js-scroll-anchor").click(function () {
		var target = $(this).attr("href");
		$("html, body").animate(
			{
				scrollTop: $(target).offset().top,
			},
			1000
		);
		return false;
	});
	/*scroll id*/
	if ($("#ticker-1").length) {
		var viewportWidth = 0;
		for (i = 0; i < $("#ticker-1").find(".ticker-list__item").length; i++) {
			var itemWidth = $("#ticker-1").find(".ticker-list__item").eq(i).outerWidth();
			viewportWidth = viewportWidth + itemWidth;
		}
		$("#ticker-1").css("width", viewportWidth);
		$("#ticker-1").find(".ticker-list__item").clone().prependTo("#ticker-1");
		function animateTicker() {
			$("#ticker-1").animate(
				{
					"margin-left": -viewportWidth,
				},
				50000,
				"linear",
				function () {
					$("#ticker-1").css("margin-left", "0");
					animateTicker();
				}
			);
		}
		animateTicker();
	}
	if ($("#ticker-2").length) {
		var viewportWidth2 = 0;
		for (i = 0; i < $("#ticker-2").find(".ticker-list__item").length; i++) {
			var itemWidth = $("#ticker-2").find(".ticker-list__item").eq(i).outerWidth();
			viewportWidth2 = viewportWidth2 + itemWidth;
		}
		$("#ticker-2").css("width", viewportWidth2);
		$("#ticker-2").find(".ticker-list__item").clone().prependTo("#ticker-2");
		function animateTicker2() {
			$("#ticker-2").animate(
				{
					"margin-left": -viewportWidth2,
				},
				50000,
				"linear",
				function () {
					$("#ticker-2").css("margin-left", "0");
					animateTicker2();
				}
			);
		}
		animateTicker2();
	}
	if ($("#ticker-3").length) {
		var viewportWidth3 = 0;
		for (i = 0; i < $("#ticker-3").find(".ticker-list__item").length; i++) {
			var itemWidth = $("#ticker-3").find(".ticker-list__item").eq(i).outerWidth();
			viewportWidth3 = viewportWidth3 + itemWidth;
		}
		$("#ticker-3").css({ width: viewportWidth2, "margin-left": -viewportWidth2 });
		$("#ticker-3").find(".ticker-list__item").clone().prependTo("#ticker-3");
		function animateTicker3() {
			$("#ticker-3").animate(
				{
					right: -viewportWidth2,
				},
				50000,
				"linear",
				function () {
					$("#ticker-3").css("right", "0");
					animateTicker3();
				}
			);
		}
		animateTicker3();
	}

	/* components begin*/
	if ($(".js-cases-slider").length) {
		var $numberCases = $(".number-cases-slide");
		var $slickCases = $(".js-cases-slider");
		$slickCases.on("init reInit afterChange", function (event, slick, currentSlide, nextSlide) {
			var i = (currentSlide ? currentSlide : 0) + 1;
			$numberCases.html(i + "\\" + slick.slideCount);
		});
		$(".js-cases-slider").slick({
			dots: false,
			infinite: false,
			speed: 300,
			slidesToShow: 1,
			slidesToScroll: 1,
			prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button"><i class="icon-arr-left"></i></button>',
			nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button"><i class="icon-arr-right"></i></button>',
		});
	}
	if ($(".js-reviews-slider").length) {
		var $numberReview = $(".number-reviews-slide");
		var $slickReview = $(".js-reviews-slider");
		$slickReview.on("init reInit afterChange", function (event, slick, currentSlide, nextSlide) {
			var i = (currentSlide ? currentSlide : 0) + 1;
			$numberReview.html(i + "\\" + slick.slideCount);
		});
		$(".js-reviews-slider").slick({
			dots: false,
			infinite: false,
			speed: 300,
			slidesToShow: 2,
			slidesToScroll: 1,
			prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button"><i class="icon-arr-left"></i></button>',
			nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button"><i class="icon-arr-right"></i></button>',
			responsive: [
				{
					breakpoint: 1023,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						centerMode: true,
						variableWidth: true,
						centerPadding: 0,
						infinite: true,
					},
				},
			],
		});
	}
	if ($(".js-fancybox").length) {
		$(".js-fancybox").fancybox({
			margin: 0,
			padding: 0,
			beforeShow: function () {
				$("body").css({ overflow: "hidden" });
				if (!throttleTimeout) {
					throttleTimeout = setTimeout(function () {
						api.reinitialise();
						throttleTimeout = null;
					}, 50);
				}
			},
			afterClose: function () {
				$("body").css({ "overflow-y": "visible" });
			},
		});
	}
	if ($(".js-scroll").length) {
		$(".js-scroll").jScrollPane({
			verticalDragMinHeight: 23,
			verticalDragMaxHeight: 23,
		});
		var api = $(".js-scroll").data("jsp");
		var throttleTimeout;
		$(window).bind("resize", function () {
			if (!throttleTimeout) {
				throttleTimeout = setTimeout(function () {
					api.reinitialise();
					throttleTimeout = null;
				}, 50);
			}
		});
	}
	$("#about").mousemove(function (e) {
		parallaxIt(e, ".parallax-1", -10);
		parallaxIt(e, ".parallax-2", -45);
	});
	$("#steps").mousemove(function (e) {
		parallaxIt(e, ".parallax-3", -45);
	});
	$("#promo").mousemove(function (e) {
		parallaxIt(e, ".parallax-4", -45);
	});

	function parallaxIt(e, target, movement) {
		var relX = e.clientX / window.innerWidth;
		var relY = e.clientY / window.innerHeight;

		TweenMax.to(target, 1, {
			x: relX * movement,
			y: relY * movement,
		});
	}
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

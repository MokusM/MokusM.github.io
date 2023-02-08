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
	/*button open main nav begin*/
	$(".js-button-nav").click(function () {
		$(this).toggleClass("active");
		$(".mob-nav").toggleClass("show");
		return false;
	});
	$(document).on("touchstart click", function (e) {
		if ($(e.target).parents().filter("header .wrapper:visible").length != 1) {
			$(".js-button-nav").removeClass("active");
			$(".mob-nav").removeClass("show");
		}
	});
	/*button open main nav end*/
	/*button open aside lesson begin*/
	$(".js-aside-lesson").click(function () {
		$(".lesson__aside").toggleClass("show");
		return false;
	});

	$(".js-aside-close").click(function () {
		$(".lesson__aside").removeClass("show");
		return false;
	});
	$(document).on("touchstart click", function (e) {
		if ($(e.target).parents().filter(".lesson__aside:visible").length != 1) {
			$(".lesson__aside").removeClass("show");
		}
	});
	/*button open aside lesson end*/

	/*quiz begin*/
	if ($(".quiz").length) {
		var count = 1;
		function growBar() {
			$(".quiz-step__title span").text(count);
			$(".quiz-list__item:nth-child(" + count + ")").removeClass("hidden");
			$(".quiz-list__item:nth-child(" + count + ")")
				.siblings()
				.addClass("hidden");
			$(".quiz-bar__active").css({ width: count * (100 / 30) + "%" });

			if (count > 1) {
				$(".js-quiz-prev").prop("disabled", false);
			} else {
				$(".js-quiz-prev").prop("disabled", true);
			}
			if (count === 30) {
				$(".js-quiz-next").addClass("hidden");
			} else {
				$(".js-quiz-next").removeClass("hidden");
			}
		}
		$(".js-quiz-prev").click(function () {
			if (count > 1) {
				count--;
				growBar();
			}
			return false;
		});
		$(".js-quiz-next").click(function () {
			if (count < 30) {
				count++;
				growBar();
			}
			return false;
		});
	}

	/*quiz end*/

	/* components begin*/
	if ($(".js-fancybox").length) {
		$(".js-fancybox").fancybox({
			autoFocus: false,
			margin: 0,
			padding: 0,
			afterLoad: function () {
				$("#downtimer").countdowntimer({
					hours: 2,
					size: "lg",
					displayFormat: "HM",
					timeSeparator: ":",
					labelsFormat: true,
				});
			},
		});
	}
	if ($(".js-fancybox-video").length) {
		$(".js-fancybox-video").fancybox({
			youtube: {
				controls: 0,
				showinfo: 0,
			},
		});
	}
	if ($(".col-img").length) {
		$.fn.parallax = function (resistance, mouse) {
			$el = $(this);
			TweenLite.to($el, 0.2, {
				x: -((mouse.clientX - window.innerWidth / 2) / resistance),
				y: -((mouse.clientY - window.innerHeight / 2) / resistance),
			});
		};
		$(document).mousemove(function (e) {
			$(".js-parallax-point").parallax(-55, e);
			$(".js-parallax-img").parallax(55, e);
		});
		$(document).mousemove(function (e) {
			$(".js-img-1").parallax(-55, e);
			$(".js-img-2").parallax(35, e);
			$(".js-img-3").parallax(65, e);
			$(".js-img-4").parallax(-85, e);
			$(".js-img-5").parallax(55, e);
		});
	}

	/* components end*/
});

const mobileCheck = () => {
	const userAgent = navigator.userAgent || navigator.vendor || window.opera;

	if (/android/i.test(userAgent)) {
		document.documentElement.classList.add('mobile');
		return 'Android';
	}

	if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
		document.documentElement.classList.add('mobile');
		return 'iOS';
	}

	return 'unknown';
};
var root = document.documentElement;

$(document).ready(function () {
	root.style.setProperty('--ph', (window.screen.height / 100).toFixed(1));

	mobileCheck();
	viewport = $('meta[name=viewport]');
	if ($(window).width() < 900) {
		viewport.attr('content', 'width=device-width, initial-scale=0.5, maximum-scale=0.5, user-scalable=no');
	}
	if ($(window).width() < 1100) {
		viewport.attr('content', 'width=device-width, initial-scale=0.7, maximum-scale=0.7, user-scalable=no');
	}

	var mob = 0;
	function gup(name, url) {
		if (!url) url = location.href;
		name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
		var regexS = '[\\?&]' + name + '=([^&#]*)';
		var regex = new RegExp(regexS);
		var results = regex.exec(url);

		return results == null ? null : results[1];
	}

	var url = 'slides/slide3.html';
	if (gup('slide')) {
		url = 'slides/slide' + gup('slide') + '.html';
	}

	$.get(url, function (html) {
		$('.next').hide('fast');
		$('#slideContainer').html(html);
	});
	$('body').on('click', 'div.prev', function (e) {
		e.stopPropagation();
		e.preventDefault();
		$('.next').hide('fast');
		TweenMax.to('section', 0.5, { opacity: 0, ease: Linear.easeNone });
		setTimeout(function () {
			prevSlide();
		}, 500);
	});
	$('body').on('click', 'div.next', function (e) {
		e.stopPropagation();
		e.preventDefault();
		TweenMax.to('section', 0.5, { opacity: 0, ease: Linear.easeNone });
		$('.next').hide('fast');
		setTimeout(function () {
			nextSlide();
		}, 500);
	});
});
function prevSlide() {
	if (typeof tl !== 'undefined') {
		tl.kill();
	}

	var page = $('body').find('section').data('prev');
	if (page != 'start') {
		var url = 'slides/' + page + '.html';
		max_id = setTimeout(function () {});

		while (max_id--) {
			clearTimeout(max_id);
		}

		$.get(url, function (html) {
			$('#slideContainer').html(html);
		});
	}
}
function nextSlide() {
	if (typeof tl !== 'undefined') {
		tl.kill();
	}

	var page = $('body').find('section').data('next');
	var url = 'slides/' + page + '.html';
	max_id = setTimeout(function () {});

	while (max_id--) {
		clearTimeout(max_id);
	}
	$.get(url, function (html) {
		$('#slideContainer').html(html);
	});
}

var mql = window.matchMedia('(orientation: portrait)');

if (mql.matches) {
	$('.rotateBlock').addClass('show');

	root.style.setProperty('--ph', (window.screen.width / 100).toFixed(1));
} else {
	$('.rotateBlock').removeClass('show');
	root.style.setProperty('--ph', (window.screen.height / 100).toFixed(1));
}

// Прослушка события изменения ориентации
mql.addListener(function (m) {
	if (m.matches) {
		root.style.setProperty('--ph', (window.screen.width / 100).toFixed(1));
		$('.rotateBlock').addClass('show');
	} else {
		root.style.setProperty('--ph', (window.screen.height / 100).toFixed(1));
		$('.rotateBlock').removeClass('show');
	}
});

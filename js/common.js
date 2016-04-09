$(function() {

	//меню
	$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$(".menu").slideToggle();
		return false;
	});
	//анимация
	$(".item").animated("zoomIn");
	

	$("#work").waypoint(function() {
		$(".work-image").each(function(index) {
			var ths = $(this);
			setInterval(function() {
				ths.addClass("on");
			}, 200*index);
		});
	}, {
		offset : "40%"
	});

	$("#resume ").animated("fadeInLeft");
	$("#resume .item_c").animated("zoomIn");
	$("#resume .item_r").animated("fadeInRight");
	
	
	//плавний скрол
	$(".menu").on("click","a", function (event) {		
		event.preventDefault();
		
		var id  = $(this).attr('href'),		
			top = $(id).offset().top;	
		
		$('body,html').animate({scrollTop: top}, 1200);
	});

	//для равниых выысот елементов
	//;$("#resume .item").equalHeights();
	$("#work .work-grid p").equalHeights();


	
	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$(".container form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "../mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});

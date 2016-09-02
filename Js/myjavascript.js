/* This is where my Js goes*/

$(document).ready(function(){
	$(window).load(function(){
		var viewportWidth = $(window).width();
		if (viewportWidth < 700){
			$('.logo').removeClass('three columns').addClass('six columns');
			$('.quick-nav').removeClass('three columns').addClass('four columns');
			$('.header-cta').removeClass('offset-by-two three columns');
			$('.nav-btn').removeClass('one column').addClass('two columns');
		};
	});

	$(window).resize(function(){
		var viewportWidth = $(window).width();
		if (viewportWidth < 700){
			$('.logo').removeClass('three columns').addClass('six columns');
			$('.quick-nav').removeClass('three columns').addClass('four columns');
			$('.header-cta').removeClass('offset-by-two three columns');
			$('.nav-btn').removeClass('one column').addClass('two columns');
		}else{
			$('.logo').removeClass('six three columns').addClass('three columns');
			$('.quick-nav').removeClass('three four columns').addClass('three columns');
			$('.header-cta').removeClass('offset-by-two three columns').addClass('offset-by-two three columns');
			$('.nav-btn').removeClass('one two column columns').addClass('one column');
		};
	})
});
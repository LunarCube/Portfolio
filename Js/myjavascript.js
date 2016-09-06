/* This is where my Js goes*/

$(document).ready(function(){
//////////////////////////////////////////////////////////on load
	$(window).load(function(){
		var viewportWidth = $(window).width();
		if (viewportWidth <= 700){
			$('.logo').removeClass('three columns').addClass('six columns');
			$('.quick-nav').removeClass('three columns').addClass('four columns');
			$('.header-cta').removeClass('offset-by-two three columns');
			$('.nav-btn').removeClass('one column').addClass('two columns');
		};
		if (viewportWidth <= 600){
			$('.logo').removeClass('six columns').addClass('ten columns');
		};
	});

///////////////////////////////////////////////////////on resize
	$(window).resize(function(){

		var viewportWidth = $(window).width();
		if (viewportWidth >= 700){
			$('.logo').removeClass('six three ten columns').addClass('three columns');
			$('.quick-nav').removeClass('three four columns').addClass('three columns');
			$('.header-cta').removeClass('offset-by-two three columns').addClass('offset-by-two three columns');
			$('.nav-btn').removeClass('one two column columns').addClass('one column');
			
		}else if(viewportWidth < 700 && viewportWidth >= 600){
			$('.logo').removeClass('three ten columns').addClass('six columns');
			$('.quick-nav').removeClass('three columns').addClass('four columns');
			$('.header-cta').removeClass('offset-by-two three columns');
			$('.nav-btn').removeClass('one column').addClass('two columns');
		}else if(viewportWidth < 600){
			$('.logo').removeClass('six columns').addClass('ten columns');
			$('.nav-btn').removeClass('one column').addClass('two columns');
		}
	});
////////////////////////////////////////////////////////after script check

});
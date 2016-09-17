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
		if (viewportWidth <= 500){
			$('.contact-icon').attr('src', 'assets/contact-icon-mobile.svg');
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

	$(window).resize(function(){

		var viewportWidth = $(window).width();
		if (viewportWidth <= 500){
			//$('.contact-icon').attr('src', 'assets/contact-icon-mobile.svg');
		}else if(viewportWidth > 500){
			$('.contact-icon').attr('src', 'assets/contact-icon.svg');
		}
	});
////////////////////////////////////////////////////////responsive type
	$('.vision-header').flowtype({
		minimum   : 320,
	 	maximum   : 1600,
	 	minFont   : 42,
	 	maxFont   : 90,
	 	fontRatio : 10.8
	});

	$('.vision-body-text').flowtype({
		minimum   : 320,
	 	maximum   : 1600,
	 	minFont   : 16,
	 	maxFont   : 20,
	 	fontRatio : 30
	});

	$('.studio-header-main').flowtype({
		minimum   : 320,
	 	maximum   : 1600,
	 	minFont   : 59,
	 	maxFont   : 90,
	 	fontRatio : 10.8
	});

	$(window).load(function(){

		var viewportWidth = $(window).width();

		if(viewportWidth <= 500){
			$('.studio-header-main').flowtype({
				minimum   : 320,
			 	maximum   : 1600,
			 	minFont   : 48,
			 	maxFont   : 90,
			 	fontRatio : 10.8
			});

			$('.studio-body-text-main').flowtype({
				minimum   : 320,
			 	maximum   : 1600,
			 	minFont   : 16,
			 	maxFont   : 20,
			 	fontRatio : 30
			});
		}
	});

	$(window).resize(function(){

		var viewportWidth = $(window).width();

		if(viewportWidth <= 500){
			$('.studio-header-main').flowtype({
				minimum   : 320,
			 	maximum   : 1600,
			 	minFont   : 48,
			 	maxFont   : 90,
			 	fontRatio : 10.8
			});

			$('.studio-body-text-main').flowtype({
				minimum   : 320,
			 	maximum   : 1600,
			 	minFont   : 16,
			 	maxFont   : 20,
			 	fontRatio : 30
			});
		}else if(viewportWidth > 500){

			$('.vision-body-text').flowtype({
				minimum   : 320,
			 	maximum   : 1600,
			 	minFont   : 16,
			 	maxFont   : 20,
			 	fontRatio : 30
			});

			$('.studio-header-main').flowtype({
				minimum   : 320,
			 	maximum   : 1600,
			 	minFont   : 59,
			 	maxFont   : 90,
			 	fontRatio : 10.8
			});
		};
	});


	$('.studio-body-text-main').flowtype({
		minimum   : 320,
	 	maximum   : 1600,
	 	minFont   : 16,
	 	maxFont   : 20,
	 	fontRatio : 30
	});

	$('.contact-header').flowtype({
		minimum   : 320,
	 	maximum   : 1600,
	 	minFont   : 64,
	 	maxFont   : 90,
	 	fontRatio : 10.8
	});

	$('.contact-cta-text').flowtype({
		minimum   : 320,
	 	maximum   : 1600,
	 	minFont   : 14,
	 	maxFont   : 20,
	 	fontRatio : 20
	});

///////////////////////////////////////////////////////responsive type end

});
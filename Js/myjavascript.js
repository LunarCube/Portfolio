/* This is where my Js goes*/

/*jquery here */

$(document).ready(function(){
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
			$('.studio-icon').attr('src', 'assets/studio-mobile-logo.svg');
		};

		if(viewportWidth > 500 && viewportWidth <= 750 && $('.content-skills').is(':visible')){
			$('.studio-side-nav').css('top', '60%')
		}else if(viewportWidth <= 500 && $('.content-skills').is(':visible')){
			$('.studio-side-nav').css('top', '25%')
		};

		if(viewportWidth <= 650 && $('.content-skills').is(':visible')){
			$('.studio-side-nav').css('transform', 'translateY(-50%)')
		};

		if(viewportWidth <= 700){
			$('.header-cta').addClass('hidden');
		}else{
			$('.header-cta').removeClass('hidden');
		};

		if(viewportWidth <= 600){
			$('.quick-nav').addClass('hidden');
		}else{
			$('.quick-nav').removeClass('hidden');
		};
	});

///////////////////////////////////////////////////////on resize
	$(window).resize(function(){

		var viewportWidth = $(window).width();
		if (viewportWidth >= 700){
			$('.logo').removeClass('six  ten columns').addClass('three columns');
			$('.quick-nav').removeClass(' four columns').addClass('three columns');
			$('.header-cta').removeClass('offset-by-two three columns').addClass('offset-by-two three columns');
			$('.nav-btn').removeClass('one two column columns').addClass('one column');
			
		}else if(viewportWidth < 700 && viewportWidth > 600){
			$('.logo').removeClass('three ten columns').addClass('six columns');
			$('.quick-nav').removeClass('three columns').addClass('four columns');
			$('.nav-btn').removeClass('one column').addClass('two columns');
			$('.header-cta').removeClass('offset-by-two three columns');
		}else if(viewportWidth <= 600){
			$('.logo').removeClass('six columns').addClass('ten columns');
			$('.nav-btn').removeClass('one column').addClass('two columns');
		};

		if(viewportWidth < 700){
			$('.header-cta').addClass('hidden');
		}else{
			$('.header-cta').removeClass('hidden');
		};

		if(viewportWidth <= 600){
			$('.quick-nav').addClass('hidden');
		}else{
			$('.quick-nav').removeClass('hidden');
		};

	});

	$(window).resize(function(){

		var viewportWidth = $(window).width();
		if (viewportWidth <= 500){
			//$('.contact-icon').attr('src', 'assets/contact-icon-mobile.svg');
			$('.studio-icon').attr('src', 'assets/studio-mobile-logo.svg')
		}else if(viewportWidth > 500){
			$('.contact-icon').attr('src', 'assets/contact-icon.svg');
			$('.studio-icon').attr('src', 'assets/studio-main-logo.svg')
		};

		var viewportWidth = $(window).width();
		if(viewportWidth > 500 && viewportWidth <= 750 && $('.content-skills').is(':visible')){
			$('.studio-side-nav').css('top', '60%')
		}else if(viewportWidth <= 500 && $('.content-skills').is(':visible')){
			$('.studio-side-nav').css('top', '25%')
		}else if(viewportWidth > 750 && $('.content-skills').is(':visible')){
			$('.studio-side-nav').css('top', '50%')
		};

	});

/////////////////////////////////////////////////////flowtype standard values
	
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

	////////////////////////////////////////////////////////responsive flowType

	$(window).load(function(){

		var viewportWidth = $(window).width();

		if(viewportWidth <= 500 && viewportWidth > 400){
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
		}else if(viewportWidth <= 400){
			$('.studio-header-main').flowtype({
				minimum   : 320,
			 	maximum   : 1600,
			 	minFont   : 40,
			 	maxFont   : 90,
			 	fontRatio : 10.8
			});
		};
	});

	$(window).resize(function(){

		var viewportWidth = $(window).width();
		if(viewportWidth <= 500 && viewportWidth > 400){
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

			$('.studio-header-main').flowtype({
				minimum   : 320,
			 	maximum   : 1600,
			 	minFont   : 59,
			 	maxFont   : 90,
			 	fontRatio : 10.8
			});

			$('.studio-body-text').flowtype({
				minimum   : 320,
			 	maximum   : 1600,
			 	minFont   : 16,
			 	maxFont   : 20,
			 	fontRatio : 30
			});
		}else if(viewportWidth <= 400){
			$('.studio-header-main').flowtype({
				minimum   : 320,
			 	maximum   : 1600,
			 	minFont   : 40,
			 	maxFont   : 90,
			 	fontRatio : 10.8
			});
		};
	});
///////////////////////////////////////////////////////responsive type end
///////////////////////////////////////////////////////mason
	$(window).load(function(){

		$('.grid').masonry({
			itemSelector: '.grid-item',
  			columnWidth: '.grid-sizer',
  			percentPosition: true,
  			gutter: 1,
		});

	});

///////////////////////////////////////////////////////end mason
//////////////////////////////////////////////////////Slippry
	jQuery('#slipprySlider').slippry({
	});
//////////////////////////////////////////////////////nav toggle
	$(".nav-btn").click(function(){
		$(".pop-out-wrapper").show("slow");
	});
	$(".nav-btn-x").click(function(){
		$(".pop-out-wrapper").hide("slow");
	})

}); //////////////////////////////////////////////////////end document ready...
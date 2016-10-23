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
		if(viewportWidth <= 850){
			$('.vision-icon').attr('src', 'assets/vision-mobile-logo.svg')
		}else if(viewportWidth > 850){
			$('.vision-icon').attr('src', 'assets/vision-icon.svg')
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
		if(viewportWidth <= 850){
			$('.vision-icon').attr('src', 'assets/vision-mobile-logo.svg')
		}else if(viewportWidth > 850){
			$('.vision-icon').attr('src', 'assets/vision-icon.svg')
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
	
	$('.vision-header-main').flowtype({
		minimum   : 320,
	 	maximum   : 1600,
	 	minFont   : 59,
	 	maxFont   : 90,
	 	fontRatio : 10.8
	});

	$('.vision-body-text-main').flowtype({
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

		if(viewportWidth <= 750 && viewportWidth > 400){
			$('.vision-header-main').flowtype({
				minimum   : 320,
			 	maximum   : 1600,
			 	minFont   : 48,
			 	maxFont   : 90,
			 	fontRatio : 10.8
			});

			$('.vision-body-text-main').flowtype({
				minimum   : 320,
			 	maximum   : 1600,
			 	minFont   : 16,
			 	maxFont   : 20,
			 	fontRatio : 30
			});
		}else if(viewportWidth <= 400){
			$('.vision-header-main').flowtype({
				minimum   : 320,
			 	maximum   : 1600,
			 	minFont   : 40,
			 	maxFont   : 40,
			 	fontRatio : 10.8
			});
		};
	});

	$(window).resize(function(){

		var viewportWidth = $(window).width();

		if(viewportWidth <= 750 && viewportWidth > 400){
			$('.vision-header-main').flowtype({
				minimum   : 320,
			 	maximum   : 1600,
			 	minFont   : 48,
			 	maxFont   : 90,
			 	fontRatio : 10.8
			});

			$('.vision-body-text-main').flowtype({
				minimum   : 320,
			 	maximum   : 1600,
			 	minFont   : 16,
			 	maxFont   : 20,
			 	fontRatio : 30
			});
		}else if(viewportWidth > 500){

			$('.vision-header-main').flowtype({
				minimum   : 320,
			 	maximum   : 1600,
			 	minFont   : 59,
			 	maxFont   : 90,
			 	fontRatio : 10.8
			});

			$('.vision-body-text-main').flowtype({
				minimum   : 320,
			 	maximum   : 1600,
			 	minFont   : 16,
			 	maxFont   : 20,
			 	fontRatio : 30
			});
		}else if(viewportWidth <= 400){
			$('.vision-header-main').flowtype({
				minimum   : 320,
			 	maximum   : 1600,
			 	minFont   : 40,
			 	maxFont   : 90,
			 	fontRatio : 10.8
			});
		};
	});

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
			 	maxFont   : 40,
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
	$('.nav-btn').click(function(){
		$('.burger-btn-on').hide('fast', function(){
			$('.pop-out-wrapper').show('slow', function(){
				$('.burger-btn-x').show('fast');
			});
		});
	});
	$('.nav-btn-x').click(function(){
		$('.burger-btn-x').hide('fast', function(){
			$('.pop-out-wrapper').hide('slow', function(){
				$('.burger-btn-on').show('fast');
			});
		});
	});
////////////////////////////////////////////////////end nav toggle
////////////////////////////////////////////////////single page navigation build fullpage.js
    $('#fullpage').fullpage({
        //Navigation
        //menu: '#menu',
        //lockAnchors: false,
        //anchors:['firstPage', 'secondPage'],
        //navigation: false,
        //navigationPosition: 'right',
        //navigationTooltips: ['firstSlide', 'secondSlide'],
        //showActiveTooltip: false,
        //slidesNavigation: true,
        //slidesNavPosition: 'bottom',

        //Scrolling
        css3: true,
        scrollingSpeed: 700,
        autoScrolling: true,
        fitToSection: true,
        fitToSectionDelay: 1000,
        scrollBar: false,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        loopBottom: false,
        loopTop: false,
        loopHorizontal: true,
        continuousVertical: false,
        continuousHorizontal: false,
        scrollHorizontally: false,
        interlockedSlides: false,
        resetSliders: false,
        fadingEffect: false,
        normalScrollElements: '#element1, .element2',
        scrollOverflow: false,
        scrollOverflowOptions: null,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,
        bigSectionsDestination: null,

        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,

        //Design
        //controlArrows: true,
        //verticalCentered: true,
        //sectionsColor : ['#ccc', '#fff'],
        //paddingTop: '3em',
        //paddingBottom: '10px',
        //fixedElements: '#header, .footer',
        //responsiveWidth: 0,
        //responsiveHeight: 0,
        //responsiveSlides: false,

        //Custom selectors
        sectionSelector: '.section',
        slideSelector: '.slide',

        //events
        onLeave: function(index, nextIndex, direction){},
        afterLoad: function(anchorLink, index){},
        afterRender: function(){},
        afterResize: function(){},
        afterResponsive: function(isResponsive){},
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
        onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
    });
////////////////////////////////////////////////////////////end fullPage.js
}); //////////////////////////////////////////////////////end document ready...
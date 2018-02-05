// delay code from executing until page has loaded
$(function() {
	// once form is submitted 
	$('#character-form').on('submit', function(event) {
		event.preventDefault();

		// get string value of users input, store user input in var traits 
		var trait1 = $('#trait_1').val();
		var trait2 = $('#trait_2').val();
		var trait3 = $('#trait_3').val();
		var trait4 = $('#trait_4').val();
		var trait5 = $('#trait_5').val();

		// show extra content - parallax effect if it is not the index page then always show extra content
		$('.response').show() //(.on('submit'));
		// scroll the window down to the start of the content
		$('html, body').animate({
	        scrollTop: $(".response").offset().top
	    }, 1000);
		// set variables to store each answer using .val() - x5 (5 separate variables)
		
		// set the text of various elements using the variable values eg .text
		$('.trait-1-text').text(trait1);
		$('.trait-2-text').text(trait2);
		$('.trait-3-text').text(trait3);
		$('.trait-4-text').text(trait4);
		$('.trait-5-text').text(trait5);

  	});
	// Hamburger nav toggle
  	$('.hamburger').on('click', function() {
  		$('nav').toggleClass('active');

  		if ($('nav').hasClass('active')) {
  			$('.hamburger img').attr('src', './images/hamburger-x.svg');
  		} else {
  			$('.hamburger img').attr('src', './images/hamburger-2.svg');
  		}

  		// if else statment to swap between the hamburger and x view
  		//if(.hamburger(.on('click'))) {
		//$('nav').show(attr(..images/hamburger-x.svg));
		//}
		//else(win.width()) {
		//$('nav').hide();
		//}
  	});

  //Parallax jQ
	function multiParallax() {
		var $winHeight	= $( window ).height();
		
		$('[data-parallax]').each(function() {
			var $position	= $(this).offset().top - $(document).scrollTop();

			if ( $winHeight >= $position ) {
				var $depth, $i, $layer, $layers, $len, $movement, $translate3d;
				var $layers		= $('[data-type="parallax"]');

				$($layers).each(function() {
					$parent		= $(this).parent();
					$curPos		= $($parent).offset().top - $(document).scrollTop();

					$depth 		= $(this).attr('data-depth');
					$movement	= $curPos * $depth;
					$translate 	= 'translate3d(0, ' + $movement + 'px, 0)';

					$(this).css({
						"-webkit-transform"	: $translate,	
						"-moz-transform"	: $translate,
						"-ms-transform"		: $translate,
						"-o-transform"		: $translate,
						"transform"			: $translate
					});
				});
			}
		});
	}

	$(window).on('load scroll', function() {
		multiParallax();
	});
});



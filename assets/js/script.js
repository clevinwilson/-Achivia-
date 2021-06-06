/*==============================================================*/
		// Hero slider
		/*==============================================================*/
		var $bannerSlider = jQuery('.banner-slider');
		var $bannerFirstSlide = $('div.banner-slide:first-child');

		$bannerSlider.on('init', function(e, slick) {
			var $firstAnimatingElements = $bannerFirstSlide.find('[data-animation]');
			slideanimate($firstAnimatingElements);
		});
		$bannerSlider.on('beforeChange', function(e, slick, currentSlide, nextSlide) {
			var $animatingElements = $('div.slick-slide[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
			slideanimate($animatingElements);
		});
		$bannerSlider.slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
			fade: true,
			dots: false,
			swipe: true,
			adaptiveHeight: true,
			responsive: [
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					autoplay: false,
					autoplaySpeed: 4000,
					swipe: true,
				}
			}
			]
		});
		function slideanimate(elements) {
			var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
			elements.each(function() {
				var $this = $(this);
				var $animationDelay = $this.data('delay');
				var $animationType = 'animated ' + $this.data('animation');
				$this.css({
					'animation-delay': $animationDelay,
					'-webkit-animation-delay': $animationDelay
				});
				$this.addClass($animationType).one(animationEndEvents, function() {
					$this.removeClass($animationType);
				});
			});
		}

// data color
jQuery("[data-color]").each(function () {
		jQuery(this).css('color', jQuery(this).attr('data-color'));
});
// data background color
jQuery("[data-bgcolor]").each(function () {
	jQuery(this).css('background-color', jQuery(this).attr('data-bgcolor'));
});

function openna(){
	document.getElementById("text1").style.color="#747474"
	document.getElementById("text2").style.color="#747474"
	document.getElementById("text3").style.color="#747474"
	document.getElementById("text4").style.color="#747474"
	document.getElementById("text5").style.color="#747474"
	document.getElementById("text6").style.color="#747474"
  }
  function closena(){
	document.getElementById("text1").style.color="white"
	document.getElementById("text2").style.color="white"
	document.getElementById("text3").style.color="white"
	document.getElementById("text4").style.color="white"
	document.getElementById("text5").style.color="white"
	document.getElementById("text6").style.color=""
  }
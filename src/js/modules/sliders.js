$('.slider-default').slick({
	dots: true,
	infinite: true,
	speed: 600,
	slidesToShow: 1,
	arrows: false,
	draggable: false,
	autoplay: true,
	autoplaySpeed: 4000,
	pauseOnHover: false
});
$('.arrow_slider').slick({
	dots: false,
	infinite: true,
	speed: 600,
	slidesToShow: 6,
	arrows: true,
	draggable: false,
	autoplay: true,
	autoplaySpeed: 4000,
	pauseOnHover: false,
	responsive: [
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 3
			}
		}
	]
});
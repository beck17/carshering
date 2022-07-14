$(function(){

	$('.top__slider').slick({
		arrows: false,
		dots:true,
		autoplay:true,
		fade: true,
		responsive: [
			{
				breakpoint:1200,
				settings: {
					dots: false
				}
			}
		]
	});

	$('.reviews__slider').slick({
		arrows: false,
		dots:true,
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: false,
		responsive: [
			{
				breakpoint:1150,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint:855,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint:585,
				settings: {
					slidesToShow: 1,
				}
			},
		]
	});
	
	$('.menu__btn').on('click', function(){
		$('.menu__list').toggleClass('menu__list--active');
	});

});
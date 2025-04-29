	$(document).ready(function(){
		$('.function-left ul').slick({
			dots: true,
			infinite: true,
			arrows : false,
			speed: 300,
			slidesToShow: 1,
		})
		$('.client-photos ul').slick({
			dots: false,
			infinite: true,
			speed: 300,
			slidesToShow: 3,
			centerMode: true,
			variableWidth: true,
			prevArrow: '<button class="slide-arrow prev-arrow"><img src="images/left.png" alt=""></button>',
			nextArrow: '<button class="slide-arrow next-arrow"><img src="images/right.png" alt=""></button>'
		});
		$('.featuresnew ul').slick({
			dots: true,
			infinite: false,
			speed: 300,
			slidesToShow: 3,
			slidesToScroll: 3,
			arrows : false,
			responsive: [
				{
					breakpoint: 1170,
					settings: {
					slidesToShow:3,
					slidesToScroll:3,
					infinite: true,
					dots: true
					}
				},
				{
					breakpoint: 1024,
					settings: {
					slidesToShow:3,
					slidesToScroll:3,
					infinite: true,
					dots: true
					}
				},
				{
					breakpoint: 992,
					settings: {
					slidesToShow:2,
					slidesToScroll:2,
					infinite: true,
					dots: true
					}
				},
				{
					breakpoint: 703,
					settings: {
					slidesToShow: 2,
					slidesToScroll: 2
					}
				},
				{
					breakpoint: 530,
					settings: {
					slidesToShow: 1,
					slidesToScroll: 1
					}
				}
			]
		});
		let lazy = lazyload();
		window.addEventListener('load', function () {
			$("._VIDEO_").fancybox({
				'type':'iframe',
				'transitionIn'  : 'none',
				'transitionOut' : 'none',
				'width': window.innerWidth > 767 ? 900:450,
				'height': window.innerWidth > 767 ? 514:274,
			});
		});

	})
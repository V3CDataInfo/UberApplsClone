	function getvideo(n) {
		var no = n;
		if(no == "1") {
			msg = '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/WyPTnpJJY6g?autoplay=1&loop=1&amp;controls=1&amp;rel=0&amp;showinfo=1&amp;modestbranding=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
			document.getElementById("flowVideo").innerHTML  = msg;
		}
		if(no == "2") {
			msg = '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/EJT_KOrbezs?autoplay=1&loop=1&controls=1&rel=0&showinfo=1&modestbranding=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
			document.getElementById("demo-video").innerHTML  = msg;
		}
	}
	$(document).ready(function(){
		$("._VIDEO_").fancybox({
			'type':'iframe',
			'transitionIn'  : 'none',
			'transitionOut' : 'none',
			'width': window.innerWidth > 767 ? 700:450,
			'height': window.innerWidth > 767 ? 450:280,
		});
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
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
			]
		});
		// $('.reviews ul').slick({
		// 	dots: true,
		// 	infinite: false,
		// 	speed: 300,
		// 	slidesToShow: 5,
		// 	slidesToScroll: 5,
		// 	arrows : false,
		// 	responsive: [
		// 	{
		// 		breakpoint: 1170,
		// 		settings: {
		// 		slidesToShow:3,
		// 		slidesToScroll:3,
		// 		infinite: true,
		// 		dots: true
		// 		}
		// 	},
		// 	{
		// 		breakpoint: 1024,
		// 		settings: {
		// 		slidesToShow:3,
		// 		slidesToScroll:3,
		// 		infinite: true,
		// 		dots: true
		// 		}
		// 	},
		// 	{
		// 		breakpoint: 992,
		// 		settings: {
		// 		slidesToShow:2,
		// 		slidesToScroll:2,
		// 		infinite: true,
		// 		dots: true
		// 		}
		// 	},
		// 	{
		// 		breakpoint: 703,
		// 		settings: {
		// 		slidesToShow: 2,
		// 		slidesToScroll: 2
		// 		}
		// 	},
		// 	{
		// 		breakpoint: 450,
		// 		settings: {
		// 		slidesToShow: 1,
		// 		slidesToScroll: 1
		// 		}
		// 	}
		// 	// You can unslick at a given breakpoint now by adding:
		// 	// settings: "unslick"
		// 	// instead of a settings object
		// 	]
		// });

		$('.tech ul').slick({
			dots: true,
			infinite: false,
			speed: 300,
			slidesToShow: 5,
			slidesToScroll: 5,
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
				breakpoint: 450,
				settings: {
				slidesToShow: 1,
				slidesToScroll: 1
				}
			}
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
			]
		});

		let lazy = lazyload();
		
	})
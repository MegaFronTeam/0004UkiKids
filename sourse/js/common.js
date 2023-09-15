"use strict";

const $ = jQuery;


function eventHandler() {

	JSCCommon.init()


	function whenResize() {
		JSCCommon.setFixedNav();
	}

	window.addEventListener('scroll', () => {
		JSCCommon.setFixedNav();

	}, { passive: true })
	window.addEventListener('resize', () => {
		whenResize();
	}, { passive: true });

	whenResize();


	let defaultSl = {
		spaceBetween: 0,
		lazy: {
			loadPrevNext: true,
		},
		watchOverflow: true,
		loop: true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		pagination: {
			el: ' .swiper-pagination',
			type: 'bullets',
			clickable: true,
			// renderBullet: function (index, className) {
			// 	return '<span class="' + className + '">' + (index + 1) + '</span>';
			// }
		},
	}

	new Swiper('.breadcrumb-slider--js', {
		slidesPerView: 'auto',
		freeMode: true,
		watchOverflow: true
	});

	const swiper4 = new Swiper('.sBanners__slider--js', { // если не используешь методы swiper  - можно обращаться без нее к Swiper
		// slidesPerView: 5,
		...defaultSl,
		slidesPerView: 'auto',
		// freeMode: true,
		loopFillGroupWithBlank: true,
		touchRatio: 0.2,
		slideToClickedSlide: true,
		freeModeMomentum: true,

	});

	const blogSlider = new Swiper('.sBlog__slider--js', {
		slidesPerView: 1,
		spaceBetween: 20,
		breakpoints: {
			768: {
				slidesPerView: 2,
			},
		},
		navigation: {
			nextEl: '.sBlog__container .swiper-button-next',
			prevEl: '.sBlog__container .swiper-button-prev',
		},
	});

	const prodSliders = document.querySelectorAll('.sSlider__container');
	prodSliders.forEach((el) => {
		const prodSlider = new Swiper( el.querySelector('.swiper'), {
			slidesPerView: 1,
			spaceBetween: 10,
			breakpoints: {
				470: {
					slidesPerView: 2,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1200: {
					slidesPerView: 4,
				}
			},
			navigation: {
				nextEl: el.querySelector('.sSlider__slider-wrap .swiper-button-next'),
				prevEl: el.querySelector('.sSlider__slider-wrap .swiper-button-prev'),
			},
		})
	})

const upBtn = document.querySelector('.up-btn');
window.addEventListener('scroll', function(event) {
	if (window.pageYOffset >= 100) {
	 upBtn.style.display = 'block'
	} else {
	 upBtn.style.display = 'none'
	}
 }, { passive: true });

 upBtn.addEventListener('click', function(event) {
	 window.scrollTo({ top: 0, behavior: 'smooth' });
 })

 const sortingBtns = document.querySelectorAll('.sorting-row__sort-btn--js');
 sortingBtns.forEach(btn => {
	 btn.addEventListener('click', (e) => {
			e.currentTarget.closest('.sorting-row__sort-wrap').querySelector('.sorting-row__sort-dropdown').classList.toggle('active');
	 });
	 document.addEventListener('click', (e) => {
		if ((!e.target.classList.contains('sorting-row__sort-btn')) && (!e.target.classList.contains('sorting-row__sort-dropdown'))  && window.innerWidth > 768) {
			document.querySelector('.sorting-row__sort-dropdown').classList.remove('active');
		}
	})
 });


$(document).on("click", '.sCatalog__filter-btn--js', function () {
	$('.sCatalog__filter-wrap').toggleClass('active');
	$('body').toggleClass('fixed2');
})

const cardSwiper = new Swiper('.sCard__slider', {
	spaceBetween: 5,
	slidesPerView: 4,
	freeMode: true,
	watchSlidesProgress: true,
	direction: 'vertical',
	navigation: {
		nextEl: '.sCard__next',
		prevEl: '.sCard__prev',
	},
}); 
const thumbsCardSwiper = new Swiper('.sCard__thumbs-slider', {
	spaceBetween: 10,
	pagination: {
    el: '.sCard .swiper-pagination',
		clickable: true,
  },
	thumbs: {
		swiper: cardSwiper,
	}
}); 

new Swiper('.def-swiper-js', {
	slidesPerView: 'auto',
}); 

const passFields = document.querySelectorAll(".password-wrap");
passFields.forEach(field => {
	let button = field.querySelector('.pass-button');
	button.addEventListener('click', (e) => {
		let input = field.querySelector('.form-control--pas');
		if (input.type == "password") {
			input.type = "text"
			field.querySelector('.pass-button').classList.add('shown')
		} else {
			input.type = "password"
			field.querySelector('.pass-button').classList.remove('shown')
		}
	});
});

let ordersActions = document.querySelectorAll('.sOrders__action');
	if (ordersActions.length > 0) {
		for (const ordersAction of ordersActions) {
			ordersAction.addEventListener('click', () => {
				ordersAction.querySelector('.sOrders__action-dropdown').classList.toggle('active');
			})
		}
	}
	document.addEventListener('click', function(event) {
		let actionTarget = event.target.closest('.sOrders__action');
		if(!actionTarget) $('.sOrders__action-dropdown').removeClass('active');
	})

	const uploadFields = document.querySelectorAll('.upload-field');
	if (uploadFields) {
		uploadFields.forEach(field => {
			let input = field.querySelector('.form-control');
			let fileNameDiv = field.querySelector('.file-name');
			input.addEventListener('change', (e) => {
				console.log(input.files);
				fileNameDiv.innerHTML = input.files[0].name;
			});
		});
	}

	const inputElement = document.querySelector('.filepond-js');

	if(inputElement) {
		FilePond.create(inputElement, {
			labelIdle: `<svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M20.5 8.3335V31.6668" stroke="#D9D9D9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
			<path d="M8.83325 20H32.1666" stroke="#D9D9D9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
			</svg>
			Перетащите файл сюда или <span>Выберите файл</span>`
		});
	}
	$( " .remove-btn" ).on( "click", function( event ) {
		event.preventDefault();
	});
	$(".mobile-search-open, .remove-btn").click(function () {
		$(".search-block").toggleClass("active");
		$(".remove-btn").toggleClass("active");
	});

};

if (document.readyState !== 'loading') {
	eventHandler();
} else {
	document.addEventListener('DOMContentLoaded', eventHandler);
}



// window.onload = function () {
// 	document.body.classList.add('loaded_hiding');
// 	window.setTimeout(function () {
// 		document.body.classList.add('loaded');
// 		document.body.classList.remove('loaded_hiding');
// 	}, 500);
// }
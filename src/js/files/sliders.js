/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation, Pagination, EffectFade, Lazy, Autoplay } from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

function bildSliders() {
	//BildSlider
	let sliders = document.querySelectorAll('[class*="__swiper"]:not(.swiper-wrapper)');
	if (sliders) {
		sliders.forEach(slider => {
			slider.parentElement.classList.add('swiper');
			slider.classList.add('swiper-wrapper');
			for (const slide of slider.children) {
				slide.classList.add('swiper-slide');
			}
		});
	}
}

// Инициализация слайдеров
function initSliders() {
	bildSliders();
	// Перечень слайдеров

	// Проверяем, есть ли слайдер на стронице
	// Слайдер 1
	if (document.querySelector('.body-main-slider')) { // Указываем скласс нужного слайдера!
		// Создаем слайдер
		new Swiper('.body-main-slider', { // Указываем скласс нужного слайдера!
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Pagination, EffectFade, Lazy, Autoplay],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: false,
			speed: 1000,

			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			preloadImages: false,
			lazy: {
				loadPrevNext: true,
			},
			
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false, 
			},
			

			// Пагинация
			
			pagination: {
				el: '.body-main-slider__controll',
				clickable: true,
			},
			

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			/* navigation: {
				prevEl: '.swiper-button-prev',
				nextEl: '.swiper-button-next',
			}, */

			// Брейкпоинты
			
			breakpoints: {
				320: {
					// slidesPerView: 1,
					// spaceBetween: 0,
					autoHeight: true,
				},
				/* 768: {
					slidesPerView: 2,
					spaceBetween: 20,
				}, */
				992: {
					// slidesPerView: 3,
					// spaceBetween: 20,
					autoHeight: false,
				},
				/* 1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				}, */
			},
			
			// События
			on: {
				init: function () {
					const controll = document.querySelectorAll('.body-main-slider__controll .swiper-pagination-bullet');
					controll.forEach((el,index )=> {
						let num;
						if (index<10){
							num = '0';
						}
						el.innerHTML = `${num}${index + 1}`;
					});
				},
				breakpoint: function (swiper, info) {
					!info.autoHeight ? document.querySelector('.body-main-slider__swiper').style.height = 'auto' : '';
					swiper.updateSize();
				}
			}
		});
	}
	// Слайдер 2
	if (document.querySelector('.gallery__slider')) { // Указываем скласс нужного слайдера!
		// Создаем слайдер
		new Swiper('.gallery__slider', { // Указываем скласс нужного слайдера!
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Lazy, Autoplay],
			observer: true,
			observeParents: true,
			slidesPerView: 'auto',
			spaceBetween: 32,
			autoHeight: false,
			speed: 1000,

			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			preloadImages: false,
			lazy: {
				loadPrevNext: true,
			},
			
			// Эффекты
			autoplay: {
				delay: 3000,
				disableOnInteraction: false, 
			},
			

			// Пагинация	
			

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			/* navigation: {
				prevEl: '.swiper-button-prev',
				nextEl: '.swiper-button-next',
			}, */

			// Брейкпоинты			
			breakpoints: {				
			},
			
			// События
			on: {				
			}
		});
	}

}





// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSliders();
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});
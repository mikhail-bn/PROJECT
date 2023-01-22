// Подключение функционала "Чертогов Фрилансера"
import { Navigation } from "swiper";
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";


window.addEventListener("load", function(e){
    const bg =document.querySelectorAll('[data-bg]');
    if (bg.length) {
        bg.forEach(bgItem => {
            bgItem.insertAdjacentHTML('beforeend', `<div class="bg-item"></div>`);
        });
    } else {
        
    }
    // Команда на запуск видео при его достижении скроллом (вотчером) по значению video селектора data-watch 
    // 

    if (document.querySelector('.video-module')) {
        document.addEventListener("watcherCallback", function (e) {
            const entry = e.detail.entry;
            const targetElement = entry.target;
            if (targetElement.dataset.watch === 'video' && !targetElement.classList.contains('_init')) {
                if (entry.isIntersecting) {
                    // Видим объект
                    targetElement.querySelector('video').play();
                } else {
                    // Не видим объект
                    targetElement.querySelector('video').pause();
                }
            }
        });

        // Управление кликом - инициализация присвоение класса _init по его отсутствию проверка
        // То есть:
        // 1. Если нет класса _init присвоить _init _active и включить видео
        // 2. Если есть _init (то есть видео идет или в дальнейшем может будет на паузе), 
        // то проверить поставлено ли оно на паузу, если поставлено то включить, если нет - 
        // поставить на паузу, послепроверочным действием else будет toggle класса _active
        
        const videoModule = document.querySelector('.video-module');
        videoModule.addEventListener("click", function (e) {
            if (!videoModule.classList.contains('_init')) {
                videoModule.querySelector('video').src = videoModule.querySelector('video').dataset.full;
                videoModule.classList.add('_active');
                videoModule.classList.add('_init');
                videoModule.querySelector('video').play();
                videoModule.querySelector('video').muted = false;
            } else {
                if (videoModule.querySelector('video').paused) {
                    videoModule.querySelector('video').play();
                } else {
                    videoModule.querySelector('video').pause();
                }
                videoModule.classList.toggle('_active');
            }
        });
    }

    
});



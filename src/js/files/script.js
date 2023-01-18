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
    
});


// Команда на запуск видео при его достижении скроллом (вотчером) по значению video селектора data-watch 

if (document.querySelector('.video-module')) {
    document.addEventListener("watcherCallback", function (e) {
        const entry = e.detail.entry;
        const targetElement = entry.target;
        if(targetElement.dataset.watch === 'video') {
            if(entry.isIntersecting) {
                
                targetElement.querySelector('video').play();
            }
            else {
                targetElement.querySelector('video').pause();
            }
        }
    });
    document.querySelector('.video-module').addEventListener('click', function(e) {
        if (!document.querySelector('.video-module').classList.contains('.init')) {
        document.querySelector('.video-module').querySelector('video').src = document.querySelector('video').dataset.full;
        document.querySelector('.video-module').querySelector('video').classList.add('_active');
        document.querySelector('.video-module').querySelector('video').classList.add('_init');
        document.querySelector('.video-module').querySelector('video').play();
        document.querySelector('.video-module').querySelector('video').muted = false;
    } else {
        document.querySelector('.video-module').querySelector('video').pause();
    }
    });
}
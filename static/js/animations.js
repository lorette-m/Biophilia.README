gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
    const group1 = document.getElementById("group1");
    const group2 = document.getElementById("group2");

    // Функция для циклического воспроизведения видео в группе
    function cycleVideos(groupId) {
        const videos = document.querySelectorAll(`#${groupId} .background-video`);
        let currentIndex = 0;

        // Скрываем все видео
        videos.forEach(video => video.style.display = "none");

        // Показываем первое видео
        videos[currentIndex].style.display = "block";
        videos[currentIndex].play();

        // Циклическое воспроизведение видео
        videos.forEach((video, index) => {
            video.addEventListener("ended", () => {
                video.style.display = "none"; // Скрыть завершенное видео
                currentIndex = (index + 1) % videos.length; // Переход к следующему видео
                videos[currentIndex].style.display = "block"; // Показать следующее видео
                videos[currentIndex].play(); // Воспроизвести следующее видео
            });
        });
    }

    // Запускаем видео в группе 1
    cycleVideos("group1");
    group1.classList.add("visible");

    // Инициализация ScrollTrigger
    ScrollTrigger.create({
        trigger: ".content",  // Триггер на контент
        start: "top center",  // Начало триггера, когда контент достигает центра экрана
        end: "bottom center", // Конец триггера
        scrub: true,  // Плавная анимация
        onEnter: () => {
            // Когда мы прокручиваем вниз
            gsap.to(group1, { opacity: 0, duration: 1 }); // Скрыть группу 1
            gsap.to(group2, { opacity: 1, duration: 1 }); // Показать группу 2
            cycleVideos("group2"); // Запустить видео в группе 2
        },
        onLeaveBack: () => {
            // Когда мы прокручиваем вверх
            gsap.to(group1, { opacity: 1, duration: 1 }); // Показать группу 1
            gsap.to(group2, { opacity: 0, duration: 1 }); // Скрыть группу 2
            cycleVideos("group1"); // Запустить видео в группе 1
        }
    });
});



// СКРООООООООООООООООООООООООООООООООООООООООООООООООООООООООООООООООООООООООООООООЛ

/*document.addEventListener("DOMContentLoaded", () => {
    const scrollbar = Scrollbar.init(document.body, {
        damping: 0.1, // Коэффициент демпфирования для плавности (настраивается)
    });
});*/

document.addEventListener("DOMContentLoaded", () => {
    const musicButton = document.getElementById("musicButton");
    const buttonIcon = document.getElementById("buttonIcon");
    const audio1 = document.getElementById("audio1");
    const audio2 = document.getElementById("audio2");

    let isPlaying = false;

    musicButton.addEventListener("click", () => {
        // Добавляем анимацию нажатия
        musicButton.classList.add("clicked");

        if (isPlaying) {
            audio1.pause();
            audio2.pause();
            buttonIcon.src = "../static/images/play.png"; // Меняем иконку на play
            isPlaying = false;
        } else {
            audio1.play();
            audio2.play();
            buttonIcon.src = "../static/images/pause.png"; // Меняем иконку на pause
            isPlaying = true;
        }

        // Убираем класс анимации после завершения
        setTimeout(() => {
            musicButton.classList.remove("clicked");
        }, 150); // Длительность анимации
    });
});

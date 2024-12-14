// Функция для переключения видео
function switchVideos(groupId) {
    const videos = document.querySelectorAll(`#${groupId} .background-video`);
    let currentIndex = 0;

    // Инициализируем первое видео в группе
    videos.forEach((video, index) => {
        video.style.display = (index === currentIndex) ? 'block' : 'none';
        if (index === currentIndex) video.play();
    });

    // Цикличное переключение видео
    videos.forEach((video, index) => {
        video.addEventListener('ended', () => {
            video.style.display = 'none';
            currentIndex = (index + 1) % videos.length;
            videos[currentIndex].style.display = 'block';
            videos[currentIndex].play();
        });
    });
}

// Инициализация переключения видео в первой группе
switchVideos("group1");

// Создание нового IntersectionObserver для отслеживания видимости контента
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const group = entry.target.id === 'group1' ? 'group2' : 'group1';

            // Скрыть предыдущую группу видео
            const previousGroup = entry.target;
            const previousVideos = previousGroup.querySelectorAll('.background-video');
            previousVideos.forEach(video => video.style.display = 'none');

            // Переключить видео в следующей группе
            switchVideos(group);

            // Скрыть предыдущую группу и показать следующую
            previousGroup.style.opacity = '0';
            const nextGroup = document.getElementById(group);
            nextGroup.style.opacity = '1';
        }
    });
}, {
    threshold: 0.5,  // 50% элемента должно быть видно на экране
});

// Наблюдаем за группами видео
observer.observe(document.getElementById('group1'));
observer.observe(document.getElementById('group2'));

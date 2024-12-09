let player;

// Инициализация YouTube API
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        videoId: 'b-aayQ9XCAg', // ID вашего видео
        playerVars: {
            controls: 0, // Отключение стандартных кнопок управления
            modestbranding: 1, // Скрыть логотип YouTube
            rel: 0, // Убрать рекомендуемые видео
            showinfo: 0, // Скрыть информацию о видео
        },
        events: {
            onReady: onPlayerReady
        }
    });
}

// Обработка пользовательских событий
function onPlayerReady(event) {
    const playButton = document.getElementById('playButton');
    const thumbnail = document.getElementById('thumbnail');

    playButton.addEventListener('click', () => {
        thumbnail.style.display = 'none'; // Скрыть постер
        playButton.style.display = 'none'; // Скрыть кнопку
        document.getElementById('player').style.display = 'block'; // Показать iframe
        player.playVideo();
    });
}

// Подключение YouTube API
const tag = document.createElement('script');
tag.src = 'https://www.youtube.com/iframe_api';
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

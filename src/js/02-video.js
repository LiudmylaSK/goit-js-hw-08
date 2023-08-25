import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.getElementById('vimeo-player');
const player = new Player(iframe);

const updateLocalStorageThrottled = throttle(currentTime => {
  localStorage.setItem('videoplayer-current-time', currentTime);
}, 1000);

player.on('timeupdate', function (data) {
  const currentTime = data.seconds;
  updateLocalStorageThrottled(currentTime);
});

const savedTime = localStorage.getItem('videoplayer-current-time');
if (savedTime !== null) {
  player
    .setCurrentTime(parseFloat(savedTime))
    .then(function (seconds) {})
    .catch(function (error) {
      switch (error.name) {
        case 'RangeError':
          break;

        default:
          break;
      }
    });
}

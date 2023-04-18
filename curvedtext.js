document.addEventListener('DOMContentLoaded', function () {
  var video = document.getElementById('myVideo');
  var loadingScreen = document.getElementById('loadingScreen');

  video.addEventListener('loadeddata', function () {
    loadingScreen.style.display = 'none';
  });
});
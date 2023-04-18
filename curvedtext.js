window.addEventListener('load', function () {
  const loadingScreen = document.getElementById('loadingScreen');
  const video = document.querySelector('video');
  const progressBar = document.getElementById('progressBar');

  function hideLoadingScreen() {
    loadingScreen.style.display = 'none';
  }

  function updateProgressBar(percentage) {
    progressBar.style.width = percentage + '%';
  }

  video.addEventListener('progress', function () {
    if (video.buffered.length > 0) {
      const percentage = (video.buffered.end(0) / video.duration) * 100;
      updateProgressBar(percentage);
    }
  });

  if (video.readyState >= 3) {
    hideLoadingScreen();
  } else {
    video.addEventListener('canplaythrough', hideLoadingScreen, false);
  }
});

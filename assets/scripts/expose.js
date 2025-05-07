// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornSelect = document.getElementById('horn-select');
  const hornImage = document.querySelector('#expose img');
  const hornAudio = document.querySelector('audio');
  const playButton = document.querySelector('button');
  const volumeSlider = document.getElementById('volume');
  const volumeIcon = document.querySelector('#volume-controls img');
  const jsConfetti = new JSConfetti();

  hornSelect.addEventListener('change', () => {
    const hornType = hornSelect.value;
    hornImage.src = `assets/images/${hornType}.svg`;
    hornAudio.src = `assets/audio/${hornType}.mp3`;
  });

  volumeSlider.addEventListener('input', () => {
    const volume = Number(volumeSlider.value);
    hornAudio.volume = volume / 100;
    let volumeLevel;
    if (volume === 0) {
      volumeLevel = 0;
    } 
    else if (volume <= 33) {
      volumeLevel = 1;
    } 
    else if (volume <= 67) {
      volumeLevel = 2;
    } 
    else {
      volumeLevel = 3;
    }
    volumeIcon.src = `assets/icons/volume-level-${volumeLevel}.svg`;
  });

  playButton.addEventListener('click', () => {
    hornAudio.play();
    if (hornSelect.value === 'party-horn') {
      jsConfetti.addConfetti();
    }
  });
  
}


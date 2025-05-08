// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const textArea = document.getElementById('text-to-speak');
  const voiceSelect = document.getElementById('voice-select');
  const speakButton = document.querySelector('button');
  const faceImage = document.querySelector('img');
  const synth = window.speechSynthesis;
  let voices = [];
  function populateVoices() {
    voices = synth.getVoices();
    voiceSelect.innerHTML = '<option disabled selected>Select Voice:</option>';

    voices.forEach((voice, index) => {
      const option = document.createElement('option');
      option.value = index;
      option.textContent = `${voice.name} (${voice.lang})`;
      voiceSelect.appendChild(option);
    });
  }
  populateVoices();
  if (synth.onvoiceschanged !== undefined) {
    synth.onvoiceschanged = populateVoices;
  }
  speakButton.addEventListener('click', () => {
    const text = textArea.value.trim();
    if (!text || voiceSelect.value === 'select') 
      return;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = voices[voiceSelect.value];
    faceImage.src = 'assets/images/smiling-open.png';
    synth.speak(utterance);
    utterance.onend = () => {
      faceImage.src = 'assets/images/smiling.png';
    };
  });
}

// Create audio element
let audio = document.createElement('audio'); 

// Set the audio source
audio.setAttribute('src', 'sound.mp3');

// Set the audio to loop
audio.loop = true;

// Add event listener to ensure the audio plays after user interaction
document.addEventListener('click', function() {
    audio.play(); // Play audio on user interaction
});

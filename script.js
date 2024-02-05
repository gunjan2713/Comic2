window.addEventListener("load", function () {
    const audio = document.getElementById("myAudio");
    const fadeDuration = 1000; // Time in milliseconds (2 seconds)
    const steps = 50; // Number of steps
  
    const volumeStep = audio.volume / steps;
    let currentVolume = audio.volume;
  
    const fadeInterval = setInterval(() => {
      currentVolume -= volumeStep;
      audio.volume = currentVolume;
  
      if (currentVolume <= 0) {
        audio.pause(); // Pause the audio when volume reaches 0
        clearInterval(fadeInterval); // Stop the fading
      }
    }, fadeDuration / steps);
  });
    
    
    
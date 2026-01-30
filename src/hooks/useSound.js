// Sound effects hook
export const useSound = () => {
  const playSound = (filename) => {
    try {
      const audio = new Audio(`/sounds/${filename}`);
      audio.volume = 0.5; // 50% volume so it's not too loud
      audio.play().catch((err) => console.log("Sound play blocked:", err));
    } catch (err) {
      console.log("Error playing sound:", err);
    }
  };

  // Alternative: Web Audio API for simple beeps (no files needed)
  const playBeep = (frequency = 800, duration = 100) => {
    try {
      const audioContext = new (
        window.AudioContext || window.webkitAudioContext
      )();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);

      oscillator.frequency.value = frequency;
      oscillator.type = "sine";

      gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(
        0.01,
        audioContext.currentTime + duration / 1000,
      );

      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + duration / 1000);
    } catch (err) {
      console.log("Web Audio API not available");
    }
  };

  return { playSound, playBeep };
};

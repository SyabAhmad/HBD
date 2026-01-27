import { useState, useEffect, useRef } from "react";

export default function useMicrophoneBlow() {
  const [isListening, setIsListening] = useState(false);
  const [hasBlown, setHasBlown] = useState(false);
  const [permissionDenied, setPermissionDenied] = useState(false);
  const audioContextRef = useRef(null);
  const analyserRef = useRef(null);
  const micStreamRef = useRef(null);

  const BLOW_THRESHOLD = 0.3; // Amplitude threshold for blow detection

  const startListening = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      micStreamRef.current = stream;

      const audioContext = new (
        window.AudioContext || window.webkitAudioContext
      )();
      const analyser = audioContext.createAnalyser();
      const microphone = audioContext.createMediaStreamSource(stream);

      analyser.smoothingTimeConstant = 0.8;
      analyser.fftSize = 1024;

      microphone.connect(analyser);

      audioContextRef.current = audioContext;
      analyserRef.current = analyser;
      setIsListening(true);

      detectBlow();
    } catch (error) {
      console.error("Microphone access denied:", error);
      setPermissionDenied(true);
    }
  };

  const detectBlow = () => {
    if (!analyserRef.current) return;

    const bufferLength = analyserRef.current.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    const checkBlowLevel = () => {
      if (!isListening || hasBlown) return;

      analyserRef.current.getByteTimeDomainData(dataArray);

      let sum = 0;
      for (let i = 0; i < bufferLength; i++) {
        const normalized = (dataArray[i] - 128) / 128;
        sum += normalized * normalized;
      }

      const rms = Math.sqrt(sum / bufferLength);

      if (rms > BLOW_THRESHOLD) {
        setHasBlown(true);
        stopListening();
      } else {
        requestAnimationFrame(checkBlowLevel);
      }
    };

    checkBlowLevel();
  };

  const stopListening = () => {
    if (micStreamRef.current) {
      micStreamRef.current.getTracks().forEach((track) => track.stop());
    }
    if (audioContextRef.current) {
      audioContextRef.current.close();
    }
    setIsListening(false);
  };

  useEffect(() => {
    return () => {
      stopListening();
    };
  }, []);

  return {
    isListening,
    hasBlown,
    permissionDenied,
    startListening,
    stopListening,
  };
}

import { useEffect, useState, useRef } from 'react';

interface MicrophoneBlowDetectionOptions {
  threshold?: number;
  sensitivity?: number;
  onBlow?: () => void;
}

export function useMicrophoneBlowDetection({
  threshold = 100,
  sensitivity = 0.8,
  onBlow
}: MicrophoneBlowDetectionOptions = {}) {
  const [isListening, setIsListening] = useState(false);
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [audioLevel, setAudioLevel] = useState(0);
  
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const microphoneRef = useRef<MediaStreamAudioSourceNode | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const blowTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const startListening = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;
      
      const audioContext = new AudioContext();
      const analyser = audioContext.createAnalyser();
      const microphone = audioContext.createMediaStreamSource(stream);
      
      analyser.smoothingTimeConstant = 0.3;
      analyser.fftSize = 256;
      
      microphone.connect(analyser);
      
      audioContextRef.current = audioContext;
      analyserRef.current = analyser;
      microphoneRef.current = microphone;
      
      setHasPermission(true);
      setIsListening(true);
      
      analyzeAudio();
    } catch (error) {
      console.error('Error accessing microphone:', error);
      setHasPermission(false);
    }
  };

  const stopListening = () => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
    }
    
    if (audioContextRef.current && audioContextRef.current.state !== 'closed') {
      audioContextRef.current.close();
    }
    
    if (blowTimeoutRef.current) {
      clearTimeout(blowTimeoutRef.current);
    }
    
    setIsListening(false);
    setAudioLevel(0);
  };

  const analyzeAudio = () => {
    if (!analyserRef.current) return;
    
    const bufferLength = analyserRef.current.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    
    const checkAudio = () => {
      if (!analyserRef.current) return;
      
      analyserRef.current.getByteFrequencyData(dataArray);
      
      // Calculate RMS (Root Mean Square) for better blow detection
      let sum = 0;
      for (let i = 0; i < bufferLength; i++) {
        sum += dataArray[i] * dataArray[i];
      }
      const rms = Math.sqrt(sum / bufferLength);
      
      setAudioLevel(rms);
      
      // Detect blow pattern (sudden spike in audio level)
      if (rms > threshold) {
        // Clear any existing timeout
        if (blowTimeoutRef.current) {
          clearTimeout(blowTimeoutRef.current);
        }
        
        // Set a timeout to call onBlow after sustained audio level
        blowTimeoutRef.current = setTimeout(() => {
          onBlow?.();
        }, 500); // Half second of sustained blow
      }
      
      animationFrameRef.current = requestAnimationFrame(checkAudio);
    };
    
    checkAudio();
  };

  useEffect(() => {
    return () => {
      stopListening();
    };
  }, []);

  return {
    isListening,
    hasPermission,
    audioLevel,
    startListening,
    stopListening
  };
}
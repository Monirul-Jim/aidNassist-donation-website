'use client'

import  { useEffect } from 'react';

const TextToSpeech = ({ text }) => {
  useEffect(() => {
    if ('speechSynthesis' in window) {
      const speech = new SpeechSynthesisUtterance(text);
      speech.lang = 'en-US'; 
      speech.volume = 1; 
      speech.rate = 1; 
      window.speechSynthesis.speak(speech);
    }
  }, [text]);

  return null;
};

export default TextToSpeech;
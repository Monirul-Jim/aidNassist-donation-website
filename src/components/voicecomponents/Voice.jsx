'use client'
import { VoicePlayer } from 'react-voice-components';

export default function VoiceDemo({ text }) {
  const handleSpeechEnd = () => {
    // Add your code here to handle the speech ending event.
    console.log('Speech synthesis ended.');
  };

  return (
    <div>
      <VoicePlayer play text={text} onEnd={handleSpeechEnd} />
    </div>
  );
}
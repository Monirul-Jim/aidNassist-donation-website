'use client'
import { VoicePlayer } from 'react-voice-components';

export default function VoiceDemo({text}) {
    
  return (
    <div>
      <VoicePlayer play text={text} />
    </div>
  );
}

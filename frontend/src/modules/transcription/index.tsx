import React, {useState} from 'react';
export const TranscriptionView: React.FC = () => {
  const [filter,setFilter]=useState('high');
  return <div><h2>TRANSCRIPTION - Transcription - Whisper, ASR, diarizatio</h2><p>Whisper</p></div>
};
export default TranscriptionView;

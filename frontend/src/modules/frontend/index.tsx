import React, {useState} from 'react';
export const FrontendView: React.FC = () => {
  const [filter,setFilter]=useState('high');
  return <div><h2>FRONTEND - Frontend - pipeline editor, waveform, pl</h2><p>pipeline editor</p></div>
};
export default FrontendView;

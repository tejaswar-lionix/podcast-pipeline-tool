import React, {useState} from 'react';
export const ApiView: React.FC = () => {
  const [filter,setFilter]=useState('high');
  return <div><h2>API - API - REST for ingest, transcribe, pipel</h2><p>POST ingest</p></div>
};
export default ApiView;

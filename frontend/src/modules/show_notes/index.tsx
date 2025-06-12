import React, {useState} from 'react';
export const Show_notesView: React.FC = () => {
  const [filter,setFilter]=useState('high');
  return <div><h2>SHOW_NOTES - Show notes - drafting, summary, timestam</h2><p>drafting</p></div>
};
export default Show_notesView;

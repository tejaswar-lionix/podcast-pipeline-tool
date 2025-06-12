import React, {useState} from 'react';
export const StorageView: React.FC = () => {
  const [filter,setFilter]=useState('high');
  return <div><h2>STORAGE - Storage - artifacts, versions, caching, </h2><p>artifacts</p></div>
};
export default StorageView;

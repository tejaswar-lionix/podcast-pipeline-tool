import React, {useState} from 'react';
export const AnalyticsView: React.FC = () => {
  const [filter,setFilter]=useState('high');
  return <div><h2>ANALYTICS - Analytics - listen counts, retention, dr</h2><p>listen counts</p></div>
};
export default AnalyticsView;

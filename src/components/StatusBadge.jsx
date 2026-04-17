import React from 'react';

const StatusBadge = ({ state, colorClass, dotColor }) => {
  return (
    <span className={`inline-flex items-center text-xs font-semibold ${colorClass}`}>
      <span className={`w-2 h-2 rounded-full mr-2 ${dotColor}`}></span>
      {state}
    </span>
  );
};

export default StatusBadge;

import React from 'react';

const ZaptBadge = () => {
  return (
    <div className="fixed bottom-4 left-4 z-50">
      <a 
        href="https://www.zapt.ai" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-xs font-medium text-gray-600 bg-white px-2 py-1 rounded-md shadow-md hover:bg-gray-100 transition-colors"
      >
        Made on ZAPT
      </a>
    </div>
  );
};

export default ZaptBadge;
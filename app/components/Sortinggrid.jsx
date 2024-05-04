import React from 'react';

const IconGrid = ({ items }) => {
  return (
    <div className="grid grid-cols-3 gap-4 sm:grid-cols-1 md:grid-cols-3 lg:flex justify-between pt-10">
      {items.map((item) => (
        <div key={item.id} className="flex items-center justify-center p-4 rounded-md bg-gray-100 hover:bg-gray-200">
          <i className="text-2xl text-blue-500 mr-2">
            {item.icon} 
          </i>
          <p className="text-sm font-medium">{item.title}</p>
        </div>
      ))}
    </div>
  );
};

export default IconGrid;


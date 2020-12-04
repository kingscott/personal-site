import React from 'react';
import { Link } from 'react-router-dom';

const FolderSelector = ({ data, currentFolder }) => {
  return (
    <div className="flex flex-row md:flex-col flex-wrap w-4/5 self-center md:self-end items-center md:items-end">
      {data && data.length > 0 && (
        data.map((f, i) => {
          let formattedName = f.split('-').join(' ');
          return (
            <div
              key={i}
              className={`folder-name-container block transform transition-colors duration-200 hover:text-gray-900 ${currentFolder === f ? 'text-gray-900' : 'text-gray-500'} text-base md:text-right capitalize cursor-pointer mx-3 md:mx-0 md:my-2`}
            >
              <Link to={`/${f}`}>{formattedName}</Link>
            </div>
          );
        })
      )}
    </div>
  );
};

export default FolderSelector;

import React from 'react';
import { Link } from 'react-router-dom';
import awsApi from 'Utilities/aws';

const FolderSelector = ({ data, currentFolder }) => {
  return (
    <div className="flex flex-col items-end">
      {data && data.length > 0 && (
        data.map((f, i) => {
          let formattedName = f.split('-').join(' ');
          return (
            <div
              key={i}
              className={`block transform transition-colors duration-200 hover:text-gray-900 ${currentFolder === f ? 'text-gray-900' : 'text-gray-500'} text-base text-right capitalize cursor-pointer my-2`}
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

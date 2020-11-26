'use strict';

import React from 'react';

const Image = () => {
  // Only specify the first to not have margin on top
  return (
    <div className="flex flex-col">
      <div className="bg-red-800 w-72 h-96 my-8"></div>
      <div className="bg-red-800 w-72 h-96 my-8"></div>
      <div className="bg-red-800 w-72 h-96 my-8"></div>
    </div>
  );
};

export default Image;

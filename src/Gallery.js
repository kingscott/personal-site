'use strict';

import React, { Component, useState } from 'react';
import FolderSelector from './FolderSelector';
import ImageLayout from './ImageLayout';
import Nameplate from './Nameplate';

const Gallery = () => {
  // Handles whether or not there are images loaded
  // const []

  // Handles what folder is selected
  // const [selectedFolder, setSelectedFolder] = useState(null);

  // Fetches the folders
  const [availableFolders, setAvailableFolders] = useState([]);

  return (
    <div className="container mx-auto flex flex-row">
      <div className="flex flex-col w-1/5 my-12 ml-12 mr-6">
        <Nameplate />
        <FolderSelector data={availableFolders} setData={setAvailableFolders} />
      </div>
      <div className="flex w-4/5 my-12 ml-6 mr-6 justify-center">
        <ImageLayout />
      </div>
    </div>
  );
};

export default Gallery;

'use strict';

import React, { Component, useState, useEffect } from 'react';
import FolderSelector from './FolderSelector';
import ImageLayout from './ImageLayout';
import Nameplate from './Nameplate';

const Gallery = () => {
  // Fetches the folders
  const [availableFolders, setAvailableFolders] = useState([]);

  // Setting selected folder
  const [selectedFolder, setSelectedFolder] = useState(null);

  // Handles image state
  const [images, setImages] = useState([]);

  return (
    <div className="container mx-auto flex flex-row">
      <div className="flex flex-col w-1/5 my-12 ml-12 mr-6">
        <Nameplate />
        <FolderSelector
          data={availableFolders}
          setData={setAvailableFolders}
          selectedFolder={selectedFolder}
          setSelectedFolder={setSelectedFolder}
        />
      </div>
      <div className="flex w-4/5 my-12 ml-6 mr-12 justify-center">
        <ImageLayout
          selectedFolder={selectedFolder}
          data={images}
          setData={setImages}
        />
      </div>
    </div>
  );
};

export default Gallery;

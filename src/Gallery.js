'use strict';

import React, { Component, useState, useEffect } from 'react';
import FolderSelector from './FolderSelector';
import ImageLayout from './ImageLayout';
import Nameplate from './Nameplate';
import awsApi from 'Utilities/aws';

const Gallery = ({ match, ...props }) => {
  const { params: { folderName } } = match;

  // Handles folder logic
  const [availableFolders, setAvailableFolders] = useState([]);

  // Handles image state
  const [images, setImages] = useState([]);

  // Fetch folders
  useEffect(async () => {
    let availableFolders = await awsApi.listAvailableFolders();
    setAvailableFolders(availableFolders);
  }, []);

  return (
    <div className="container mx-auto flex flex-row">
      <div className="flex flex-col w-1/5 my-12 ml-12 mr-6">
        <Nameplate />
        <FolderSelector
          data={availableFolders}
          currentFolder={folderName}
        />
      </div>
      <div className="flex w-4/5 my-12 ml-6 mr-12 justify-center">
        <ImageLayout
          data={images}
          setData={setImages}
          currentFolder={folderName}
        />
      </div>
    </div>
  );
};

export default Gallery;

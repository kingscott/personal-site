import React, { useState, useEffect } from 'react';
import FolderSelector from './FolderSelector';
import ImageLayout from './ImageLayout';
import Nameplate from './Nameplate';
import awsApi from 'Utilities/aws';

const Gallery = ({ match, ...props }) => {
  // Grab the name of the selected folder on the
  const { params: { folderName } } = match;

  // Handles folder logic
  const [availableFolders, setAvailableFolders] = useState([]);

  // Handles image state
  const [images, setImages] = useState([]);

  // Fetch folders on page load
  useEffect(async () => {
    let availableFolders = await awsApi.listAvailableFolders();
    setAvailableFolders(availableFolders);
  }, []);

  return (
    <div className="container mx-auto flex flex-col md:flex-row">
      <div className="flex flex-col md:flex-col w-screen md:w-1/5 my-4 md:my-12 md:ml-12 md:mr-6">
        <Nameplate />
        <FolderSelector
          data={availableFolders}
          currentFolder={folderName}
        />
      </div>
      <div className="flex w-screen md:w-4/5 my-4 md:my-12 mx-0 md:ml-6 md:mr-12 justify-center">
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

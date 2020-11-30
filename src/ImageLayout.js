import React, { useEffect, useState } from 'react';
import Image from './Image';
import awsApi from 'Utilities/aws';

const ImageLayout = ({ data, setData, currentFolder }) => {
  useEffect(async () => {
    if (currentFolder) {
      let images = await awsApi.getImagesInFolder(currentFolder);
      setData(images);
    }
  }, [currentFolder]);

  return (
    <div>
      {data.length > 0 ? (
        data.map((imgSrc, i) => {
          return (
            <Image
              key={i}
              src={imgSrc}
            />
          );
        })
      ) : (
        <div>{'No images in the selected folder.'}</div>
      )}
    </div>
  );
};

export default ImageLayout;

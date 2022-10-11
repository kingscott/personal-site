import React, { useEffect } from 'react';
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
    <div className="flex flex-col items-center w-5/6 md:w-3/5">
      {data.length > 0 && (
        data.map((imgSrc, i) => {
          return (
            <Image
              key={i}
              src={imgSrc}
            />
          );
        })
      )}
    </div>
  );
};

export default ImageLayout;

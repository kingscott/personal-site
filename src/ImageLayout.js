'use strict';

import React, { Component, useEffect, useState } from 'react';
import Image from './Image';
import awsApi from 'Utilities/aws';

const ImageLayout = props => {
  let { data: images, setData, selectedFolder } = props;

  useEffect(async () => {
    if (selectedFolder) {
      let images = await awsApi.getImagesInFolder(selectedFolder);
      setData(images);
    }
  }, [selectedFolder]);

  return (
    <div>
      {images.length && selectedFolder !== null > 0 ? (
        images.map((imgSrc, i) => {
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

import React from 'react';

const Image = props => {
  // Only specify the first to not have margin on top
  return (
    <img src={props.src} alt=""/>
  );
};

export default Image;

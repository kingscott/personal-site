import React from 'react';

const Image = props => {
  return (
    <div className="image-container my-6 md:my-12">
      <img src={props.src} alt="" />
    </div>
  );
};

export default Image;

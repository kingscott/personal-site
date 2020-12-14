import React from 'react';

const Image = props => {
  return (
    <div className="image-container flex justify-center w-5/6 md:w-3/5 h-auto my-6 md:my-12">
      <img src={props.src} alt="" />
    </div>
  );
};

export default Image;

import React from 'react';

const Image = props => {
  return (
    <div className="image-container w-5/6 md:w-3/5 my-3 md:my-6">
      <img src={props.src} alt="" />
    </div>
  );
};

export default Image;

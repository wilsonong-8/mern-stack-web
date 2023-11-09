import Wrapper from '../../assets/wrappers/Gallery';
import { useEffect, useState } from 'react';

const EditImages = ({ images = [], onDeleteImage }) => {
  return (
    <Wrapper>
      <div className="gallery2">
        {images.map((image, index) => (
          <div key={index} className="image-container">
            <img src={image} alt={image.filename} className="img" />
            <div className="delete-overlay" onClick={() => onDeleteImage(image)}>
              <span>&times;</span>
            </div>
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

export default EditImages;

import Wrapper from '../../assets/wrappers/Gallery';
import { useState } from 'react';

const ProductImages = ({ images = [] }) => {
  const [main, setMain] = useState(images[0]);

  return (
    <Wrapper>
      <main>
      <img src={main} alt="main" className="main" />
      <div className="gallery">
        {images.map((image, index) => {
          return (
            <img
              src={image}
              alt={image.filename}
              key={index}
              onClick={() => setMain(images[index])}
            />
          );
        })}
      </div>
      </main>
    </Wrapper>
  );
};
export default ProductImages;

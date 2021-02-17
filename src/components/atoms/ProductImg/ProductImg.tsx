import React, { FC } from 'react';

import { PropsProductImage } from '../../../models/Product';

const ProductImg: FC<PropsProductImage> = ({ imageSrc }) => {
  return (
    <img
      className="destination-card-image"
      data-testid="imageID"
      src={imageSrc}
      alt="description of image"
    />
  );
};

export default ProductImg;

import React, { FC } from 'react';

import { ProductImage } from './ProductImgStyles';
import { PropsProductImage } from '../../../models/Product';

const ProductImg: FC<PropsProductImage> = ({ imageSrc }) => {
  return (
    <>
      <ProductImage src={imageSrc} alt="Product Photo" />
    </>
  );
};

export default ProductImg;

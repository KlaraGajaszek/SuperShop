import React from 'react';

import { ProductImage } from './ProductImgStyles';
import { PropsProductImage } from '../../../models/Product';

class ProductImg extends React.Component<PropsProductImage> {
  render() {
    const { imageSrc } = this.props;
    return (
      <>
        <ProductImage
          data-testid="imageID"
          src={imageSrc}
          alt="Product Photo"
        />
      </>
    );
  }
}

export default ProductImg;

import React, { FC } from 'react';
import { Product } from './BoxProductStyles';
import ProductImg from '../../atoms/ProductImg/ProductImg';
import { PropsProduct } from '../../../models/Product';
import Content from '../../atoms/Content/Content';
import data from '../../../utils/data';

const BoxProduct: FC<PropsProduct> = (props) => {
  return (
    <>
      {data.map((product) => (
        <Product>
          <ProductImg imageSrc={product.imageSrc} />
          <Content />
        </Product>
      ))}
    </>
  );
};

export default BoxProduct;

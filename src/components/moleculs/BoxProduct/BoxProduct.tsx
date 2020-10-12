import React from 'react';
import { Product, Tags, ImgBox, DescriptionBox } from './BoxProductStyles';
import ProductImg from '../../atoms/ProductImg/ProductImg';
import Content from '../../atoms/Content/Content';
import data from '../../../utils/data';
import Tag from '../../atoms/Tag/Tag';

const BoxProduct = () => {
  return (
    <>
      {data.map((product, index) => (
        <Product key={index}>
          <ImgBox>
            <ProductImg imageSrc={product.imageSrc} />
          </ImgBox>
          <DescriptionBox>
            <Content
              name={product.name}
              description={`${product.description.substring(0, 100)}...`}
            />
            <Tags>
              {product.tags.map((tag, index) => (
                <Tag key={index} title={tag} />
              ))}
            </Tags>
          </DescriptionBox>
        </Product>
      ))}
    </>
  );
};

export default BoxProduct;

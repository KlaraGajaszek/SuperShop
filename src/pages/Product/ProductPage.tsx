import React from 'react';
import { Box, ImgBox, TitleBox, Title, BoxWrapper } from './ProductPageStyles';
import Tag from '../../components/atoms/Tag/Tag';
import ProductImg from '../../components/atoms/ProductImg/ProductImg';
import data from '../../utils/data';
import { PropsProduct } from '../../models/Product';

const ProductPage = () => {
  const productData: PropsProduct = data.find((product) => product?.id === 1)!;

  return (
    <BoxWrapper>
      <Box>
        <ProductImg imageSrc={productData.imageSrc} />
        <TitleBox>
          <Title>{productData.name}</Title>
          <Title>{productData.price}</Title>
        </TitleBox>
        <div>{productData.description}</div>
        <ImgBox>
          {productData.tags.map((tag) => (
            <Tag title={tag} />
          ))}
        </ImgBox>
      </Box>
    </BoxWrapper>
  );
};

export default ProductPage;

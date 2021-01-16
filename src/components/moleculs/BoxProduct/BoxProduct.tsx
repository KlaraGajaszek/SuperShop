import React, { FC } from 'react';

import ProductImg from '../../atoms/ProductImg/ProductImg';
import Content from '../../atoms/Content/Content';
import { useHistory } from 'react-router-dom';
import Tag from '../../atoms/Tag/Tag';

import { Card, Tags, ImageData, DescriptionBox } from './BoxProductStyles';

type BoxProductTypesProps = {
  id: number;
  name: string;
  description: string;
  imageSrc: string;
  tags: string[];
  price: number;
};
type BoxProductsTypesProps = BoxProductTypesProps[];

const BoxProduct = ({ data }: any) => {
  const history = useHistory();

  return (
    <>
      {data?.map((product: BoxProductTypesProps, index: number) => (
        <Card
          data-testid={product.id}
          key={product.id}
          onClick={() => {
            history.push(`/products/${product.id}`);
          }}
        >
          <ImageData>
            <ProductImg imageSrc={`${product.imageSrc}?${product.id}`} />
          </ImageData>
          <DescriptionBox>
            <Content
              name={product.name}
              description={`${product.description.substring(0, 100)}...`}
            />
            <Tags>
              {product.tags.map((tag: string, index: number) => (
                <Tag key={index} title={tag} />
              ))}
            </Tags>
          </DescriptionBox>
        </Card>
      ))}
    </>
  );
};

export default BoxProduct;

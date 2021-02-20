/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { FC } from 'react';

import Content from '../../atoms/Content/Content';
import { useHistory } from 'react-router-dom';
import Tag from '../../atoms/Tag/Tag';

import { DescriptionBox } from './BoxProductStyles';

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
        <div
          className="rounded  border-4 border-light-blue-500 border-opacity-100  shadow-md  cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
          data-testid={`product${product.id}`}
          key={product.id}
          onClick={() => {
            history.push(`/products/${product.id}`);
          }}
        >
          <img
            className="h-32 sm:h-48 w-full object-cover"
            data-testid="imageID"
            src={`${product.imageSrc}?${product.id}`}
            alt="description of image"
          />

          <div className="p-5">
            <Content
              name={product.name}
              description={`${product.description.substring(0, 100)}...`}
            />
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3">
              {product.tags.map((tag: string, index: number) => (
                <div
                  key={index}
                  className=" top-0 ml-2 mt-2 p-2 bg-secondary-100 text-secondary-200 text-xs uppercase font-bold rounded-full indigoss"
                >
                  <Tag title={tag} />
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default BoxProduct;

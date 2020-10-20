import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';

import ProductImg from '../../atoms/ProductImg/ProductImg';
import Content from '../../atoms/Content/Content';
import Tag from '../../atoms/Tag/Tag';
import data from '../../../utils/data';
import { PropsProduct } from '../../../models/Product';
import { Product, Tags, ImgBox, DescriptionBox } from './BoxProductStyles';

class BoxProduct extends React.Component<RouteComponentProps, PropsProduct> {
  render() {
    const { history } = this.props;
    return (
      <>
        {data.map((product, index) => (
          <Product
            key={index}
            onClick={() => {
              history.push(`/products/${product.id}`);
            }}
          >
            <ImgBox>
              <ProductImg imageSrc={`${product.imageSrc}?${product.id}`} />
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
  }
}

export default withRouter(BoxProduct);

import React, { useState } from 'react'

import { Box, ImgBox, TitleBox, Title, BoxWrapper } from './ProductPageStyles'
import Tag from '../../components/atoms/Tag/Tag'
import ProductImg from '../../components/atoms/ProductImg/ProductImg'
import axios from 'axios'
import { PropsProduct } from '../../models/Product'

const getProducts = () => {
  axios
    .get('http://localhost:3001/api/products')
    .then((response) => console.log(response.data))
    .catch((e) => console.log(e))
}

const ProductPage = () => {
  const [products, setProducts] = useState<any>()
  // const productData: PropsProduct = products.find((product) => product?.id === 1)!
  setProducts(getProducts())
  return (
    <BoxWrapper>
      {/* <Box>
        <ProductImg imageSrc={productData.imageSrc} />
        <TitleBox>
          <Title>{productData.name}</Title>
          <Title>{productData.price}</Title>
        </TitleBox>
        <div>{productData.description}</div>
        <ImgBox className="min-h-screen justify-center flex">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-3">
            {productData.tags.map((tag) => (
              <Tag title={tag} />
            ))}
          </div>
        </ImgBox>
      </Box> */}
    </BoxWrapper>
  )
}

export default ProductPage

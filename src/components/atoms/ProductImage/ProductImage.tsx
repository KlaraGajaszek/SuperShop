import React, { FC } from 'react'

type ProductImageType = {
  title: string
  imgSrc: string
}
export const ProductImage: FC<ProductImageType> = ({ title, imgSrc }) => {
  return (
    <div className="w-full md:w-1/3 p-2 mb-12">
      <div className="block mb-8 bg-black hover:bg-gray-700">
        <img src={imgSrc} className="w-full h-64 object-cover opacity-75" />
        {title}
      </div>
    </div>
  )
}

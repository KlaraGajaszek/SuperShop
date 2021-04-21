import React, { useEffect, useState } from 'react'

import { BoxProduct } from '../../components/moleculs/BoxProduct/BoxProduct'
import axios from 'axios'

export type ModelFormType = {
  modalVisible: boolean
}

// add products
const StartView = () => {
  const [products, setProducts] = useState<any>()

  const reqBody: any = {
    test: 'ggggg',
  }
  useEffect(() => {
    axios
      .get('http://localhost:3001/api/products', reqBody)
      .then((response) => setProducts(response.data))
      .catch((e) => console.log(e))
  }, [])
  const getOnlyFirst10 =
    products?.length < 10 ? products : products?.slice(0, 10)
  return (
    <>
      <div className="min-h-screen mt-5 bg-white py-12 px-6 lg:px-24">
        <h1>OUR PRODUCTS TEST</h1>
        <div className="flex-2  flex flex-row  ">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-1 md:grid-cols-3 md:gap-9">
            <BoxProduct data={getOnlyFirst10} />
          </div>
        </div>
      </div>
      <div className="bg-white py-12 px-6 lg:px-24">
        <div className="flex flex-wrap -mx-2">
          <div className="w-full md:w-1/3 p-2 mb-12">
            <a href="#" className="block mb-8 bg-black hover:bg-gray-700">
              <img
                src="https://images.unsplash.com/photo-1491720731493-223f97d92c21?w-800"
                className="w-full h-64 object-cover opacity-75"
              />
            </a>
            <a
              href="#"
              className="block text-base text-left uppercase tracking-wider text-gray-700"
            >
              Fruit &amp; Herbal Tea
            </a>
          </div>

          <div className="w-full md:w-1/3 p-2 mb-12">
            <a href="#" className="block mb-8 bg-black hover:bg-gray-700">
              <img
                src="https://images.unsplash.com/photo-1542210435-59f90e156f10?w=1000"
                className="w-full h-64 object-cover opacity-75"
              />
            </a>
            <a
              href="#"
              className="block text-base text-left uppercase tracking-wider text-gray-700"
            >
              Homemade Cake
            </a>
          </div>
        </div>

        <div className="py-12">
          <h2 className="text-center uppercase text-2xl lg:text-4xl tracking-wider mb-12">
            About Us
          </h2>

          <p className="text-gray-700 mx-auto max-w-2xl text-center leading-relaxed mb-12">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo.
          </p>
        </div>

        <div className="w-full h-64">
          <img
            src="https://images.unsplash.com/photo-1477064996809-dae46985eee7?w=800"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-wrap pt-12">
          <div className="w-full lg:w-1/2">
            <h3 className="uppercase text-lg lg:text-xl tracking-wider mb-6">
              Contact Us
            </h3>
          </div>
          <div className="w-full lg:w-1/2 mb-12">
            <p className="text-sm text-gray-700 tracking-wider leading-loose mb-6">
              123 Street Name, City A12 B89
              <br />
              Phone 0800 123 456
            </p>
            <a
              href="#"
              className="text-xs uppercase text-gray-500 hover:text-gray-900"
            >
              Send us an email
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default StartView

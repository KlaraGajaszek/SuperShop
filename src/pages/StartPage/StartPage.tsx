import React from 'react'
import axios from 'axios'
import bgImage from '../../assests/bgStartPage.jpg'

const getProducts = () => {
  axios
    .get('http://localhost:3001/api/products')
    .then((response) => console.log(response.data))
    .catch((e) => console.log(e))
}

export const StartPage = () => {
  return (
    <div
      className=" h-screen w-screen opacity-20"
      style={{ backgroundImage: `url(${bgImage})` }}
    ></div>
  )
}

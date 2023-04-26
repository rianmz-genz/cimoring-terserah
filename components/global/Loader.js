import React from 'react'
import {BiLoaderAlt} from "react-icons/bi"
const Loader = () => {
  return (
    <div className='w-full h-screen fixed z-10 bg-black/30 backdrop-blur-sm flex justify-center items-center'>
      <BiLoaderAlt className='text-3xl text-blue-600 animate-spin' />
    </div>
  )
}

export default Loader

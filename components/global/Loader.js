import React from 'react'
import {BiLoaderAlt} from "react-icons/bi"
const Loader = ({indicator}) => {
  return (
    <div className={`${indicator ? "visible opacity-100" : "invisible opacity-0"} transition-all duration-300 w-full h-screen fixed z-10 bg-black/10 backdrop-blur-sm flex justify-center items-center`}>
      <BiLoaderAlt className='text-3xl text-blue-600 animate-spin' />
    </div>
  )
}

export default Loader

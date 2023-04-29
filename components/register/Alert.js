import React from 'react'
import { FiX } from 'react-icons/fi'

const Alert = ({indicator, onClick, value}) => {
  return (
    <div className={`${indicator ? "right-12" : "-right-full"} z-50 fixed top-12  w-2/12  bg-red-400 animate-pulse transition-all duration-700 ease-in-out`}>
    <div className='py-4 px-2 w-full relative'>
      <FiX onClick={onClick} className='text-white absolute top-1 right-1 cursor-pointer' />
    <p className='text-sm text-white'>{value}</p>
    </div>
  </div>
  )
}

export default Alert

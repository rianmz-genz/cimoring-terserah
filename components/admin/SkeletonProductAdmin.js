import React from 'react'

const SkeletonProductAdmin = () => {
  return (
    <div className='w-full flex flex-col space-y-2 h-full'>
    <div className='w-full bg-gray-200 h-5/6 animate-pulse'></div>
    <div className='w-full bg-gray-200 h-6 animate-pulse'></div>
    <div className='w-7/12 bg-gray-200 h-6 animate-pulse'></div>
  </div>
  )
}

export default SkeletonProductAdmin

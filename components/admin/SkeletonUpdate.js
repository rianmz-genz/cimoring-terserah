import React from 'react'

const SkeletonUpdate = () => {
  return (
<div className='flex w-full relative'>
            <div className='w-5/12 bg-gray-200 animate-pulse h-96'></div>
            <div className='w-6/12'>
            <div className='w-full bg-gray-200 animate-pulse h-12 ml-4'></div>
            <div className='w-4/12 bg-gray-200 animate-pulse h-12 ml-4 mt-4'></div>
            <div className='w-full bg-gray-200 animate-pulse h-16 ml-4 mt-4'></div>
            <div className='w-full bg-gray-200 animate-pulse h-12 ml-4 mt-4'></div>
            <div className='w-4/12 bg-gray-200 animate-pulse h-12 ml-4 mt-4'></div>
            <div className='flex mt-4 space-x-4'>
            <div className='w-2/12 bg-gray-200 animate-pulse h-12 ml-4 '></div>
            <div className='w-2/12 bg-gray-200 animate-pulse h-12 ml-4 '></div>
            <div className='w-2/12 bg-gray-200 animate-pulse h-12 ml-4 '></div>
            <div className='w-2/12 bg-gray-200 animate-pulse h-12 ml-4 '></div>
            <div className='w-2/12 bg-gray-200 animate-pulse h-12 ml-4 '></div>
            </div>
            </div>
        </div>
  )
}

export default SkeletonUpdate

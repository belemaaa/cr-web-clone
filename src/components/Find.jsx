import React from 'react'
import crBuilding from '../assets/proj/cr-building.jpeg'
import {RxDotFilled} from 'react-icons/rx'

const Find = () => {
  return (
    <div className='flex flex-col md:flex-row items-center justify-center bg-yellow-500'>
        {/* md screens  */}
        <div className='hidden md:flex flex-col mt-5 ml-44'>
           <p className='pb-4 text-red-700 font-bold text-5xl'>Find your Closest <br/>Restaurant</p>
           <p className='text-white text-3xl mt-2'>Become a Chicken <br/>Republic Franchisee</p>
        </div>
        <div className='hidden md:flex w-1/2 mt-4 mb-5'>
          <img src={crBuilding} className='w-full h-60 ml-10  mr-32' />
        </div>

        {/* sm screens */}
        <div className='md:hidden sm:flex mt-4 mb-2'>
          <img src={crBuilding} className='w-80 h-60' />
        </div>
        <div className='md:hidden sm:flex mx-auto text-justify mb-4'>
           <p className='pb-1 text-red-700 font-bold text-lg text-center'>Find your Closest Restaurant</p>
           <p className='text-white text-xm flex flex-row'>
            <RxDotFilled className='flex justify-between'/>Become a Chicken Republic Franchisee<RxDotFilled/> </p>
        </div>
    </div>
  )
}

export default Find
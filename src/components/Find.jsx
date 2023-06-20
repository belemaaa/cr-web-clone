import React from 'react'
import crBuilding from '../assets/proj/cr-building.jpeg'

const Find = () => {
  return (
    <div className='flex flex-row items-center justify-center bg-yellow-500'>
        <div className='flex flex-col mt-5 ml-44'>
           <p className='pb-4 text-red-700 font-bold text-5xl'>Find your Closest <br/>Restaurant</p>
           <p>Become a Chicken <br/>Republic Franchisee</p>
        </div>
        <div className='flex w-1/2 mt-4 mb-5'>
          <img src={crBuilding} className='w-full h-60 ml-10  mr-32' />
        </div>
    </div>
  )
}

export default Find
import React from 'react'
import ladies from '../assets/proj/ladies.jpg'

const OurPeople = () => {
  return (
    <div className='flex flex-row items-center justify-center my-4 px-0'>
        <div>
            <img src={ladies} className='w-3/4 h-60 ml-32 flex items-start' />
        </div>

        <div className='flex- item-end mr-24 ml-8'>
            <div className=''>
                <p className='text-red-600 text-2xl inline-block text-center border-b-4 border-b-gray-500 mb-4'>OUR PEOPLE</p>
            </div>
            <p className='pt-2 max-w-lg'>
            Behind every delicious, Soulfully Spiced Chicken meal and at the forefront 
            of every great customer experience stands a passionate and committed person. 
            This is why “People Capability Always” is a driving force within our business 
            and the golden thread that runs through everything we do. <br/>
            Read More
            </p>

        </div>
    </div>
  )
}

export default OurPeople
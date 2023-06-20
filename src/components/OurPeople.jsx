import React from 'react'
import ladies from '../assets/proj/ladies.jpg'

const OurPeople = () => {
  return (
    <div className='flex flex-col md:flex-row items-center justify-center my-4 px-0'>
        <div>
            <img src={ladies} className='md:w-3/4 w-80 h-40 md:h-60 md:ml-32 flex items-center md:items-start' />
        </div>

        <div className='md:mr-24 md:ml-8'>
            <div className='w-1/2 ml-20 md:ml-0'>
                <p className='sm:flex sm:items-center sm:justify-between mt-3 md:mt-0 text-red-600 text-2xl md:inline-block 
                text-center border-b-2 border-b-gray-500 mb-4'>OUR PEOPLE</p>
            </div>
            <p className='pt-0 md:pt-2 block text-sm max-w-xs mx-auto text-justify md:mx-0 md:max-w-lg text-gray-500'>
            Behind every delicious, Soulfully Spiced Chicken meal and at the forefront 
            of every great customer experience stands a passionate and committed person. 
            This is why “People Capability Always” is a driving force within our business 
            and the golden thread that runs through everything we do. <br/>
            <a href='' className='hover:text-red-600 font-bold'>Read More...</a>
            </p>

        </div>
    </div>
  )
}

export default OurPeople
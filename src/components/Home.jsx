import React from 'react'
import homePageBanner from '../assets/proj/homePageBanner.jpg'

const Home = () => {
  return (
    <div className=''>
        <img src={homePageBanner} className='top-20 md:top-0' />

        <div className="absolute top-52 left-60 transform -translate-x-1/2 -translate-y-1/2 text-white pt-6">
          <p className="text-3xl font-thin">Enjoy Our Soulfully <br/>Spiced Chicken Meals</p>
        </div>
    </div>
  )
}

export default Home
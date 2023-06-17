import React from 'react'
import homePageBanner from '../assets/proj/homePageBanner.jpg'

const Home = () => {
  return (
    <div className=''>
        <img src={homePageBanner} className='top-20 md:top-0' />

        <div className="absolute top-52 left-60 transform -translate-x-1/2 -translate-y-1/2 text-white p-4">
          <p className="text-2xl font-semibold px-4">ENJOY OUR <br/>SOULFULLY SPICED <br/>CHICKEN MEALS</p>
        </div>
    </div>
  )
}

export default Home
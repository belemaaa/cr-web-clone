import React, { useState } from 'react'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import {RiArrowLeftSLine} from 'react-icons/ri'
import slide1 from '../assets/proj/slide1.jpg'
import slide2 from '../assets/proj/slide2.jpg'
import slide3 from '../assets/proj/slide3.jpg'
import slide4 from '../assets/proj/slide4.jpg'
import slide5 from '../assets/proj/slide5.jpg'
import slide6 from '../assets/proj/slide6.jpg'

const TasteTheLove = () => {

    const images = [slide1, slide2, slide3, slide4, slide5, slide6]
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const goToNextImage = () => {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % images.length
      );
    };

    return (
        <div className='bg-yellow-500 flex flex-col items-center justify-between'>
            <div>
                <p className='text-red-600 py-10 text-4xl font-bold'>TASTE THE LOVE - NEW MEAL DEALS</p>
            </div>

            <div className="w-full h-full flex flex-row items-center justify-center">
                <button
                    className="flex justify-between"
                    onClick={goToNextImage}
                >
                    <RiArrowLeftSLine size={40} />
                </button>

                <img
                    className="w-1/2 mb-10 flex items-center justify-between"
                    src={images[currentImageIndex]}
                    alt="Slideshow Image"
                />
                
                <button
                    className="flex justify-between"
                    onClick={goToNextImage}
                >
                    <MdOutlineKeyboardArrowRight size={40} />
                </button>
            </div>
        </div>
    )
}

export default TasteTheLove
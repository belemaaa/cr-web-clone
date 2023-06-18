import React, {useState} from 'react'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import {RiArrowLeftSLine} from 'react-icons/ri'
import news1 from '../assets/proj/news1.jpg'
import news2 from '../assets/proj/news2.png'
import news3 from '../assets/proj/news3.jpg'
import news4 from '../assets/proj/news4.png'
import news5 from '../assets/proj/news5.png'

const ExcitingNews = () => {

    const images=[
       news1,
       news2,
       news3,
       news4,
       news5
    ]
    const slicedImages = images.slice(0, 4)

    const[currentImageIndex, setCurrentImageIndex] = useState(0)

    const goToNextImage = () =>{
        setCurrentImageIndex((prevIndex) =>
            prevIndex + 5 % images.length
        )
    };
    const goToPreviousImage = () =>{
        setCurrentImageIndex((prevIndex) => {
            if(prevIndex === 0){
                return images.length - 1
            }
            else {
                return prevIndex - 1 
            }
        })
    };

    return (
        <div className='flex flex-col items-center justify-between bg-white'>
            <div className=''>
                <p className='text-2xl md:text-4xl text-red-700 font-bold my-6'>EXCITING NEWS</p>
            </div>
            <div className='border w-1/2 md:w-3/4 border-yellow-600 border-y-2'></div>

            <div className='w-full h-full flex-row items-center justify-center'>
                <ul className='flex flex-row mx-20 my-8'>
                    <button
                        className="flex justify-between mt-16"
                        onClick={goToPreviousImage}
                    >
                        <RiArrowLeftSLine size={40} className='text-red-500'/>
                    </button>

                    {/* set image set - for md screens */}
                    {slicedImages.map(() => (
                        <li className='hidden md:flex mx-4 mb-10'>
                            <img src={images[currentImageIndex]} className='transition-all duration-300 
                            ease-in-out filter brightness-100 hover:brightness-50 hover:scale-105'/>
                        </li>
                    ))}

                    {/* set image set for sm screens */}
                    <img
                        className="md:hidden sm:flex w-3/4 mb-10 flex items-center justify-between rounded-2xl shadow-2xl"
                        src={images[currentImageIndex]}
                        alt="Slideshow Image"
                    />    
                    <button
                        className="flex justify-between mt-16"
                        onClick={goToNextImage}
                    >
                        <MdOutlineKeyboardArrowRight size={40} className='text-red-500' />
                    </button>
                </ul>

            </div>
        </div>
        // comment
    )
}

export default ExcitingNews
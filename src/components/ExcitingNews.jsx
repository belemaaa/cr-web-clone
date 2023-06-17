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
                <p className='text-4xl text-red-700 font-bold my-6'>EXCITING NEWS</p>
            </div>
            <div className='border w-3/4 border-yellow-600 border-y-2'></div>

            <div className=' flex-row items-center justify-center'>
               <button
                    className="flex justify-between"
                    onClick={goToPreviousImage}
                >
                    <RiArrowLeftSLine size={40} className='text-red-500'/>
                </button>
                <ul className='grid grid-cols-4 mx-32 my-8'>
                    {slicedImages.map(() => (
                        <li className='mx-4'>
                            <img src={images[currentImageIndex]} className='transition-all duration-300 
                            ease-in-out filter brightness-100 hover:brightness-50 hover:scale-105'/>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default ExcitingNews
import React, {useState} from 'react'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import {RiArrowLeftSLine} from 'react-icons/ri'
import news1 from '../assets/proj/news1.jpg'
import news2 from '../assets/proj/news2.png'
import news3 from '../assets/proj/news3.jpg'
import news4 from '../assets/proj/news4.png'
import news5 from '../assets/proj/news5.png'

const ExcitingNews = () => {

    const[currentImageIndex, setCurrentImageIndex] = useState(0)

    // set array for medium screen images
    const mdImages=[
       {currentImageIndex: 1,  image:news1},
       {currentImageIndex: 2,  image:news2},
       {currentImageIndex: 3,  image:news3},
       {currentImageIndex: 4,  image:news4},
       {currentImageIndex: 5,  image:news5}
    ]
    const slicedImages = mdImages.slice(0, 4)

    // set array for small screen images
    const smImages = [news1, news2, news3, news4, news5]

    // set arrow effects for small screens
    const goToNextImage = () =>{
        setCurrentImageIndex((prevIndex) =>
            (prevIndex + 1) % smImages.length
        )
    };
    const goToPreviousImage = () =>{
        setCurrentImageIndex((prevIndex) => {
            if(prevIndex === 0){
                return smImages.length - 1
            }
            else {
                return prevIndex - 1 
            }
        })
    };

    // set arrow effects for md and lg screens
    const nextImage = () =>{
        setCurrentImageIndex((news4) =>
            (news4[currentImageIndex] + 1) % mdImages.length
        )
    }
    const previousImage = () =>{
        setCurrentImageIndex((prevIndex) => {
            if(prevIndex === 0){
                return mdImages.length - 1
            }
            else {
                return prevIndex - 1 
            }
        })
    }

    return (
        <div className='flex flex-col items-center justify-between bg-white'>
            <div className=''>
                <p className='text-3xl md:text-4xl text-red-700 font-bold mt-3 mb-2 md:my-6'>EXCITING NEWS</p>
            </div>
            <div className='border w-3/4 border-yellow-600 border-y-2'></div>

            <div className='w-full h-full flex-row items-center justify-center'>
                <ul className='flex flex-row items-center justify-center md:mx-20 my-8'>
                    <button
                        className="flex justify-between mb-10"
                        onClick={goToPreviousImage}
                    >
                        <RiArrowLeftSLine size={40} className='text-red-500'/>
                    </button>

                    {/* set image set - for md screens */}
                    {slicedImages.map(({currentImageIndex, image}) => (
                        <li key={currentImageIndex} className='hidden md:flex mx-4 mb-10'>
                            <img src={image} className='transition-all duration-300 
                            ease-in-out filter brightness-100 hover:brightness-50 hover:scale-105'/>
                        </li>
                    ))}

                    {/* set image set for sm screens */}
                    <img
                        className="md:hidden sm:flex w-80 mt-[-4] mb-0 flex items-center justify-center shadow-xl"
                        src={smImages[currentImageIndex]}
                        alt="Slideshow Image"
                    />    
                    <button
                        className="flex justify-between mb-10"
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
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
        {id:1, image:{news1}},
        {id:2, image:{news2}},
        {id:3, image:{news3}},
        {id:4, image:{news4}},
        {id:5, image:{news5}},
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

            <div>
                
            </div>
        </div>
    )
}

export default ExcitingNews
import React, { useState } from 'react'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import {RiArrowLeftSLine} from 'react-icons/ri'
import slide1 from '../assets/proj/slide1.jpg'
import slide2 from '../assets/proj/slide2.jpg'
import slide3 from '../assets/proj/slide3.jpg'
import slide4 from '../assets/proj/slide4.jpg'
import slide5 from '../assets/proj/slide5.jpg'
import slide6 from '../assets/proj/slide6.jpg'

const TasteTheLove = (props) => {

    const images = props.images
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // set functions to handle arrow clicks
    const goToNextImage = () => {
        setCurrentImageIndex((prevIndex) =>
            (prevIndex + 1) % images.length
        );
    };
    const goToPreviousImage = () => {
        setCurrentImageIndex((prevIndex) => {
            if (prevIndex === 0) {
                return images.length -1

            }
            else {
                return prevIndex - 1;
            }
        })
    };

    return (
        <div className={'flex flex-col items-center justify-between' + " " + props.bgColor}>
            <div>
                <p className={'pt-8 md:pt-10 pb-3 md:pb-7 text-xl lg:text-4xl font-bold' + " " + props.titleColor}>{props.title}</p>
            </div>

            <div className="sm:w-full h-full flex flex-row items-center justify-center md:mx-12">
                <button
                    className="flex justify-between"
                    onClick={goToPreviousImage}
                >
                    <RiArrowLeftSLine size={40} className={'' + " " + props.leftArrow}/>
                </button>

                <img
                    className="w-80 md:w-3/4 mb-5 md:mb-10 flex items-center justify-between rounded-2xl shadow-2xl"
                    src={images[currentImageIndex]}
                    alt="Slideshow Image"
                />

                <button
                    className="flex justify-between"
                    onClick={goToNextImage}
                >
                    <MdOutlineKeyboardArrowRight size={40} className={'' + " " + props.rightArrow} />
                </button>
            </div>
        </div>
    )
}

export default TasteTheLove
import React from 'react'
import bannerIcon1 from '../assets/proj/bannerIcon1.png'
import bannerIcon2 from '../assets/proj/bannerIcon2.png'
import bannerIcon3 from '../assets/proj/bannerIcon3.png'
import bannerIcon4 from '../assets/proj/bannerIcon4.png'
import bannerIcon5 from '../assets/proj/bannerIcon5.png'
import bannerIcon6 from '../assets/proj/bannerIcon6.png'
import bannerIcon7 from '../assets/proj/bannerIcon7.png'

const OrderNow = () => {
    const bannerLinks = [
        {
            id: 1,
            child: (
                <>
                    <img className='w-20' src={bannerIcon1} />
                    <p className='flex items-center justify-between'>Everyday Affordable <br/> Value Meals</p>
                </>
            )
        },
        {
            id: 2,
            child: (
                <>
                    <img className='w-20' src={bannerIcon2} />
                    <p className='flex items-center justify-between'>Soulfully Spiced Fried <br/> Chicken</p>
                </>
            )
        },
        {
            id: 3,
            child: (
                <>
                    <img className='w-20' src={bannerIcon3} />
                    <p className='flex items-center justify-between'>Delicious Rotisserie Chicken</p>
                </>
            )
        },
        {
            id: 4,
            child: (
                <>
                    <img className='w-20' src={bannerIcon4} />
                    <p className='flex items-center justify-between'>Flame Grilled Chicken</p>
                </>
            )
        },
        {
            id: 5,
            child: (
                <>
                    <img className='w-20' src={bannerIcon5} />
                    <p className='flex items-center justify-between'>Burger, Wraps & <br/> ChickWizz</p>
                </>
            )
        },
        {
            id: 6,
            child: (
                <>
                    <img className='w-20' src={bannerIcon6} />
                    <p className='flex items-center justify-between'>Tasty Sides</p>
                </>
            )
        },
        {
            id: 7,
            child: (
                <>
                    <img className='w-20' src={bannerIcon7} />
                    <p className='flex items-center justify-between'>Sweet Treats & <br/> Beverage!</p>
                </>
            )
        },

    ]
    return (
        <div className='bg-red-600 flex flex-col items-center justify-between'>
            <div>
                <p className='text-red-600 hover:bg-white text-2xl bg-yellow-400 rounded-3xl
                py-1 px-6 mt-5 font-bold flex items-center text-center justify-center mb-6 w-60'>ORDER NOW</p>
            </div>

            <div>
                <ul className='flex flex-row mb-6'>
                    {bannerLinks.map(({id, child}) => (
                        <li key={id} className="px-4">
                            <a href="" className=' text-sm'>
                                {child}
                            </a>
                        </li>
                    ))}
                </ul>

            </div>
        </div>
    )
}

export default OrderNow
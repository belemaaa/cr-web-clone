import React from 'react'
import bannerIcon1 from '../assets/proj/bannerIcon1.png'
import bannerIcon2 from '../assets/proj/bannerIcon2.png'
import bannerIcon3 from '../assets/proj/bannerIcon3.png'
import bannerIcon4 from '../assets/proj/bannerIcon4.png'
import bannerIcon5 from '../assets/proj/bannerIcon5.png'
import bannerIcon6 from '../assets/proj/bannerIcon6.png'
import bannerIcon7 from '../assets/proj/bannerIcon7.png'

const OrderNow = () => {
    return (
        <div className='bg-red-600 flex flex-col items-center justify-between'>
            <div>
                <p className='text-red-600 hover:bg-white text-2xl bg-yellow-400 rounded-3xl
                py-1 px-6 mt-5 font-bold flex items-center text-center justify-center mb-6 w-60'>ORDER NOW</p>
            </div>

            <div>
                <ul className='grid grid-cols-7 gap-1 items-center justify-center text-center mb-6'>
                    <li className='px-5'>
                        <a href="">
                            <img className='w-20 ml-6' src={bannerIcon1}/>
                            <p className='flex items-center justify-between text-xs text-white'>Everyday Affordable <br/> Value Meals</p>
                        </a>
                    </li>
                    <li className='px-5'>
                        <a href="">
                            <img className='w-20 ml-6' src={bannerIcon2}/>
                            <p className='flex items-center justify-between text-xs text-white'>Soulfully Spiced Fried <br/> Chicken</p>
                        </a>
                    </li>
                    <li className='px-5'>
                        <a href="">
                            <img className='w-20 ml-8' src={bannerIcon3}/>
                            <p className='flex items-center justify-between text-xs text-white'>Delicious Rotisserie <br/> Chicken</p>
                        </a>
                    </li>
                    <li className='px-5'>
                        <a href="">
                            <img className='w-20 ml-8 mt-0' src={bannerIcon4}/>
                            <p className='flex items-center justify-between text-xs text-white'>Flame Grilled Chicken</p>
                        </a>
                    </li>
                    <li className='px-5'>
                        <a href="">
                            <img className='w-20 ml-2' src={bannerIcon5}/>
                            <p className='flex items-center justify-between text-xs text-white'>Burger, Wraps & <br/> ChickWizz</p>
                        </a>
                    </li>
                    <li className='px-5'>
                        <a href="">
                            <img className='w-20' src={bannerIcon6}/>
                            <p className='flex items-center justify-between text-xs text-white ml-2'>Tasty Sides</p>
                        </a>
                    </li>
                    <li className='px-5'>
                        <a href="">
                            <img className='w-20 ml-1' src={bannerIcon7}/>
                            <p className='flex items-center justify-between text-xs text-white'>Sweet Treats & <br/> Beverage!</p>
                        </a>
                    </li>


                    {/* {bannerLinks.map(({id, child}) => (
                        <li key={id} className="px-4">
                            <a href="" className=' text-sm'>
                                {child}
                            </a>
                        </li>
                    ))} */}
                </ul>

            </div>
        </div>
    )
}

export default OrderNow
import React, { useState, useEffect } from "react";
import logo from '../assets/proj/red-logo.png';
import {FaFacebookSquare} from 'react-icons/fa';
import {BsTwitter} from 'react-icons/bs';
import {RiInstagramFill} from 'react-icons/ri';
import {FaBars, FaTimes} from 'react-icons/fa';

const NavBar = () => {

    const [nav, setNav] = useState(false);

    const navLinks = [
        {
            id: 1,
            link: 'HOME'
        },
        {
            id: 2,
            link: 'MENU'
        },
        {
            id: 3,
            link: 'PROMOS'
        },
        {
            id: 4,
            link: 'STORE LOCATOR'
        },
        {
            id: 5,
            link: 'BRAND'
        },
        {
            id: 6,
            link: 'NEWS'
        },
    ];
    const socialLinks = [
        {
            id: 1,
            child: (
                <>
                    <FaFacebookSquare/>
                </>
            )          
        },
        {
            id: 2,
            child: (
                <>
                    <BsTwitter/>
                </>
            )     
        },
        {
            id: 3,
            child: (
                <>
                    <RiInstagramFill/>
                </>
            )   
        },
    ];

    const [isOpen, setIsOpen] = useState(false);
  
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };


    return (
        <div className={"flex items-center justify-between scroll:bg-gray-500 bg-black bg-opacity-25 fixed w-screen md:w-full md:h-32 px-4 transition-all"}>
            <div className='cursor-pointer ml-2 md:ml-12'>
                <img src={logo} alt='chicken republic logo' className="h-12 md:h-32 md:w-36 md:ml-16" />
            </div>

            <div className="hidden lg:flex">
                <div className='mt-6'>
                    <span
                        className="text-white font-bold cursor-pointer hover:border-b-4 duration-200 pb-5 border-b-red-700"
                        onMouseEnter={toggleDropdown}
                        onMouseLeave={toggleDropdown}

                    >
                        MENU
                    </span>
                    {isOpen && (
                        <div className="absolute bg-gray-300 py-2 w-fit shadow-lg text-xs">
                            <a
                                href="#"
                                className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white"
                            >
                                Everyday Affordable Value Meals
                            </a>
                            <a
                                href="#"
                                className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white"
                            >
                                Fried Chicken
                            </a>
                            <a
                                href="#"
                                className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white"
                            >
                                Flamed Grilled Chicken
                            </a>
                            <a
                                href="#"
                                className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white"
                            >
                                Rotisserie Chicken
                            </a>
                            <a
                                href="#"
                                className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white"
                            >
                                Burger, Wraps & ChickWizz
                            </a>
                            <a
                                href="#"
                                className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white"
                            >
                                Tasty Sides
                            </a>
                            <a
                                href="#"
                                className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white"
                            >
                                Sweets, Treats and Beverages
                            </a>
                        </div>
                    )}
                </div>
            
            </div>

                {/* nav links */}
            {/* <div className='hidden lg:flex'>
                <div>
                    <div>
                        <a
                        href='' className='px-5 cursor-pointer text-white font-bold hover:border-b-4 duration-200 pb-5 border-b-red-700'
                        >
                            HOME                    
                        </a>
                    </div>  
                </div> 

                <div>
                    <span
                        className="px-5 cursor-pointer text-white font-bold duration-200 pb-5 border-b-red-700"
                        onMouseEnter={toggleDropdown}
                        onMouseLeave={toggleDropdown}

                    >
                    MENU
                    </span>    
                    {onHover && (
                        <div className="absolute bg-white mt-2 py-2 w-48 rounded-lg shadow-lg">
                            <a 
                            href="#"
                            className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white">
                                Everyday Affordable Value Meals
                            </a>

                            <a
                            href="#"
                            className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white"
                            >
                                Everyday Affordable Value Meals
                            </a>
                            
                        </div>
                    )} 
                </div>              
            </div> */}
            

                {/* social links */}
            <div className='pr-5 md:px-5'>
                <ul className='flex items-center'>
                    {socialLinks.map(({id, child}) => (
                        <li key={id} className=' py-3 px-5 mb-4 border-b border-b-yellow-500'>
                            <a href='' className='text-2xl text-white hover:text-red-700'>
                                {child}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

                {/* set nav bar */}
            <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 text-yellow-500 md:hidden'>
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />} 
            </div>  

            {nav && (
                <ul className="flex flex-col justify-center items-center w-full h-screen 
                absolute top-0 left-0  bg-red-500 text-white">
                    {navLinks.map(({id, link}) => (
                        <li key={{id}} className='py-5 hover:border-b-4 duration-200 border-b-yellow-400'>
                            <a href='' className='px-5 cursor-pointer font-medium text-white'>
                                {link}
                            </a>
                        </li>
                    ))}
                </ul>
            )} 
        </div>


    )
    }

export default NavBar
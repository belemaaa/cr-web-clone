import React, { useState } from "react";
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
    ]
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
    ]

    return (
        <div>
            <div className='flex items-center justify-between bg-black bg-opacity-25 fixed w-full md:h-32 px-4'>
                <div className='cursor-pointer ml-2 md:ml-12'>
                    <img src={logo} alt='chicken republic logo' className="md:h-32 md:w-36 md:ml-16" />
                </div>

                    {/* nav links */}
                <ul className='hidden md:flex'>
                    {navLinks.map(({id, link}) => (
                        <li key={{id}}>
                            <a href='' className='px-5 cursor-pointer text-white font-bold hover:border-b-4 duration-200 pb-5 border-b-red-700'>
                                {link}
                            </a>
                        </li>
                    ))}
                </ul>

                    {/* social links */}
                <div className='px-16 md:px-5'>
                    <ul className='flex items-center'>
                        {socialLinks.map(({id, child}) => (
                            <li key={id} className=' py-3 px-5'>
                                <a href='' className='text-xl text-red-700'>
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

        </div>
    )
    }

export default NavBar
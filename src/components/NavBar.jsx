import React from 'react';
import logo from '../assets/proj/logo.png';
import {SlSocialFacebook} from 'react-icons/sl';
import {FiTwitter} from 'react-icons/fi';
import {BsInstagram} from 'react-icons/bs';
import {FaBars, FaTimes} from 'react-icons/fa';

const NavBar = () => {

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
                    <SlSocialFacebook/>
                </>
            )
            
        },
        {
            id: 2,
            child: (
                <>
                    <FiTwitter/>
                </>
            )
            
        },
        {
            id: 3,
            child: (
                <>
                    <BsInstagram/>
                </>
            )
            
        },
    ]

    return (
        <div>
            <div className='flex items-center justify-between  bg-white fixed w-full h-40 px-4'>
                <div className='cursor-pointer'>
                    <img src={logo} alt='chicken republic logo' />
                </div>

                <ul className='flex'>
                    {navLinks.map(({id, link}) => (
                        <li key={{id}}>
                            <a href='' className='px-5 cursor-pointer font-medium text-gray-500 hover:border-b pb-8 border-b-red-500'>
                                {link}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className='bg-red-500 rounded-3xl'>
                    <ul className='flex items-center'>
                        {socialLinks.map(({id, child}) => (
                            <li key={id} className=' py-3 px-5'>
                                <a href='' className='text-xl'>
                                    {child}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

        </div>
    )
    }

export default NavBar
import React from 'react'
import logo from '../assets/proj/logo.png'
import {SlSocialFacebook} from 'react-icons/si'
import {FiTwitter} from 'react-icons/fi'
import {BsInstagram} from 'react-icons/bs'
import {FaBars} from 'react-icons/fa'
import {FaTimes} from 'react-icons/fa'

const NavBar = () => {

    const navLinks = [
        {
            id: 1,
            link: 'home'
        },
        {
            id: 2,
            link: 'menu'
        },
        {
            id: 3,
            link: 'promos'
        },
        {
            id: 4,
            link: 'store locator'
        },
        {
            id: 5,
            link: 'brand'
        },
        {
            id: 6,
            link: 'news'
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
            <div>
                <div>
                    <img src={logo} alt='chicken republic logo' />
                </div>

                <ul>
                    {navLinks.map(({id, link}) => (
                        <li key={{id}}>
                            <a
                            href=''
                            className=''
                            >
                                {link}
                            </a>
                        </li>
                    ))}
                </ul>

                <div>
                    <ul>

                    </ul>
                </div>
            </div>

        </div>
    )
    }

export default NavBar
import React, { useState } from 'react'
// import { FaBars, FaTimes } from 'react-icons'
import logo from '../assets/sun.jpg'
import {Link} from 'react-scroll'
import Logo from '../assets/logo.jpg'


const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    return (
        <div className='header'>
            <nav className='navbar'>
                <Link to="welcome" spy={true} smooth={true} offset={-130} duration={900} className="nav-header">
                    <img src={Logo} alt='Logo Image'/>
                </Link>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <Link to="welcome" spy={true} smooth={true} offset={-130} duration={900} onClick={closeMenu}>Home</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="tutorial" spy={true} smooth={true} offset={-130} duration={900} onClick={closeMenu}>Tutorial</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="whyitmatters" spy={true} smooth={true} offset={-130} duration={900} onClick={closeMenu}>Importance</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
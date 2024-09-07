import React from 'react';
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='footer py-4 border-top color-accent-white'>
            <div className="d-flex flex-column flex-lg-row gap-3 align-items-center justify-content-between">
                <p className='fs-4 order-2 order-lg-1'>© 2024 Erin | Crafted with ♡</p>
                <div className="d-flex order-1 order-lg-2">
                    <a href="https://github.com/Naeiri" target="_blank" rel="noopener noreferrer" className='color-accent-white'><FaGithub className='me-3 icon-follow' size={25} /></a>
                    <a href="https://www.linkedin.com/in/erin-julieanna" target="_blank" rel="noopener noreferrer" className='color-accent-white'><BsLinkedin className='icon-follow' size={25} /></a>
                </div>
            </div>
        </div>
    )
}

export default Footer
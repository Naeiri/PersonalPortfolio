import React from 'react';
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { IoMail } from "react-icons/io5";
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import Profile from '../assets/images/ai-image.png';
import './custom.scss';

const Home = () => {
    const [typeEffect] = useTypewriter({
        words: ['Frontend Web Developer', 'UI/UX Designer', 'IT Graduating Student'],
        loop: {},
        typeSpeed: 100,
        deleteSpeed: 40,
    })

    return (
        <div className='home-custom-style'>
            <div className="mt-5 color-primary-blue d-flex flex-column flex-lg-row gap-3 text-center text-lg-start">
                <div className='pt-4 order-2 order-lg-1'>
                    <h2 className='mb-2'>Hi there!</h2>
                    <h2 className='mb-4'>I am <strong className='fs-1 fw-bold'>Erin Julieanna</strong></h2>
                    <h1 className='mb-5 gradient-text fw-bold'>
                        {typeEffect}
                        <Cursor />
                    </h1>
                    <p> Eager to bring innovative ideas and user-centered designs to life | Committed to delivering high-quality, responsive solutions that make a meaningful impact.</p>
{/*                     <button className='mt-5 btn btn-primary-custom'>Download Resume</button> */}
                    <a href="/Erin-Resume.pdf" download="Erin-Resume.pdf" className="mt-5 btn btn-primary-custom">
                        Download Resume
                    </a>
                </div>
                <div className='order-1 order-lg-2'><img src={Profile} alt="AI Profile Cartoon" className='img-custom' /></div>
            </div>

            <div className="custom-margin-top mb-5 text-center">
                <h4 className='mb-4 color-accent-white'>CONNECT WITH ME</h4>
                <div className="d-flex justify-content-center gap-3">
                    <a href="https://github.com/Naeiri" target="_blank" rel="noopener noreferrer" className='d-flex align-items-center justify-content-center icon-circle bg-accent-white'>
                        <FaGithub className='icon-connect color-primary-blue' size={25} />
                    </a>
                    <a href="https://www.linkedin.com/in/erin-julieanna" target="_blank" rel="noopener noreferrer" className='d-flex align-items-center justify-content-center icon-circle bg-accent-white'>
                        <BsLinkedin className='icon-connect color-primary-blue' size={20} />
                    </a>
                    <a href="mailto:yvanahbaconguis@gmail.com" className='d-flex align-items-center justify-content-center icon-circle bg-accent-white'>
                        <IoMail className='icon-connect color-primary-blue' size={25} />
                    </a>
                    <a href="https://maps.app.goo.gl/ARiBZ44sAvy5R3XU6" target="_blank" rel="noopener noreferrer" className='d-flex align-items-center justify-content-center icon-circle bg-accent-white'>
                        <HiLocationMarker className='icon-connect color-primary-blue' size={25} />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Home

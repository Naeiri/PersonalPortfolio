import React from 'react';
import { FaBootstrap, FaDocker, FaHtml5, FaReact, FaSass } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { SiVisualstudiocode } from "react-icons/si";
import { TbBrandVite } from "react-icons/tb";
import './custom.scss';

const About = () => {
    return (
        <div className='about-custom-style color-primary-blue'>
            <div className="mt-5">
                <h3>Get to know <strong>me</strong> more!</h3>
                <div className="mt-4 row gap-3">
                    <div className="col-lg">
                        <p className='mb-0 p-3 border-column rounded'>My full name is <strong>Erin Julieanna S. Butlig</strong> from Mandaluyong City. I studied at the Polytechnic University of the Philippines—Sta. Mesa, Manila, and I am a 22-year-old IT graduate candidate with a deep passion for web development and design.</p>
                    </div>
                    <div className="col-lg">
                        <p className='mb-0 p-3 border-column rounded'>I’m particularly drawn to frontend development, but I also enjoy exploring the world of UI/UX design. While my primary focus is on the frontend, I'm also intrigued by backend development and am eager to soon learn and expand my skills in this area.</p>
                    </div>
                </div>
            </div>

            <div className="custom-margin-top">
                <h3 className='text-center color-accent-white fw-bold'>CORE SKILLS</h3>
                <div className="mt-5 row d-flex gap-5 justify-content-center">
                    <div className="col-6 col-lg-3 d-flex align-items-center justify-content-center core-skills-box rounded bg-primary-blue">
                        <FaHtml5 size={90} className='color-accent-white' />
                    </div>
                    <div className="col-6 col-lg-3 d-flex align-items-center justify-content-center core-skills-box rounded bg-primary-blue">
                        <IoLogoCss3 size={90} className='color-accent-white' />
                    </div>
                    <div className="col-6 col-lg-3 d-flex align-items-center justify-content-center core-skills-box rounded bg-primary-blue">
                        <IoLogoJavascript size={90} className='color-accent-white' />
                    </div>
                    <div className="col-6 col-lg-3 d-flex align-items-center justify-content-center core-skills-box rounded bg-primary-blue">
                        <FaReact size={90} className='color-accent-white' />
                    </div>
                </div>
                <div className="mt-4 row d-flex gap-5 justify-content-center">
                    <div className="col-6 col-lg-3 d-flex align-items-center justify-content-center core-skills-box rounded bg-primary-blue">
                        <FaBootstrap size={90} className='color-accent-white' />
                    </div>
                    <div className="col-6 col-lg-3 d-flex align-items-center justify-content-center core-skills-box rounded bg-primary-blue">
                        <FaSass size={90} className='color-accent-white' />
                    </div>
                    <div className="col-6 col-lg-3 d-flex align-items-center justify-content-center core-skills-box rounded bg-primary-blue">
                        <FiFigma size={90} className='color-accent-white' />
                    </div>
                </div>
            </div>

            <div className="custom-margin-top-bottom">
                <h3 className='text-center color-accent-white fw-bold'>TOOLS & TECHNOLOGIES</h3>
                <div className="mt-5 row d-flex gap-5 justify-content-center">
                    <div className="col-6 col-lg-3 d-flex align-items-center justify-content-center core-skills-box rounded bg-primary-blue">
                        <TbBrandVite size={90} className='color-accent-white' />
                    </div>
                    <div className="col-6 col-lg-3 d-flex align-items-center justify-content-center core-skills-box rounded bg-primary-blue">
                        <FaDocker size={90} className='color-accent-white' />
                    </div>
                    <div className="col-6 col-lg-3 d-flex align-items-center justify-content-center core-skills-box rounded bg-primary-blue">
                        <SiVisualstudiocode size={90} className='color-accent-white' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
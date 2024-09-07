import React from 'react';
import { FaGithub } from "react-icons/fa";
import { RiShareBoxLine } from "react-icons/ri";
import Project1 from '../assets/images/project-one.png';
import Project3 from '../assets/images/project-three.png';
import Project2 from '../assets/images/project-two.png';
import './custom.scss';

const Projects = () => {
    return (
        <div className='projects-custom-style'>
            <div className="mt-5 text-center color-primary-blue">
                <h3 className='fw-bold'>PROJECTS I'VE COMPLETED</h3>
                <p>What I've Accomplished So Far</p>
            </div>

            <div className="my-5">
                <div className='row d-flex justify-content-center gap-5'>
                    <div className="col-6 col-lg-3 card-work rounded">
                        <img src={Project1} alt="Project 1" className='proj-img' />
                        <div className="p-3 color-accent-white rounded-bottom bg-primary-blue">
                            <div className="mb-3 d-flex align-items-center justify-content-between">
                                <p className='fw-bold'>PUP Hymn</p>
                                <h6 className='mb-0'>Nov 2022</h6>
                            </div>
                            <div className="d-flex align-items-center justify-content-between">
                                <a href="https://naeiri.github.io/puphymn/puphymnportfolio.html" target="_blank" rel="noopener noreferrer" className='fs-5 color-accent-white'>Preview<RiShareBoxLine className='ms-1'/></a>
                                <a href="https://github.com/Naeiri/puphymn" target="_blank" rel="noopener noreferrer" className='d-flex color-accent-white'><FaGithub size={23}/></a>
                            </div>
                        </div>
                    </div>

                    <div className="col-6 col-lg-3 card-work rounded">
                        <img src={Project2} alt="Project 2" className='proj-img' />
                        <div className="p-3 color-accent-white rounded-bottom bg-primary-blue">
                            <div className="mb-3 d-flex align-items-center justify-content-between">
                                <p className='fw-bold'>TaskNote</p>
                                <h6 className='mb-0'>Aug 2024</h6>
                            </div>
                            <div className="d-flex align-items-center justify-content-between">
                                <a href="https://task-note-gold.vercel.app" target="_blank" rel="noopener noreferrer" className='fs-5 color-accent-white'>Preview<RiShareBoxLine className='ms-1'/></a>
                                <a href="https://github.com/Naeiri/TaskNote" target="_blank" rel="noopener noreferrer" className='d-flex color-accent-white'><FaGithub size={23}/></a>
                            </div>
                        </div>
                    </div>

                    <div className="col-6 col-lg-3 card-work rounded">
                        <img src={Project3} alt="Project 3" className='proj-img' />
                        <div className="p-3 color-accent-white rounded-bottom bg-primary-blue">
                            <div className="mb-3 d-flex align-items-center justify-content-between">
                                <p className='fw-bold'>Mock Landing Page</p>
                                <h6 className='mb-0'>Sep 2024</h6>
                            </div>
                            <div className="d-flex align-items-center justify-content-between">
                                <a href="https://mock-landing-page-ashy.vercel.app" target="_blank" rel="noopener noreferrer" className='fs-5 color-accent-white'>Preview<RiShareBoxLine className='ms-1'/></a>
                                <a href="https://github.com/Naeiri/MockLandingPage" target="_blank" rel="noopener noreferrer" className='d-flex color-accent-white'><FaGithub size={23}/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
import React from 'react';
import me from '../images/me.jpg';
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai';
import Reveal from 'react-reveal/Reveal';
import SectionTitle from './section_title.js';

export default function About() {
    return (
        <div id='about-container' className='block'>
            <SectionTitle text='ABOUT' justify='center'/>
            <Reveal effect='fade-slide-up'>
                <div id='about-card-container'>
                    <div id='picture-container'>
                        <img id='picture' src={me} alt='headshot'/>
                    </div>
                    <div id='about-body'>
                        <p id='body-description'>
                            Hi, my name is Brandon. I'm a full-stack developer that's skilled with ES6 Javascript,
                            React, SQL, Mongo, and much more. I graduated from UC Santa Barbara with a degree in
                            Communication in September of 2020, and I completed the Full-Stack Web Development Bootcamp
                            with UCLA Extension in February of 2021.
                            <br/>
                            <br/>
                            I enjoy designing aesthetically pleasing front-ends, as well as constructing data models and APIs to 
                            interact with the back-end. Engineering applications provides little problems that help keep my mind active on a daily basis.
                            In my spare time I enjoy cooking, listening to music, taking my car to the track, working out, and researching speculative markets.
                        </p>
                        <div id='about-info'>
                            <div id='about-info-top-row'>
                                <div className='about-info-item'>
                                    <div className='about-info-title'>Email:</div>
                                    <div className='about-info-content'>
                                        brandonpiercy@ucsb.edu
                                    </div>
                                </div>
                                <div className='about-info-item'>
                                    <div className='about-info-title'>Phone:</div>
                                    <div className='about-info-content'>+1 (805) 245-9451</div>
                                </div>
                            </div>
                            <div className='about-social-row'>
                                <div className='about-info-title'>Socials:</div>
                                <div className='about-info-content'>
                                    <a href={'https://github.com/brandonleepiercy'}
                                    target='_blank'
                                    rel='noopener noreferrer'>
                                        <AiFillGithub className='about-social-icon'/>
                                    </a>
                                    <a href={'https://www.linkedin.com/in/brandon-piercy-8713a1130/'}
                                    target='_blank'
                                    rel='noopener noreferrer'>
                                        <AiFillLinkedin className='about-social-icon' />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Reveal>
        </div>
    )
}
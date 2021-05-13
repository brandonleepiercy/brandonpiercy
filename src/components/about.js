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
                        <img id='picture' src={me}/>
                    </div>
                    <div id='about-body'>
                        <p id='body-description'>
                            Baby, hit that backend Birk'
                            Then pour a four of purp'
                            We got his and hers
                            Toolie in that Birkin
                            Close the window curtains (Curtains)
                            Right up in your skirt (Skirt)
                            Take off, hit the curve (Curve)
                            Toolie in that Birkin
                            Baby, hit that backend Birk'
                            Then pour a four of purp'
                            We got his and hers
                            Toolie in that Birkin
                            Close the window curtains (Curtains)
                            Right up in your skirt (Skirt)
                            Take off, hit the curve (Curve)
                            Toolie in that Birkin
                            Baby, hit that backend Birk'
                            Then pour a four of purp'
                            We got his and hers
                            Toolie in that Birkin
                            Close the window curtains (Curtains)
                            Right up in your skirt (Skirt)
                            Take off, hit the curve (Curve)
                            Toolie in that Birkin
                        </p>
                        <div id='about-info'>
                            <div className='about-info-item'>
                                <div className='about-info-title'>Email:</div>
                                <div className='about-info-content'>
                                    brandonpiercy@ucsb.edu
                                    <br/>
                                    b.piercy567@gmail.com
                                </div>
                            </div>
                            <div className='about-info-item'>
                                <div className='about-info-title'>Phone:</div>
                                <div className='about-info-content'>+1 (805) 245-9451</div>
                            </div>
                            <div className='about-social-row'>
                                <div className='about-info-title'>Socials:</div>
                                <div className='about-info-content'>
                                    <a href={'https://github.com/brandonleepiercy'}
                                    target='_blank'
                                    rel='noopnener noreferrer'>
                                        <AiFillGithub className='about-social-icon'/>
                                    </a>
                                    <a href={'https://www.linkedin.com/in/brandon-piercy-8713a1130/'}
                                    target='_blank'
                                    rel='noopnener noreferrer'>
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
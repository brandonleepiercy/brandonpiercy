import React from 'react';
import {AiOutlineRocket, AiFillGithub} from 'react-icons/ai'

export default function ProjectCard(props) {
    if (props.deployLink !== null) {
        return (
            <div className='project-card' style={{backgroundImage: `url(${props.picture})`}}>
                <a href={props.deployLink} target='_blank' rel='noopener noreferrer'>
                    <AiOutlineRocket className='project-link-icon'/>
                </a>
                <a href={props.githubLink} target='_blank' rel='noopener noreferrer'>
                    <AiFillGithub className='project-link-icon'/>
                </a>
            </div>
        )
    } else {
        return (
            <div className='project-card' style={{backgroundImage: `url(${props.picture})`}}>
                <a href={props.githubLink} target='_blank' rel='noopener noreferrer'>
                    <AiFillGithub className='project-link-icon'/>
                </a>
            </div>
        )
    }
}
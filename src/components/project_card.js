import React from 'react';
import {AiOutlineRocket, AiFillGithub, AiFillFolderOpen} from 'react-icons/ai'

export default function ProjectCard(props) {
    if (props.deployLink !== null) {
        return (
            <div className='project-card' style={{backgroundImage: `url(${props.picture})`}}>
                <div className='project-card-body'>
                    <div className='project-icon-row'>
                        <div className='folder-icon-container'>
                            <AiFillFolderOpen className='project-folder-icon'/>
                        </div>
                        <div className='project-icon-container'>
                            <a href={props.deployLink} target='_blank' rel='noopener noreferrer'>
                                <AiOutlineRocket className='project-link-icon'/>
                            </a>
                            <a href={props.githubLink} target='_blank' rel='noopener noreferrer'>
                                <AiFillGithub className='project-link-icon'/>
                            </a>
                        </div>
                    </div>
                    <div className='project-info-row'>
                        <div className='project-title'>{props.name}</div>
                        <div className='project-title-desc-border'/>
                        <div className='project-desc'>{props.description}</div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className='project-card' style={{backgroundImage: `url(${props.picture})`}}>
                <div className='project-card-body'>
                    <div className='project-icon-row'>
                        <div className='folder-icon-container'>
                            <AiFillFolderOpen className='project-folder-icon'/>
                        </div>
                        <div className='project-icon-container'>
                            <a href={props.githubLink} target='_blank' rel='noopener noreferrer'>
                                <AiFillGithub className='project-link-icon'/>
                            </a>
                        </div>
                    </div>
                    <div className='project-info-row'>
                        <div className='project-title'>{props.name}</div>
                        <div className='project-title-desc-border'/>
                        <div className='project-desc'>{props.description}</div>
                    </div>
                </div>
            </div>
        )
    }
}
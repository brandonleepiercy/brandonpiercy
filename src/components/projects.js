import React from 'react';
import ProjectCard from './project_card.js';
import projectItems from '../assets/project-items.js';
import SectionTitle from './section_title.js';

export default function Projects() {
    return (
        <div id='projects-container' className='block'>
            <SectionTitle text='PROJECTS'/>
            <div id='projects-group'>
                {
                    projectItems.map((project, index) => {
                        return <ProjectCard key={index} name={project.name} description={project.description} picture={project.picture} deployLink={project.deployLink} githubLink={project.githubLink}/>
                    })
                }
            </div>
        </div>
    )
}
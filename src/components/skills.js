import React from 'react';
import SkillCard from './skill_card.js';
import skillItems from '../assets/skill-items.js';
import SectionTitle from './section_title.js';

export default function Skills() {
    return (
        <div id='skills-container' className='block'>
            <SectionTitle text='SKILLS'/>
            <div id='skills-group'>
                {
                    skillItems.map((skill, index) => {
                        return <SkillCard key={index} icon={skillItems[index].icon} name={skill.name}/>
                    })
                }
            </div>
        </div>
    )
};
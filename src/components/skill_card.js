import React from 'react';

export default function SkillCard(props) {
    var Icon = props.icon;
    return (
        <div className='skill-item'>
            <Icon className='skill-icon'/>
            <div className='skill-name'>{props.name}</div>
        </div>
    )
}
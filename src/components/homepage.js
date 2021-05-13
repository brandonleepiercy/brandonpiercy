import React from 'react';
import Particles from 'react-particles-js';

const particleParams = {
    "particles": {
        "color": {
            "value": "#979799",
        },
        "number": {
            "value": 150
        },
        "size": {
            "value": 3,
            "random":{
                "enable": true,
                "minimumValue": 1,
            }
        },
        "shadow": {
            "blur": 0,
            "color": "#000000",
            "enable": true
        },
        "value":10
    },
    "interactivity": {
        "events": {
            "onclick":{
                "enable": true,
                "mode": "push"
            },
            "onhover": {
                "enable": true,
                "mode": "repulse"
            },
            "modes":{
                "repulse":{
                    "distance": 20000,
                    "duration": 0.4,
                    "speed": 1
                }
            }
        }
    }
}

export default function Homepage(props){
    return(
        <div id='home-container'>
            <Particles id='particle=layer' width='100%' height='100vh' params={particleParams}></Particles>
            <div className='home-content no-interaction'>
                <h1 className='home-title'>Brandon Lee Piercy</h1>
                <div className='subtitle-container'>
                    <div className='subtitle'>Full Stack Developer / Javascript / React / SQL / MongoDB</div>
                </div>
            </div>
        </div>
    )
} 
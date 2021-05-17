import React from 'react';
import resume from '../resume/Resume.pdf';

let preScroll = window.pageYOffset;

window.onscroll = function() {
  let postScroll = window.pageYOffset;
  if (preScroll > postScroll) {
    document.getElementById("navbar-container").style.top = "0";
  } else {
    document.getElementById("navbar-container").style.top = "-5em";
  }
  preScroll = postScroll;
}

export default class NavBar extends React.Component {
    handleClick = (event) => {
        var sectionTitle = event.target.innerText;
        var sectionId = sectionTitle.toLowerCase() + '-container';
        var section = document.getElementById(sectionId);
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest'
        });
    }

    render() {
        return(
            <div id='navbar-container-wrapper'>
                <div id='navbar-container'>
                    <div className='item-container no-interaction'>
                        <div className='navbar-item' onClick={this.handleClick}>HOME</div>
                        <div className='navbar-item' onClick={this.handleClick}>ABOUT</div>
                        <div className='navbar-item' onClick={this.handleClick}>SKILLS</div>
                        <div className='navbar-item' onClick={this.handleClick}>PORTFOLIO</div>
                        <div className='navbar-item' onClick={this.handleClick}>CONTACT</div>
                        <a href={resume} target="_blank" rel='noopener noreferrer' className='navbar-item'>RESUME</a>
                    </div>
                </div>
            </div>
        )
    }

}
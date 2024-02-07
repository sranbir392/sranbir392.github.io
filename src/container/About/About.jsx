import React from 'react';
import "./About.css";
import { images } from '../../constants';
import { AppWrap,MotionWrap } from '../../wrapper';

const About = () => {
  return (
    <div className='main' id="About" >
      <h1 className='head'>About Me</h1>
      <div className='app__about' >
        <div className='image' >
          <img className='my-image' src={images.Ranbir} alt="Profile-Image" />
        </div>
        <div className='text' >
          <h1>Hi 👋,</h1>
          <h1>I'm Ranbir Singh</h1>
         <p className='my-story' >
          An enthusiastic and hardworking Full Stack Web Developer skilled in MERN Stack and proficient in Data Structures and Algorithms. Passionate about implementing and launching new projects and has the ability to collaborate well in Team Projects. Capable of writing production-ready code using HTML, CSS, JavaScript, ReactJS, Redux on the Front-End to build single page applications. 
         </p>
        </div>
      </div>
    </div>
  )
}

export default AppWrap(MotionWrap(About,"app__about"),"About","app__whitebg");
import React from 'react';
import "./Projects.css";
import {motion} from "framer-motion";
import images from '../../constants/images';
import { AppWrap,MotionWrap } from '../../wrapper';

const projects=[
{
  image:images.interviewprime,
  title:"Interview Prime ",
  desc:"Introducing an AI-based interview tool designed to empower users in refining their interview skills, while also offering organizations advanced features for conducting seamless online interviews.",
  tech:"NextJS, Typescript, Tailwind CSS, GPT-4, MongoDB, AWS, Node.js, Express.js",
  git:"",
  deploy:"https://interviewprime.ai"
},
{
  image:images.prepleaf,
  title:"Prepleaf By Masai",
  desc:"Prepleaf is an innovative web application designed to empower today's youth by providing a comprehensive array of study materials tailored to various modules.s",
  tech:"React, Typescript, Tailwind CSS,  MongoDB, AWS, Node.js, Express.js",
  git:"",
  deploy:"https://prepleaf.com"
},
{
  image:images.trendymart,
  title:"Trendy Mart",
  desc:"A clone of famouse e-commerce website - Blooming Dales",
  tech:"React, JavaScript, Chakra UI, CSS, MongoDB, Express.js, Node.js",
  git:"https://github.com/sranbir392/TrendyMart",
  deploy:"https://trendy-mart.vercel.app/"
},
{
  image:images.Formalclick,
  title:"Formal Click",
  desc:"A clone of famouse e-commerce website - Tata Cliq",
  tech:"React, JavaScript, Chakra UI, CSS, MongoDB, Express.js, Node.js",
  git:"https://github.com/sranbir392/Formal-Click",
  deploy:"https://formalclick.netlify.app/"
},
{
  image:images.typemaster,
  title:"Typing Master",
  desc:"A typing master game which calculates Words per minutes with some famous quotes.",
  tech:"HTML, CSS, JavaScript",
  git:"https://github.com/sranbir392/Type_master",
  deploy:"https://type-master-y7w8.vercel.app/"
},
{
  image:images.naturebasket,
  title:"Nature's Basket",
  desc:"A clone of famouse e-commerce website - Nature's Basket",
  tech:"HTML, CSS, JavaScript",
  git:"https://github.com/sranbir392/Nature-s-Basket",
  deploy:"https://naturesbasketclone.vercel.app/"
},
]


const Projects = () => {
  return (
    <div id="Projects" >
<h1 className='Project-Head' >Projects</h1>
<div className='app__project'>
  {projects.map((item)=>{
    return <motion.div
    whileInView={{opacity:1}}
    whileHover={{scale:1.05}}
    transition={{duration:0.5}}
    className="app__project-item"
    >
    <img src={item.image} alt={item.title} />
    <h2>{item.title}</h2>
    <p className='app_desc' >{item.desc}</p>
    <p className='app_tech-stack'>Tech Stack: {item.tech}</p>
    <div className='project-btn' >
      {item.git.length>0&&<a target="_blank" href={item.git}><button>Github</button></a>}
      <a target="_blank" href={item.deploy}><button>Live Site</button></a>
    </div>
    </motion.div>
  })}

</div>
    </div>
  )
}

export default AppWrap(MotionWrap(Projects,'app__works'),"Projects",'app__whitebg')
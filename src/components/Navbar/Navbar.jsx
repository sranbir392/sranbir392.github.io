import React from 'react';
import "./Navbar.css";
import { images } from '../../constants';
import {HiMenuAlt4,HiX} from "react-icons/hi";
import {motion} from "framer-motion";
import resume from "../../download/Ranbir_Singh_resume.pdf"
const Navbar = () => {
  
const [toggle, setToggle] = React.useState(false)
  return (
    <nav className='app__navbar' >
      <div className='app__navbar-logo' >
        <a href="#Home"><span>Ranbir Singh</span></a>
      </div>
      <ul className='app__navbar-links' >
        {["Home","About","Skills","Projects","Contact"].map((item)=>(
        <li className='app__flex p-text' key={`link-${item}`}>
          <div/>
          <a href={`#${item}`}>{item}</a>
        </li>
        ))}
      </ul>
      <a href={resume} target='_blank' download={resume} ><button className='app__nav-btn' onClick={()=>window.open("https://drive.google.com/file/d/1l45dTeo6x8a9Y8QamReRiCRvxlPHzlXG/view")}>Resume</button></a>
      <div className='app__navbar-menu' >
<HiMenuAlt4 onClick={()=>{setToggle(true)}} />

{
  toggle && (
      <motion.div 
      whileInView={{x:[260,0]}}
      transition={{duration:0.85,ease:"easeOut"}}
      >
<HiX onClick={()=>{setToggle(false)}} />
<ul>
{["Home","About","Skills","Projects","Contact"].map((item)=>(
        
        <li  key={item}>
          <a onClick={()=>{setToggle(false)}} href={`#${item}`}>{item}</a>
        </li>
      
        ))}  </ul>
      </motion.div>
  )
}
      </div>
    </nav>
  )
}

export default Navbar
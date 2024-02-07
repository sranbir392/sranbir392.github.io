import React from 'react';
import About from './container/About/About';
import Footer from './container/Footer/Footer';
import Header from './container/Header/Header';
// import Skills from './container/Skills/Skills';
import Projects from './container/Projects/Projects';
import Navbar from './components/Navbar/Navbar';
import "./App.css";
import Skills from './components/Skills';

const App = () => {
  return (
    <div className='app' > 
    <Navbar/>
    <Header/>
    <About/>
    {/* <Skills/> */}
    <Skills/>
    <Projects/>
    <Footer/>
    </div>
  )
};

export default App;
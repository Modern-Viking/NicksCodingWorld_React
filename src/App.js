import React from 'react';
import './App.css';
import AboutArea from './Components/AboutArea/index';
import LandingArea from './Components/LandingArea/index';
import ProjectsArea from './Components/ProjectsArea';
import LangArea from './Components/LangArea';
import ContactArea from './Components/ContactArea';
import ResumeArea from './Components/ResumeArea';

class App extends React.Component {
  render(){
  return (
    <div>
    <LandingArea/>
    <AboutArea/>
    <ProjectsArea/>
    <LangArea/>
    <ContactArea/>
    <ResumeArea/>
    </div>
  )
}
}

export default App;

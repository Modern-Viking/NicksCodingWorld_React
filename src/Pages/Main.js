import React from "react";
import AboutArea from '../Components/AboutArea/index';
import LandingArea from '../Components/LandingArea/index';
import ProjectsArea from '../Components/ProjectsArea';
import LangArea from '../Components/LangArea';
import ContactArea from '../Components/ContactArea';

const Main = function() {
    return (
        <div>
        <LandingArea/>
        <AboutArea/>
        <ProjectsArea/>
        <LangArea/>
        <ContactArea/>
        </div>
        )
}

export default Main;
import React from "react";
import AboutArea from '../Components/AboutArea';
import LandingArea from '../Components/LandingArea';
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
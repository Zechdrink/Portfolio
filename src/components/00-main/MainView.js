import React from "react"
import Cover from "../cover/Cover.js"
import Nav from "../nav/Nav.js"
import ProjectContainer from "../projects/ProjectContainer.js"
import Skills from "../skills/Skills.js";
import Contact from "../contact/Contact.js"

const MainView = () => {
    return ( 

    <div>

        <Nav/>
        <Cover/>
        <Skills/>
        <ProjectContainer/>
        <Contact/>
    </div> 

    );
}
 
export default MainView;
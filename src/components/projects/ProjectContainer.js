import React from 'react';
import Project from './Project';
import ProjectEven from './ProjectEven';

class ProjectContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className = "projectcontainer-wrapper">
                <h3 id = "projectcontainer-title"> My Projects </h3>
                <p id = "projectcontainer-p"></p>
                <div>
                    <Project link = {"https://github.com/labs12-section-calendar-template/Backend/tree/master"} project="Calendr" description= "Calendr is a calendar template creating app so that owner's can easily create and share schedules with their groups. Worked with a team of five, built out the backend using Node and Express, and the frontend using React." photo = {require("../.././img/calendr.png")} />
                    <ProjectEven link = {"https://github.com/Lambda-Labs-Weedmaps-1/Supp2U/tree/master"} project="supp2u" description= "Supp2u is a yelp clone geared towards restaurants. Worked under seasoned developers, performed daily standups, and built out a performant backend using Ruby on Rails." photo = {require("../.././img/supp2u.png")}/>
                    <Project project="Third Project" description= "Stick around. It's Coming Soon!" photo = {require("../.././img/construction.jpg")}/>
                </div>
            </div>
        );
    }
}
 
export default ProjectContainer;
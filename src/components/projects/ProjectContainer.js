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
                    <Project link = {"https://github.com/labs12-section-calendar-template/Backend/tree/master"} project="Calendr" description= "Calendr is an app that was built for groups to stay up to date on their latest events. The owner of the calendar can share all of their scheduled events with times and descriptions, using customizable templates." photo = {require("../.././img/calendr.png")} />
                    <ProjectEven link = {"https://github.com/Lambda-Labs-Weedmaps-1/Supp2U/tree/master"} project="supp2u" description= "Supp2u is essentially a yelp clone that allows for two types of users. Restaraunt owners and customers who can leave ratings and feedback to promote the growth of businesses!" photo = {require("../.././img/supp2u.png")}/>
                    <Project project="Third Project" description= "Stick around. It's Coming Soon!" photo = {require("../.././img/construction.jpg")}/>
                </div>
            </div>
        );
    }
}
 
export default ProjectContainer;
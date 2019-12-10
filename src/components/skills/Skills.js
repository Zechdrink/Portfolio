import React from 'react';
import SkillCard from './SkillCard';
import './skills.scss';

class Skills extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        return ( 
            <div className = "skills-section">
                <h2 id = "skillsection-title"> Areas of Expertise</h2>
                <p id = "skillsection-p"> These technologies are what I specialize in, but I am constantly trying to expand my scope of knowledge</p>
                <div className = "skills-wrapper">
                    <SkillCard icon = {<i class="far fa-star"></i>} skill = {"Team Work"} description = {"One of my top priorities is to have healthy communication with teammates to maximize efficiency and code quality."}/>
                    <SkillCard icon = {<i class="fab fa-react"></i>} skill = {"Frontend Development"} description = {"Building fast, responsive and dynamic applications using technologies like React, Redux and SCSS."} />
                    <SkillCard icon = {<i class="fas fa-sitemap"></i>} skill = {"Backend Development"} description = {"Robust test driven development with technologies like Ruby on Rails, NodeJS, Express and PostgreSQL."} />
                </div>
            </div>
         );
    }
}
 
export default Skills;
import React from "react"
import "./project.scss"

class Project extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className = "project-wrapper">
                <section className = "project-box">

                    <div className = "project-description">
                        <h1> {this.props.project}</h1>
                        <p> {this.props.description} </p>
                    </div>

                    <a href = {this.props.link} rel="noopener noreferrer" target = "_blank"><img id = "project-image" src = { this.props.photo} alt = "screenshot of project page" /></a>

                </section>
            </div>
         );
    }
}
 
export default Project;
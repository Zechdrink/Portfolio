import React from 'react'
import './cover.scss';

class Main extends React.Component {



    render(){
    return ( 
        <div className = "landing">
            
            <div className = "landing-text">
                <h1>Hi, I'm Zech Drinkhall</h1>
                <p>a Full Stack Developer</p>
            </div>

            <img id = "landing-image" src = {require("../.././img/about.png")} alt = "about info" />

        </div>
     );
    }
}
 
export default Main;
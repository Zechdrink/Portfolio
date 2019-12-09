import React from 'react';

const SkillCard = (props) => {
    return ( 
        <div className = "skillcard-wrapper">
            <div className = "icons"> {props.icon} </div>
            <h2> {props.skill} </h2>
            <p> {props.description} </p>
        </div>
     );
}
 
export default SkillCard;
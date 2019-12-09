import React from 'react';
import './nav.scss';


class Nav extends React.Component {

    render() { 
        return ( 
    <div className = "nav_header">
        <a href="https://www.linkedin.com/in/zech/" target = "_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"/></a>
        <a href="https://github.com/Zechdrink" target = "_blank" rel="noopener noreferrer"><i class="fab fa-github-alt"/></a>
        <a href="https://twitter.com/ZDrinkhall" target = "_blank" rel="noopener noreferrer"><i class="fab fa-twitter"/></a>
        <a href="https://resume.creddle.io/resume/31jcuspzuz7" target = "_blank" rel="noopener noreferrer"><i class="fas fa-file-pdf"/></a>
        <h3> My Portfolio </h3>
    </div>

         );
    }
}
 
export default Nav;

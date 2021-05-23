import React from 'react';
import {Fname,smalldetails,interest,profile} from './const2';
const About = () => {
  return (
<div className="container-about" id="about">

  <div className="fd">About Me</div>
    <img  className="proimg" alt="profile" src={profile} />
      <div className="aboutcard">
            <span className="b"><h3>{Fname}</h3></span>
            <span>Student</span>
            <div className="b"><p>{smalldetails}</p></div>
                <hr/>
                <div>
                    <div className="b"><p>Interests:<br/>{interest}</p></div>  
                </div>
                <hr/>
                  <div className="pa4 flex">
                        <a href="#projects">
                          <button className="button-about b"><span>Projects</span></button>
                        </a>
                        <a href="#top">
                          <button className="button-about b"><span>Resume</span></button>
                        </a>
                        <a href="#contact">
                          <button className="button-about b"><span>Contact</span></button>
                        </a>
                  </div>
      </div>
</div>
);
}

export default About;
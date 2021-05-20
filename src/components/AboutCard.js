import React from 'react';

const AboutCard = () => {
  return (
    <div>
<div className="fd">About Me</div>
    <img  className="proimg" alt="profile" src="https://media.wired.com/photos/5926c126af95806129f50868/master/w_2560%2Cc_limit/SuperMarioRunTA.jpg" />
      <div className="aboutcard">
            <span className="b"><h3>Mario(SuperMario)</h3></span>
            <span>Student</span>
            <div className="b"><p>I am studying for Engineering in Computer Science in the Department of B.Tech Computer Sciences and Engineering at the Integral University. I expect to graduate in Spring, 2023.</p></div>
                <hr/>
                <div>
                    <div className="b"><p>Interests:<br/>internet of things,data mining,artificial intelligence,full-stack developement.</p></div>  
                </div>
                <hr/>
                  <div className="pa4 flex">
                        <a href="#projects">
                          <button className="button-about"><span>Projects</span></button>
                        </a>
                        <a href="#top">
                          <button className="button-about"><span>Resume</span></button>
                        </a>
                        <a href="#contact">
                          <button className="button-about"><span>Contact</span></button>
                        </a>
                  </div>
       </div>
      </div>
      );
}

export default AboutCard;
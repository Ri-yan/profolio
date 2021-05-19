import React from 'react';

const About2 = () => {
  return (
<div className="container2 bg-orange" id="about">
    <img  className="proimg" alt="profile" src="https://media.wired.com/photos/5926c126af95806129f50868/master/w_2560%2Cc_limit/SuperMarioRunTA.jpg" />
      <div className="aboutcard">
            <span ><br/>My NAME</span>
            <span>Student</span>
            <div>I am studying for Engineering in Computer Science in the Department of B.Tech Computer Sciences and Engineering at the Integral University. I expect to graduate in Spring, 2023.</div>
                <div>
                    <div>Interests:internet of things,data mining,artificial intelligence</div>  
                </div>
                

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

export default About2;
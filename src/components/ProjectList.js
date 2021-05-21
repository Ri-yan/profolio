import React from 'react';
import Project from './Project';
import Pro from './constant';
import Scroll from './Scroll';
const ProjectList = ({Projects}) => {
  return (
      <div id="projects" className="container-project">
        <div className="fd pa3">PROJECTS</div>
        <Scroll>
        	<div className="grid-wrap  tc">
          {
            Pro.map((project_name, i) => {
              return (
                <Project
                  key={i}
                  id={Pro[i].id}
                  img_id={Pro[i].img_id}
                  project_name={Pro[i].project_name}
                  discription={Pro[i].discription}
                  link={Pro[i].link}
                  />
              );
            })
          }
        </div>
        </Scroll>
                <div className="fd pa5 tc grow" style={{'font-size':'20px'}}><a href="#contact">Contact Section</a></div>

      </div>
  	);
}

export default ProjectList;

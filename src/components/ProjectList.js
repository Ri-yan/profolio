import React from 'react';
import Project from './Project';

const ProjectList = () => {
  return (
        <div id="projects" className="container-project">
          <div className="fd pa4">PROJECTS</div>
        		<div className="grid-wrap  tc">
                        <Project/>
                        <Project/>
                        <Project/>
                        <Project/>
                       
            </div>
          </div>
  	);
}

export default ProjectList;

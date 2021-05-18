import React from 'react';
import Project from './Project';

const ProjectList = () => {
  return (
        <div className="bg-blue tc pa4">
          <h1>PROJECTS</h1>
        		<div className="grid-wrap  tc">
                        <Project/>
                        <Project/>
                        <Project/>
                        <Project/>
                        <Project/>
                        <Project/> 
                        <Project/>
                        <Project/> 
            </div>
          </div>
  	);
}

export default ProjectList;

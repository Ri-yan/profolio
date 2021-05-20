import React from 'react';
import Project from './Project';
import Pro from './constant';
const ProjectList = ({Projects}) => {
  return (
      <div id="projects" className="container-project">
        <div className="fd pa3">PROJECTS</div>
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
      </div>
  	);
}

export default ProjectList;
{/*<div>
      {
        Pro.map((project_name, i) => {
          return (
            <Project
              key={i}
              id={Pro[i].id}
              project_name={Pro[i].project_name}
              description={Pro[i].description}
              link={Pro[i].link}
              />
          );
        })
      }
    </div>*/}
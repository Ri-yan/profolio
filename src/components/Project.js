 import React from 'react';
import Pro from './constant';

const Project = ({ id,project_name,discription,link,img_id }) => {
  return (
    <div className="projectcard grow">
      <img alt='project' className="grow" src={img_id} />
      <div className="card-body">
        <h2 className="hello">{project_name}</h2>
        <hr className="phr"/>
        <p className="Pdiscription">
        {discription}
        
        </p> 
        <hr className="phr" />
        <a href={link}><button className="button-project"><span>know more</span></button></a>
</div>
    </div>
  );
}

export default Project;

//tc grow bg-light-green br3 pa5 ma1 dib bw5 shadow-4

 import React from 'react';

const Project = ({ name, email, id }) => {
  return (
    <div className="projectcard grow">
      <img alt='project' src={`http://spajournalism.com/wp-content/uploads/2017/08/new-job-Pixabay.jpg`} />
      <div className="card-body">
        <h2 className="hello">project name</h2>
        <hr className="phr"/>
        <p className="Pdiscription">
        descriptio ndescrip tiondescriptiondescr iptiondescript iondescriptiondescriptiondescri ptiondescripti
        descript iondescriptiondescrip tiondescriptiond escriptiondescriptionde scriptiondescriptiondescripti
        descripti ondescriptiondescriptionde scriptiondescription descriptiondescr iptiondescriptiondescripti
        </p> 
        <hr className="phr"/>
        <div className=""><button className="button-project"><span>know more</span></button>
      </div></div>
    </div>
  );
}

export default Project;

//tc grow bg-light-green br3 pa5 ma1 dib bw5 shadow-4

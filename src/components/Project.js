 import React from 'react';

const Project = ({ name, email, id }) => {
  return (
    <div className="projectcard grow">
      <img alt='project' src={`http://spajournalism.com/wp-content/uploads/2017/08/new-job-Pixabay.jpg`} />
      <div className="card-body">
        <h2>project name</h2>
        <p>
        descriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescripti
        descriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescripti
        descriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescripti
        </p>
        <button className="button-project"><span>know more</span></button>
      </div>
    </div>
  );
}

export default Project;

//tc grow bg-light-green br3 pa5 ma1 dib bw5 shadow-4

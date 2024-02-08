import React from 'react';
import "./index.css";

class Projects extends React.Component {
  renderProjects() {
    return this.props.projects.map(project=> (
      <div className='project-container'>
        <div className='project-content'>
          <h1 className='project-name'>{project.name}</h1>
          <p className='project-description'>{project.description}</p>
          <a href={project.link} target="_blank" rel="noopener noreferrer"><button className='view-project-button'>View Project</button></a>
        </div>
        <img className='project-image' src={project.image} alt='projectImage'/>
      </div>
    ));
  }

  render() {
    return (
      <div id="projects" className='projects-container'>
        <h1 className='add-project-heading'>Projects</h1>
        <hr className='horizontal-line'/>
        {this.renderProjects()}
      </div>
    );
  }
}

export default Projects;

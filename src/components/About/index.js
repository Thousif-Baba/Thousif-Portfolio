import React from 'react'
import {HashLink as Link} from "react-router-hash-link"
import "./index.css"

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      projectName: "",
      projectLink: "",
      projectImage: "",
      description: ""
    };
  }

  handleProjectName = (event) => {
    this.setState({ projectName: event.target.value });
  }

  handleProjectLink = (event) => {
    this.setState({ projectLink: event.target.value });
  }

  handleProjectImage = (event) => {
    this.setState({ projectImage: event.target.value });
  }

  handleDescription = (event) => {
    this.setState({ description: event.target.value });
  }

  addProject = (event) => {
    event.preventDefault();
    const newProject = {
      name: this.state.projectName,
      link: this.state.projectLink,
      image: this.state.projectImage,
      description: this.state.description
    };

    this.setState(prevState => ({
      projects: [...prevState.projects, newProject],
      projectName: '',
      projectLink: '',
      projectImage: '',
      description: ''
    }), () => {
      this.props.updateProjects(this.state.projects);
    });
  }

  render() {
    return (
      <div className='home-page'>
        <div className='header'>
          <h1 className='heading'>Thousif Baba</h1>
          <div className='options-list'>
            <Link to="#about"><button className='link-item'>About</button></Link>
            <Link to="#projects"><button className='link-item'>Projects</button></Link>
            <Link to="#contacts"><button className='link-item'>Contacts</button></Link>
          </div>
        </div>
        <div className='about-container' id="about">
          <div className='content-container'>
            <div className='details-container'>
              <h2 className='designation-heading'>Frontend Developer</h2>
              <h1 className='name-heading'>Hello, my name is Thousif Baba</h1>
              <p className='description-para'>Short text with details about you, what you do or your professional career. You can add more information on the about page.</p>
              <div className='button-container'>
                <Link to="#projects">
                  <button className='projects-button' type='button'>Projects</button>
                </Link>
                <a href='https://www.linkedin.com/in/thousif-baba-mullah/' target='_blank' rel='noreferrer'>
                  <button className='linkedin-button' type='button'>LinkedIn</button>
                </a>
              </div>
            </div>
            <img className='profile-img' src="https://res.cloudinary.com/dnqgnmrup/image/upload/v1707372906/glenn-carstens-peters-npxXWgQ33ZQ-unsplash_wyr6ac.jpg" alt='profileImage'/>
          </div>
        </div>
        <div>
          <h1 className='add-project-heading'>Add Project</h1>
          <hr className='horizontal-line'/>
          <form className='form-container' onSubmit={this.addProject}>
            <div className='input-container'>
              <label className='label-name' htmlFor='projectNameId'>Project Name</label>
              <input type='text' id="projectNameId" className='input-element' name="projectName" value={this.state.projectName} onChange={this.handleProjectName} />
            </div>
            <div className='input-container'>
              <label className='label-name' htmlFor='projectLinkId'>Project Link</label>
              <input type='text' id="projectLinkId" className='input-element' name="projectLink" value={this.state.projectLink} onChange={this.handleProjectLink} />
            </div>
            <div className='input-container'>
              <label className='label-name' htmlFor='projectImageId'>Project Image</label>
              <input type='text' id="projectImageId" className='input-element' name="projectImage" value={this.state.projectImage} onChange={this.handleProjectImage} />
            </div>
            <div className='input-container'>
              <label  className='label-name' htmlFor='descriptionId'>Description</label>
              <textarea id="descriptionId" className='textarea-element' name="description" value={this.state.description} onChange={this.handleDescription} />
            </div>
            <div className='add-button-container'>
              <button className='add-button' type="submit">Add</button>
            </div>
          </form>
        </div>
        <img className='footer-image' src="https://fincity-assignment.vercel.app/_next/image?url=%2Fsection-bottom.png&w=1920&q=75" alt="footerimage"/>
      </div>
    )
  }
}
  
  export default About;
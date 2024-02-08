import React from 'react';
import { BrowserRouter} from 'react-router-dom';
import About from './components/About';
import Projects from './components/Projects';
import Contacts from './components/Contacts';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: []
    };
  }

  updateProjects = (newProjects) => {
    this.setState({projects: newProjects});
  }

  render() {
    return (
      <BrowserRouter>
        <About updateProjects= {this.updateProjects}/>
        <Projects projects={this.state.projects}/>
        <Contacts/>
      </BrowserRouter>
    );
  }
}

export default App;
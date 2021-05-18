import './App.css';
import React from 'react';
import About from '../components/About';
import ProjectList from '../components/ProjectList';
import Hello from '../components/Hello';
import Footer from '../components/Footer';

class App extends React.Component {
   render(){
	return(
          <div>
            <Hello/>
            <About/>
            <div id="projects"><ProjectList/></div>
            <section><Footer/> </section>
          </div>
);
 }
}

export default App;
            // <div className="container2 bg-purple" id="about"><About2/></div>

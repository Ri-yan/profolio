import './App.css';
import React from 'react';
import About from '../components/About';
import ProjectList from '../components/ProjectList';
import Hello from '../components/Hello';
import Footer from '../components/Footer';
import Zoom from 'react-reveal/Zoom';
import Tada from 'react-reveal/Tada';
import Jump from 'react-reveal/Jump';
// import ScrollReveal from 'scrollreveal';

class App extends React.Component {
   render(){
	return(
          <div className="n">
			<Zoom>
            <Hello/>
            </Zoom>
            <Jump>
            <About/>
            </Jump>
            <Jump>
            <ProjectList/>
            </Jump>
            <Tada>
            <Footer/>
            </Tada>
          </div>
);
 }
}
// ScrollReveal().reveal('.n', { interval: 16, reset: true, delay:500 })

export default App;
   
import React from 'react';
import Zoom from 'react-reveal/Zoom';
const Hello = () => {
  return (
  	<div className="container-hello">
		<link href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap" rel="stylesheet"/>
	  		<div className="hello">
	          <Zoom Cascade><h1>HELLO THERE<br/>Hi, my name is Riyan I'am a developer.</h1>
	          <br/>
	          <div ><a href="#about"><button className="button-hello"><span>know More</span></button></a></div>
	        </Zoom></div>
  	</div>
  	);
}
export default Hello;


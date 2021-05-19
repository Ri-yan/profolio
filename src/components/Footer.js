import React from 'react';
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
  return (
<div id="contact" className="container-footer">
  <footer className="pa2 tc ">
        <div className="hello">
            <a href="#top" >
              <i className="a" ><span ><p>Back to Top</p></span></i>
            </a>
            <div className="direct-contact"> <h1>Contact .</h1></div>
          <div class="social-links">

                <a href="#!" target="_blank">

                  <i className="fa  grow fa-inverse"><SocialIcon network="twitter" fgColor="#fff"  bgColor="#000000" style={{ height: 50, width: 50 }}/></i>
                </a>

                <a href="#!" target="_blank">
                  <i className="fa  grow fa-inverse"><SocialIcon network="instagram" fgColor="#fff"  bgColor="#000000"/></i>
                </a>

                <a href="#!" target="_blank">
                  <i className="fa  grow fa-inverse"><SocialIcon network="linkedin" fgColor="#fff" bgColor="#000000"/></i>
                </a>

                <a href="https://github.com/Ri-yan">
                  <i className="fa  grow fa-inverse"><SocialIcon network="github" fgColor="#fff" bgColor="#000000"/></i>
                </a>
          </div>
          <hr className="chr"/>
          <div className="f3"><p>This template made by Mohd Riyan.</p></div>
        </div>
      </footer>
</div>

);
}

export default Footer;

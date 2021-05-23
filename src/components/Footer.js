import React from 'react';
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
  return (
<div id="contact" className="container-footer">
  <footer className="pa2 tc ">
        <div className="hello">
            <a href="#top" >
              <i className="a grow" ><span ><p className="grow">Back to Top</p></span></i>
            </a>
            <div className="direct-contact grow "> <h1>Contact .</h1></div>
          <div class="social-links">

                <a href="#!" target="_blank">

                  <i className="fa"><SocialIcon network="twitter" className="grow" fgColor="#fff"  bgColor="#000000" style={{ height: 50, width: 50 }}/></i>
                </a>

                <a href="#!" target="_blank">
                  <i className="fa"><SocialIcon network="instagram"  className="grow" fgColor="#fff"  bgColor="#000000"/></i>
                </a>

                <a href="#!" target="_blank">
                  <i className="fa "><SocialIcon network="linkedin"  className="grow" fgColor="#fff" bgColor="#000000"/></i>
                </a>

                <a href="https://github.com/Ri-yan">
                  <i className="fa "><SocialIcon network="github"  className="grow" fgColor="#fff" bgColor="#000000"/></i>
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

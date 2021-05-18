import React from 'react';

const Footer = () => {
  return (
<div id="contact">

  <footer className="pa2 tc bg-red">
        <div className="">
        <h1>Contact</h1>
          <a href="#top" class="back-to-top">top
            <i class="fa fa-angle-up fa-2x" aria-hidden="true"></i>
          </a>
          <div class="social-links">
            <a href="#!" target="_blank">
              <i class="fa fa-twitter fa-inverse">T</i>
            </a>
            <a href="#!" target="_blank">
              <i class="fa fa-codepen fa-inverse">CD</i>
            </a>
            <a href="#!" target="_blank">
              <i class="fa fa-linkedin fa-inverse">L</i>
            </a>
            <a href="https://github.com/Ri-yan">
              <i class="fa fa-github fa-inverse">G</i>
            </a>
          </div>

          <hr />
        </div>
      </footer>
</div>

);
}

export default Footer;

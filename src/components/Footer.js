import React from 'react';

const Footer = () => {
  return (
<div id="contact">

  <footer className="pa2 tc bg-red">
        <div className="">
        <h1>Contact</h1>
          <a href="#top" class="back-to-top">
            <i class="fa grow fa-angle-up fa-2x" aria-hidden="true">🔼</i>
          </a>

          <div class="social-links">

                <a href="#!" target="_blank">

                  <i className="fa fa-twitter grow fa-inverse">🦊</i>
                </a>

                <a href="#!" target="_blank">
                  <i className="fa fa-codepen grow fa-inverse">🐻</i>
                </a>

                <a href="#!" target="_blank">
                  <i className="fa fa-linkedin grow fa-inverse">🐲</i>
                </a>

                <a href="https://github.com/Ri-yan">
                  <i className="fa fa-github grow fa-inverse">🐭</i>
                </a>

          </div>

          <hr />
        </div>
      </footer>
</div>

);
}

export default Footer;

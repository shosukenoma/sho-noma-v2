import React from 'react'
import './Header.css'
import GmailClipBoard from './GmailClipBoard';

function Header( {handleLogoClick} ) {

  new ClipboardJS('.gmail-btn');

  return (
    <header className="header debug-border">
      {/* <h1 className="logo"> SN &#47; </h1> */}
      <a className="logo-link" rel="noopener" onClick={() => handleLogoClick()}>
        <h1 className="logo"> &#60; SN &#47; &#62; </h1>
      </a>
      {/* <h1 className="logo"> &#60; ShoNoma &#47; &#62; </h1> */}
      <ul className="links">
        <li>
          <a className="linkedin-link" href="https://www.linkedin.com/in/shosukenoma/"  target="_blank">
            <i className="devicon devicon-linkedin-plain"></i>
          </a>
        </li>
        <li className="github">
          <a className="github-link" href="https://github.com/shosukenoma" target="_blank">
            <i className="devicon devicon-github-original"></i>
          </a>
        </li>
        <li className="gmail">
          <GmailClipBoard />
        </li>
      </ul>
    </header>
  )
}

export default Header
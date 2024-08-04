import React from 'react'
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <header className="header">
    <nav className="nav container">
    <div className="navigation flex-content">
        <div className="hamburger">
            <i className="fa fa-bars"></i>
        </div>

        <div className="logo">
            <h3>Mohamed</h3>
        </div>

        <div className="menu">
            <div className="top">
                <span className="close">Close<i className="bx bx-x-circle"></i></span>
            </div>

            <ul className="nav-list flex-content">
                <li className="nav-item">
                    <Link to="/" spy={true} smooth={true} offset={50} duration={500} className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="about" spy={true} smooth={true} offset={50} duration={500} className="nav-link">About</Link>
                </li>
                <li className="nav-item">
                    <Link to="skills" spy={true} smooth={true} offset={50} duration={500} className="nav-link">Skills</Link>
                </li>
                <li className="nav-item">
                    <Link to="projects" spy={true} smooth={true} offset={50} duration={500} className="nav-link">Projects</Link>
                </li>
                <li className="nav-item">
                    <Link to="contacts" spy={true} smooth={true} offset={50} duration={500} className="nav-link">Contacts</Link>
                </li>
            </ul>
        </div>
    </div>
</nav>
</header>
  )
}

export default Header
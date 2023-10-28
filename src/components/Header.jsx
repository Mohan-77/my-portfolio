import React from 'react'

const Header = () => {
  return (
    <header className="header">
    <nav className="nav container">
    <div className="navigation flex-content">
        <div className="hamburger">
            <i className="fa fa-bars"></i>
        </div>

        <div className="logo">
            <h3>Cade Abdi ⏰</h3>
        </div>

        <div className="menu">
            <div className="top">
                <span className="close">Close<i className="bx bx-x-circle"></i></span>
            </div>

            <ul className="nav-list flex-content">
                <li className="nav-item">
                    <a href="#" className="nav-link">Home</a>
                </li>
                <li className="nav-item">
                    <a href="#top-projects" className="nav-link">About</a>
                </li>
                <li className="nav-item">
                    <a href="#about" className="nav-link">Skills</a>
                </li>
                <li className="nav-item">
                    <a href="#projects" className="nav-link">Projects</a>
                </li>
                <li className="nav-item">
                    <a href="#contacts" className="nav-link">Contacts</a>
                </li>
            </ul>
        </div>
        
    </div>
</nav>
</header>
  )
}

export default Header
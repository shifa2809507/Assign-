import React, { useState } from 'react';
import './Navbar.css';
import logo from '../assets/Logo.png'
import { Link } from 'react-router-dom';


function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className={`container ${isMenuOpen ? 'menu-open' : ''}`}>
                <div className="nav-top">
                    <a className="navbar-brand" href="#">
                        <img className="img" src={logo} alt="Home" width="30" height="24" />
                    </a>
                    <button
                        className="nav-toggle"
                        type="button"
                        aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                        aria-expanded={isMenuOpen}
                        aria-controls="primary-navigation"
                        onClick={() => setIsMenuOpen((open) => !open)}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
                <ul className="nav-links" id="primary-navigation">
                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Digital Marketing
                        </Link>
                    </li>
                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Marketing technologies
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="#">About us</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="#">Blog</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="#">Career</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="#">Contact us</Link>
                    </li>
                </ul>
                <button className="button">
                    <i className="bi bi-telephone-fill"></i>
                    Schedule a call
                </button>
            </div>
        </nav>
    );
}

export default Navbar
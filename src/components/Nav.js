import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return (

        <nav className="nav-wrapper">
            <div className="logo"></div>
            <ul className="navigation-wrapper">
                <Link to="/" className="nav-link"><li>MipHic</li></Link>
                <Link to="#about" className="nav-link"><li>our mission</li></Link>
                <Link to="#offer" className="nav-link"><li>what we offer</li></Link>
                {/* <Link to="/concept" className="nav-link"><li>technology</li></Link> */}
                {/* <Link to="/projects" className="nav-link"><li>projects</li></Link> */}
                {/* <Link to="/business" className="nav-link"><li>business(hidden)</li></Link> */}
                <Link to="#contact" className="nav-link"><li>get in touch</li></Link>
            </ul>
        </nav>

    );
}

export default Nav;
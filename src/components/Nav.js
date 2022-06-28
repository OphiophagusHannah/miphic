import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return (

        <nav className="nav-wrapper">

            <ul className="navigation-wrapper">
                <a href="/" className="nav-link"><li>            
                <div className="logo">
                <svg width="564" height="564" viewBox="0 0 564 564" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M149.836 397.99C149.836 265.403 149.836 302.423 149.836 217.087C149.836 131.75 250.993 133.867 250.993 217.087C250.993 300.306 250.993 334.163 250.993 375.069C250.993 415.974 319.429 416.325 319.429 375.069C319.429 333.812 319.429 299.073 319.429 217.087C319.429 135.1 420.762 131.75 420.762 217.087C420.762 302.423 420.762 397.99 420.762 397.99M283.231 20C124.546 20 22.7793 141.004 20.0463 281.471C17.2629 424.525 140.464 544.333 283.231 543.999C425.651 543.666 546.731 424.177 543.953 281.471C541.226 141.359 435.935 20 283.231 20Z" />
                </svg>
                </div></li></a>
                <a href="#our-mission" className="nav-link"><li>our mission</li></a>
                <a href="#what-we-offer" className="nav-link"><li>what we offer</li></a>
                <a href="#how-it-works" className="nav-link"><li>how it works</li></a>
                <a href="#data-analysis" className="nav-link"><li>data-analysis</li></a>
                {/* <Link to="/concept" className="nav-link"><li>technology</li></Link> */}
                {/* <Link to="/projects" className="nav-link"><li>projects</li></Link> */}
                {/* <Link to="/business" className="nav-link"><li>business(hidden)</li></Link> */}
                <a href="mailto:hannaleibscher@gmail.com" className="nav-link nav-link--end"><li>get in touch</li></a>
            </ul>
        </nav>

    );
}

export default Nav;
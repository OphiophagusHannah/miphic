import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer>
            <div className="footer-inner">
                <section className="section-block" id="contact">

                    <h2>Get in Touch</h2> 

                    <h3>form will me here</h3>
                    <p>external links</p>
                    <ul className="footer-navigation-wrapper">
                        <Link to="/team" className="nav-link">team</Link>
                    </ul>
                </section>
                
            </div>
        </footer>
    );
}

export default Footer;
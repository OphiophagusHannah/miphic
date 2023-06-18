
import { React, useState, useEffect } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Hamburger from "../components/Hamburger";

function Nav() {

    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen)
    }

    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY >= 300);
        });
    }, []);

    const [display, setDisplay] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setDisplay(window.scrollY >= 5300);
        });
    }, []);



    return (

        <nav className={display ? "sticky display" : "sticky"} id="bar">
            <div className={scroll ? "nav-wrapper bg-light" : "nav-wrapper bg-dark"} id="bar">
                <ul className="navigation-wrapper">
                    <a href="/" className="nav-link" data-aos={"fade-down"}>
                        <li>
                            <div className="logo">
                                <svg width="564" height="564" viewBox="0 0 564 564" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M149.836 397.99C149.836 265.403 149.836 302.423 149.836 217.087C149.836 131.75 250.993 133.867 250.993 217.087C250.993 300.306 250.993 334.163 250.993 375.069C250.993 415.974 319.429 416.325 319.429 375.069C319.429 333.812 319.429 299.073 319.429 217.087C319.429 135.1 420.762 131.75 420.762 217.087C420.762 302.423 420.762 397.99 420.762 397.99M283.231 20C124.546 20 22.7793 141.004 20.0463 281.471C17.2629 424.525 140.464 544.333 283.231 543.999C425.651 543.666 546.731 424.177 543.953 281.471C541.226 141.359 435.935 20 283.231 20Z" />
                                </svg>
                            </div>
                        </li>
                    </a>

                    <div className="navigation">
                        <AnchorLink href="#our-mission" className="nav-link" onClick={toggleHamburger} data-aos={"fade-down"} data-aos-delay={50}><li>our mission</li></AnchorLink>
                        <AnchorLink href="#what-we-offer" className="nav-link" onClick={toggleHamburger} data-aos={"fade-down"} data-aos-delay={100}><li>what we offer</li></AnchorLink>
                        <AnchorLink href="#how-it-works" className="nav-link" onClick={toggleHamburger} data-aos={"fade-down"} data-aos-delay={150}><li>technology</li></AnchorLink>
                        <AnchorLink href="#advantages" className="nav-link" onClick={toggleHamburger} data-aos={"fade-down"} data-aos-delay={200}><li>platform benefits</li></AnchorLink>
                        <AnchorLink href="#data" className="nav-link" onClick={toggleHamburger} data-aos={"fade-down"} data-aos-delay={250}><li>machine learning</li></AnchorLink>
                        <a href="mailto:info@miphic.co" className="nav-link nav-link--end" data-aos={"zoom-in"} data-aos-delay={300}><li>get in touch</li></a>
                    </div>

                    <div className="hamburger" onClick={toggleHamburger}>
                        <Hamburger isOpen={hamburgerOpen} />
                    </div>
                </ul>
            </div>


            <style jsx="true">{`
                .navigation{
                    width: 100%;
                    display: flex;
                    align-items: center;
                }


                .navigation {
                    display:flex;
                    flex-wrap: wrap;
                    float: right;
                    margin: 0px;
                    padding: 0px;
                    overflow: hidden;
                }
                .navigation li {
                    list-style-type: none;
                    padding-right: 10px;
                }
                .hamburger {
                    display: none;
                    z-index: 6;
                }
                @media (max-width: 800px){

                    .hamburger{
                        display: initial;
                        padding-top: 10px;
                        margin-left: 10px;
                        z-index: 6;
                    }


                    .navigation {
                        left:  ${hamburgerOpen ? '0' : '100vw'};
                        display: flex;
                        background-color: #020024;
                        height: 100vh;
                        width: 100vw;
                        top: 0;
                        position: fixed;
                        align-items: center;
                        justify-content: center;
                        flex-direction: column;
                        transition: .3s linear;
                    }


                    .navigation li {
                        color: white;
                    }
                    .navigation a {
                        color: white;
                        padding-top: .5rem;
                        padding-bottom: .5rem;
                    }

                    .nav-link--end {
                        margin-top: 2rem !important;
                    }
                }



            `}</style>

        </nav>

    );
}

export default Nav;

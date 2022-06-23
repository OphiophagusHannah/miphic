import React from 'react';
import Footer from '../../components/Footer';


function Home() {
    return (
        <div>
            <section className="section-hero">
                <h1>Miphic</h1>
                <h3>High-throughput mitochondrial screening platform</h3>
            </section>
            <section className="section-block">
                <h2>We determine which metabolic drug will work for you.</h2>
                <h3>what is Miphic?</h3>
                <h3>our mission and goals</h3>
            </section>
            <section className="section-block" id="offer">
                <h2>What We Offer</h2>
                <h3>Unrealized opportunity of targeting cancer mitochondria</h3>
                <h3>Advantages of Mitochondrical Screening</h3>
                <h3>Potential</h3>
                {/* <Link to="/about#advantages" className="nav-link">about</Link> */}
            </section>
            {/* <section className="section-block">
                <h2>Projects</h2>
                <h3>Projects Overview/Summary/Goals</h3>
                <Link to="/projects#projects" className="nav-link">technology and concept</Link>
            </section> */}
            <Footer />

        </div>

    )
}

export default Home;
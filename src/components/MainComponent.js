import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
// import Financial from '../pages/Financial';
// import About from '../pages/About';
// import Concept from '../pages/Concept';
// import Projects from '../pages/Projects';
import Home from '../pages/Home';
// import Team from '../pages/Team';

class Main extends Component {

    render() {

        const HomePage = () => {
            return (
                <Home />
            );
        }

        // const AboutPage = () => {
        //     return (
        //         <About />
        //     );
        // }

        // const ConceptPage = () => {
        //     return (
        //         <Concept />
        //     );
        // }

        // const ProjectsPage = () => {
        //     return (
        //         <Projects />
        //     );
        // }

        // const FinancialPage = () => {
        //     return (
        //         <Financial />
        //     );
        // }

        // const TeamPage = () => {
        //     return (
        //         <Team />
        //     );
        // }


        return (
            <div className="main-wrapper">
                <Routes>
                    <Route path='/' component={HomePage}  element={<Home />}/>
                    {/* <Route exact path='/about' component={AboutPage} element={<About />} />
                    <Route exact path='/concept' component={ConceptPage} element={<Concept />} />
                    <Route exact path='/projects' component={ProjectsPage} element={<Projects />} />
                    <Route exact path='/business' component={FinancialPage} element={<Financial />} />
                    <Route exact path='/team' component={TeamPage} element={<Team />} />                */}
                </Routes>
            </div>
        );
    }
}

export default Main;
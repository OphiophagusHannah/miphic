import React from 'react';
import { RichText } from '@graphcms/rich-text-react-renderer';

const PostPreview = ({post, noImage}) => {
    return (
        <div className="post-preview">
            <section className="section-hero" >



                <div className="hero-inner">                
                <h1>{ post.heroTitle }</h1>
                <h3>{ post.heroBody }</h3>
                </div>

            </section>
            <section className="section-block" id="our-mission">
                <div className="block-inner-wrapper">
                 <span className="tag">Our Mission</span>
                <div className="block-inner">    
               
                <h3 className="text-statement">{ post.statementSubheading }</h3>
                <h2 className="mission-statement">{ post.statement }</h2>
                </div>
                </div>

            
            </section>
            <section className="section-subblock important-section">
            <div className="block-inner">
            <span className="">importance</span>
            <div className="important-heading" dangerouslySetInnerHTML={{__html: post.offerHeading.html }}> 

            </div>
            </div>
            </section>
            <section className="section-block section-offer" id="what-we-offer">
            
               
                <h3 className="offer-heading"  dangerouslySetInnerHTML={{__html: post.columnsHeading.html }}></h3>
            
                    
                    <div className="columns-wrapper">
                        <div className="line" dangerouslySetInnerHTML={{__html: post.offerColumnFirst.html }}></div>
                        <div className="line" dangerouslySetInnerHTML={{__html: post.offerColumnSecond.html }}></div>
                        <div className="line" dangerouslySetInnerHTML={{__html: post.offerColumnThird.html }}></div>
                    </div>
                <div className="special-request">
                    <p>Have special mitochondrial screening request? </p>
                <a href="mailto:test@gmail.com" className="button">Send Us Message</a>
                </div>
            </section>

            <section className="section-block" id="how-it-works">
            <div className="block-inner-wrapper block-inner-wrapper--top">
                <div className="left-column">
                <span className="tag">Our Approach</span>
                <h3 dangerouslySetInnerHTML={{__html: post.technologyHeading.html }}></h3>
                </div>
                <div className="right-column">
                <div className="block-inner-wrapper">
                                <div><img className="cover-image" src={ post.beforeTechnologyImage.url } />
                                <h3>Before Treatment</h3>
                                </div>

                                <div><img className="cover-image" src={ post.afterTechnologyImage.url } />
                                <h3>After Treatment</h3>
                                </div>
                                </div>
                                </div>
            </div>
            </section>

            <section className="section-block section-advantages" id="advantages">
            <div className="block-inner-wrapper ">
            <span className="tag">Platform Benefits</span>
            <div className="block-inner">
                <div className="block-inner-wrapper ">
                <div className="column"><span>01</span><div dangerouslySetInnerHTML={{__html: post.technologyColumnFirst.html }}></div></div>
                <div className="column"><span>02</span><div dangerouslySetInnerHTML={{__html: post.technologyColumnSecond.html }}></div></div>
                <div className="column"><span>03</span><div dangerouslySetInnerHTML={{__html: post.technologyColumnThird.html }}></div></div>
                <div className="column"><span>04</span><div dangerouslySetInnerHTML={{__html: post.technologyColumnFourth.html }}></div></div>
                </div>
                </div>
                </div>
            </section>


            <section className="section-block ml-block" id="data-analysis">
                <h2 className="ml-heading">Machine Learning</h2>
                <span className="ml-tag">Big data analysis</span>
                <div className="ml" dangerouslySetInnerHTML={{__html: post.mlContent.html }}></div>
            </section>

            <section className="section-block section-block--contact" id="contact">
                <div className="contact-block">
                <h3 className="contact-heading">Talk to us to discuss more</h3>
                <a href="mailto:test@gmail.com" className="button">Send Message</a>
                </div>
            </section>
        </div>
    );
};
export default PostPreview;

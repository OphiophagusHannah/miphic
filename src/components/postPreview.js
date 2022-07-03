import React from 'react';
import { RichText } from '@graphcms/rich-text-react-renderer';
import AnchorLink from 'react-anchor-link-smooth-scroll';

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

            {/* <section className="section-block section-offer" id="what-we-offer">
                <h3 className="offer-heading"  dangerouslySetInnerHTML={{__html: post.columnsHeading.html }}></h3>
                <div className="columns-wrapper">
                    <div className="line" dangerouslySetInnerHTML={{__html: post.offerColumnFirst.html }}></div>
                    <div className="line" dangerouslySetInnerHTML={{__html: post.offerColumnSecond.html }}></div>
                    <div className="line" dangerouslySetInnerHTML={{__html: post.offerColumnThird.html }}></div>
                </div>
                <div className="special-request">
                    <p> Do you have some special mitochondrial screening request?</p>
                <a href="mailto:test@gmail.com" className="button">Send Us Message</a>
                </div>
                <div className="special-request"> But we don't stop after mitochondrial screening..... we also analyze big data!
                <AnchorLink href="#data" cclassName="button">big data analysis</AnchorLink>
                </div>
            </section> */}

            <section className="section-block section-services" id="what-we-offer">
                <span className="tag">what We Offer</span>
                <h3 className="offer-heading"  dangerouslySetInnerHTML={{__html: post.columnsHeading.html }}></h3>

                <div className="columns-wrapper">
                    <div className="line" >
                        <span className="dot">1</span>
                        <div dangerouslySetInnerHTML={{__html: post.offerColumnFirst.html }}></div>
                    </div>
                    <div className="line" >
                        <span className="dot">2</span>
                        <div dangerouslySetInnerHTML={{__html: post.offerColumnSecond.html }}></div>
                    </div>
                    <div className="line" >
                        <span className="dot">3</span>
                        <div dangerouslySetInnerHTML={{__html: post.offerColumnThird.html }}></div>
                    </div>

                </div>
                <div className="additional-services">
                <div className="line">
                        <h4 dangerouslySetInnerHTML={{__html: post.moreOffers.html }}></h4>
                        <a href="mailto:test@gmail.com" className="button">Send Us Message</a>
                    </div>
                    {/* <div className="line">
                        <h4  dangerouslySetInnerHTML={{__html: post.bigDataColumn.html }}></h4>
                        <AnchorLink href="#data" className="button">big data analysis</AnchorLink>
                    </div> */}
                </div>
            </section>

            <section className="section-block" id="how-it-works">
                <div className="block-inner-wrapper block-inner-wrapper--top">
                    <div className="left-column">
                        <span className="tag">Our Approach</span>
                        <h3 dangerouslySetInnerHTML={{__html: post.technologyHeading.html }}></h3>
                    </div>
                    <div className="right-column">
                    
                            <div>
                                <img className="cover-image cover-image-hide" src={ post.beforeTechnologyImage.url } />
                                <img className="cover-image" src={ post.afterTechnologyImage.url } />
                            </div>

                            <div>
                                
                                <h3>Before Treatment</h3>/<h3>After Treatment</h3>
                            </div>
                   
                    </div>
                </div>
            </section>

            {/* <section className="section-block" id="how-it-works">
                <span className="tag">Our Approach</span>
                <h3 dangerouslySetInnerHTML={{__html: post.technologyHeading.html }}></h3>

                <div className="block-inner-wrapper">
                    <div>
                        <img className="cover-image" src={ post.beforeTechnologyImage.url } />
                        <h3>Before Treatment</h3>
                    </div>

                    <div>
                        <img className="cover-image" src={ post.afterTechnologyImage.url } />
                        <h3>After Treatment</h3>
                    </div>
                </div>
            </section> */}

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


            <section className="section-block ml-block" id="data">

            <span className="tag">Big data analysis</span>
            <div className="block-inner">
             
               
                <div className="ml" dangerouslySetInnerHTML={{__html: post.mlContent.html }}></div>
                </div>
            </section>

            <section className="section-block section-block--contact" id="contact">
                <div className="contact-block">
                <h3 className="contact-heading" dangerouslySetInnerHTML={{__html: post.contactUsHeading.html }}></h3>
                <a href="mailto:test@gmail.com" className="button">Send Message</a>
                </div>
            </section>
        </div>
    );
};
export default PostPreview;

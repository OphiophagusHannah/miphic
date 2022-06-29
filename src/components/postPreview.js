import React from 'react';


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
                 <span className="tag">Our Goal</span>
                <div className="block-inner">    
               
                <h3 className="text-statement">{ post.statementSubheading }</h3>
                <h2 className="mission-statement">{ post.statement }</h2>
                </div>
                </div>

            
            </section>
            <section className="section-subblock">
            <div className="block-inner"> 
            { post.offerHeading.html }
            </div>
            </section>
            <section className="section-block" id="what-we-offer">
  
            <div className="block-inner-wrapper">
            {/* <span className="tag">What We Offer</span> */}
            {/* <div className="block-inner">  */}
                <h3>{ post.columnsHeading.html }</h3>
                {/* </div> */}
                </div>
                <div className="block-inner-wrapper block-inner-wrapper--bottom">
                <div className="column">{ post.offerColumnFirst.html }</div>
                <div className="column">{ post.offerColumnSecond.html }</div>
                <div className="column">{ post.offerColumnThird.html }</div>
                </div>
            </section>
            <section className="section-block" id="how-it-works">
            <div className="block-inner-wrapper block-inner-wrapper--top">
                <div className="left-column">
                <span className="tag">How it Works</span>
                <h3>{ post.technologyHeading.html }</h3>
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
            <section className="section-block" id="advantages">
                <h2>Advantages of using MipHic</h2>
                   
             
                <div className="block-inner-wrapper">
                <div className="column"><span>01</span>{ post.technologyColumnFirst.html }</div>
                <div className="column"><span>02</span>{ post.technologyColumnSecond.html }</div>
                <div className="column"><span>03</span>{ post.technologyColumnThird.html }</div>
                <div className="column"><span>04</span>{ post.technologyColumnFourth.html }</div>
                </div>
            </section>
            <section className="section-block" id="data-analysis">
            <span className="tag">Big data analysis</span>
            <div className="column">{ post.mlContent.html }</div>
            </section>
        </div>
    );
};
export default PostPreview;

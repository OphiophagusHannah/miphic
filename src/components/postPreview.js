import React from 'react';


const PostPreview = ({post}) => {
    return (
        <div className="post-preview">
            <section className="section-hero" >
                <h1>{ post.heroTitle }</h1>
                <h3>{ post.heroBody }</h3>
            </section>
            <section className="section-block" id="our-mission">
                <span>Our Goal</span>
                <h3>{ post.statementSubheading }</h3>
                <h2>{ post.statement }</h2>
            </section>
            <section className="section-block" id="what-we-offer">
                <div>{ post.offerHeading.html }</div>
                <span>What We Offer</span>
                <h3>{ post.columnsHeading.html }</h3>
                <div className="column">{ post.offerColumnFirst.html }</div>
                <div className="column">{ post.offerColumnSecond.html }</div>
                <div className="column">{ post.offerColumnThird.html }</div>
            </section>
            <section className="section-block" id="how-it-works">
                <span>How it Works</span>
                <h3>{ post.technologyHeading.html }</h3>
                <span>Advantages of using MipHic</span>
                <div className="column">{ post.technologyColumnFirst.html }</div>
                <div className="column">{ post.technologyColumnSecond.html }</div>
                <div className="column">{ post.technologyColumnThird.html }</div>
                <div className="column">{ post.technologyColumnFourth.html }</div>
            </section>
            <section className="section-block" id="data-analysis">
            <span>Big data analysis</span>
            <div className="column">{ post.mlContent.html }</div>
            </section>
        </div>
    );
};
export default PostPreview;

import {React, useState} from 'react';
import { RichText } from '@graphcms/rich-text-react-renderer';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import FadeIn from 'react-fade-in';


const PostPreview = ({post, noImage}) => {

    const [isActive, setIsActive] = useState(false);

    const handleClick = event => {
      // 👇️ toggle isActive state on click
      setIsActive(current => !current);
    };



    return (
        <div className="post-preview">
            <FadeIn>
            <section className="section-hero" data-aos={"fade-up"} >
                <div className="hero-inner">                
                    <h1>{ post.heroTitle }</h1>
                    <h3>{ post.heroBody }</h3>
                </div>
                <div className="arrow-wrapper">
                    <AnchorLink href="#our-mission" className="button">
                        <span className="arrow-button">
                        </span>
                        </AnchorLink>
                </div>
            </section>

            <section className="section-block section-mission" id="our-mission" data-aos={"fade-up"}>
                <div className="block-inner-wrapper">
                    <span className="tag">{ post.tagMission }</span>
                    <div className="block-inner">    
                        <h3 className="text-statement">{ post.statementSubheading }</h3>
                        <h2 className="mission-statement">{ post.statement }</h2>
                    </div>
                </div>
            {/* </section>

            <section className="section-subblock important-section" data-aos={"fade-up"}> */}
                <div className="block-inner important-section">
                    <span className="">{ post.tagImportance }</span>
                    <div className="important-heading" dangerouslySetInnerHTML={{__html: post.offerHeading.html }}> 
                    </div>
                </div>
            </section>

            <section className="section-block section-services" id="what-we-offer" data-aos={"fade-up"}>
                <span className="tag">{ post.tagOffer }</span>
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
                <div className="additional-services" data-aos={"fade-up"}>
                    <div className="line">
                        <h4 dangerouslySetInnerHTML={{__html: post.moreOffers.html }}></h4>
                        <a href={ post.contactEmail } className="button">Send Us Message</a>
                    </div>
                    <div className="line">
                        <h4  dangerouslySetInnerHTML={{__html: post.bigDataColumn.html }}></h4>
                        <AnchorLink href="#data" className="button">big data analysis</AnchorLink>
                    </div>
                </div>
            </section>

            <section className="section-block" id="how-it-works" data-aos={"fade-up"}>
                <div className="block-inner-wrapper block-inner-wrapper--top">
                    <div className="left-column">
                        <span className="tag">{ post.tagApproach }</span>
                        <h3 dangerouslySetInnerHTML={{__html: post.technologyHeading.html }}></h3>
                    </div>
                    <div className="right-column" >
                        <div className={isActive ? 'image-after' : 'image-before'}>
                            {/* <img className="cover-image cover-image-before" src={ post.beforeTechnologyImage.url } />
                            <img className="cover-image cover-image-after" src={ post.afterTechnologyImage.url } /> */}

                            <svg width="1417" height="" viewBox="0 0 1417 1102" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M53.0191 156.782C54.1457 98.8797 96.0954 49 161.508 49C224.454 49 267.857 99.0258 268.981 156.782C270.126 215.607 220.215 264.863 161.508 265C102.657 265.137 51.8717 215.751 53.0191 156.782Z" fill="#12b8ff" className="green"/>
                            <path d="M328.019 156.782C329.146 98.8797 371.095 49 436.508 49C499.454 49 542.857 99.0258 543.981 156.782C545.126 215.607 495.215 264.863 436.508 265C377.657 265.137 326.872 215.751 328.019 156.782Z" fill="#12b8ff"/>
                            <path d="M603.019 156.782C604.146 98.8797 646.095 49 711.508 49C774.454 49 817.857 99.0258 818.981 156.782C820.126 215.607 770.215 264.863 711.508 265C652.657 265.137 601.872 215.751 603.019 156.782Z" fill="#12b8ff"className="red"/>
                            <path d="M878.019 156.782C879.146 98.8797 921.095 49 986.508 49C1049.45 49 1092.86 99.0258 1093.98 156.782C1095.13 215.607 1045.22 264.863 986.508 265C927.657 265.137 876.872 215.751 878.019 156.782Z" fill="#12b8ff"/>
                            <path d="M1153.02 156.782C1154.15 98.8797 1196.1 49 1261.51 49C1324.45 49 1367.86 99.0258 1368.98 156.782C1370.13 215.607 1320.22 264.863 1261.51 265C1202.66 265.137 1151.87 215.751 1153.02 156.782Z" fill="#12b8ff" className="green"/>
                            <path d="M53.0191 936.782C54.1457 878.88 96.0954 829 161.508 829C224.454 829 267.857 879.026 268.981 936.782C270.126 995.607 220.215 1044.86 161.508 1045C102.657 1045.14 51.8717 995.751 53.0191 936.782Z" fill="#12b8ff"/>
                            <path d="M328.019 936.782C329.146 878.88 371.095 829 436.508 829C499.454 829 542.857 879.026 543.981 936.782C545.126 995.607 495.215 1044.86 436.508 1045C377.657 1045.14 326.872 995.751 328.019 936.782Z" fill="#12b8ff"/>
                            <path d="M603.019 936.782C604.146 878.88 646.095 829 711.508 829C774.454 829 817.857 879.026 818.981 936.782C820.126 995.607 770.215 1044.86 711.508 1045C652.657 1045.14 601.872 995.751 603.019 936.782Z" fill="#12b8ff"className="red"/>
                            <path d="M878.019 936.782C879.146 878.88 921.095 829 986.508 829C1049.45 829 1092.86 879.026 1093.98 936.782C1095.13 995.607 1045.22 1044.86 986.508 1045C927.657 1045.14 876.872 995.751 878.019 936.782Z" fill="#12b8ff"/>
                            <path d="M1153.02 936.782C1154.15 878.88 1196.1 829 1261.51 829C1324.45 829 1367.86 879.026 1368.98 936.782C1370.13 995.607 1320.22 1044.86 1261.51 1045C1202.66 1045.14 1151.87 995.751 1153.02 936.782Z" fill="#12b8ff"className="red"/>
                            <path d="M53.0191 676.782C54.1457 618.88 96.0954 569 161.508 569C224.454 569 267.857 619.026 268.981 676.782C270.126 735.607 220.215 784.863 161.508 785C102.657 785.137 51.8717 735.751 53.0191 676.782Z" fill="#12b8ff"/>
                            <path d="M328.019 676.782C329.146 618.88 371.095 569 436.508 569C499.454 569 542.857 619.026 543.981 676.782C545.126 735.607 495.215 784.863 436.508 785C377.657 785.137 326.872 735.751 328.019 676.782Z" fill="#12b8ff" className="green"/>
                            <path d="M603.019 676.782C604.146 618.88 646.095 569 711.508 569C774.454 569 817.857 619.026 818.981 676.782C820.126 735.607 770.215 784.863 711.508 785C652.657 785.137 601.872 735.751 603.019 676.782Z" fill="#12b8ff"/>
                            <path d="M878.019 676.782C879.146 618.88 921.095 569 986.508 569C1049.45 569 1092.86 619.026 1093.98 676.782C1095.13 735.607 1045.22 784.863 986.508 785C927.657 785.137 876.872 735.751 878.019 676.782Z" fill="#12b8ff" className="green"/>
                            <path d="M1153.02 676.782C1154.15 618.88 1196.1 569 1261.51 569C1324.45 569 1367.86 619.026 1368.98 676.782C1370.13 735.607 1320.22 784.863 1261.51 785C1202.66 785.137 1151.87 735.751 1153.02 676.782Z" fill="#12b8ff"/>
                            <path d="M53.0191 416.782C54.1457 358.88 96.0954 309 161.508 309C224.454 309 267.857 359.026 268.981 416.782C270.126 475.607 220.215 524.863 161.508 525C102.657 525.137 51.8717 475.751 53.0191 416.782Z" fill="#12b8ff"/>
                            <path d="M328.019 416.782C329.146 358.88 371.095 309 436.508 309C499.454 309 542.857 359.026 543.981 416.782C545.126 475.607 495.215 524.863 436.508 525C377.657 525.137 326.872 475.751 328.019 416.782Z" fill="#12b8ff"/>
                            <path d="M603.019 416.782C604.146 358.88 646.095 309 711.508 309C774.454 309 817.857 359.026 818.981 416.782C820.126 475.607 770.215 524.863 711.508 525C652.657 525.137 601.872 475.751 603.019 416.782Z" fill="#12b8ff" className="red"/>
                            <path d="M878.019 416.782C879.146 358.88 921.095 309 986.508 309C1049.45 309 1092.86 359.026 1093.98 416.782C1095.13 475.607 1045.22 524.863 986.508 525C927.657 525.137 876.872 475.751 878.019 416.782Z" fill="#12b8ff"/>
                            <path d="M1153.02 416.782C1154.15 358.88 1196.1 309 1261.51 309C1324.45 309 1367.86 359.026 1368.98 416.782C1370.13 475.607 1320.22 524.863 1261.51 525C1202.66 525.137 1151.87 475.751 1153.02 416.782Z" fill="#12b8ff"/>
                            <path d="M2 1100V2H1415V1100H2Z" stroke="#8FEBFF" stroke-width="3"/>
                            </svg>
                            <div className="toggle-buttons" >
                                <h4 className="toggle-button toggle-button-before" onClick={handleClick}>Before Treatment</h4>
                                <h4 className="toggle-button toggle-button-after" onClick={handleClick}>After Treatment</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-block section-advantages" id="advantages" data-aos={"fade-up"}>
                <div className="block-inner-wrapper ">
                    <span className="tag">{ post.tagBenefits }</span>
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

            <section className="section-block ml-block" id="data" data-aos={"fade-up"}>
                <div className="block-inner-wrapper ">
                    <span className="tag">{ post.tagData }</span>
                    <div className="block-inner">
                        <div className="ml" dangerouslySetInnerHTML={{__html: post.mlContent.html }}></div>
                    </div>
                </div>
            </section>

            <section className="section-block section-block--contact" id="contact" data-aos={"fade-up"}>
                <div className="contact-block">
                <div className="contact-heading" dangerouslySetInnerHTML={{__html: post.contactUsHeading.html }}></div>
                <a href={ post.contactEmail } className="button">Send Message</a>
                </div>
            </section>
            </FadeIn>
        </div>
    );
};
export default PostPreview;

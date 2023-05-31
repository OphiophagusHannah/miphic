import React from 'react';
import { Query } from 'react-apollo';
import PostsPreview from '../components/postPreview';
import GraphCMSContent from '../services/graphcms';
import Nav from '../components/Nav';
import ProgressBar from "react-scroll-progress-bar";

const Main = props => {
    const [posts, setPosts] = React.useState([]);
    const Client = new GraphCMSContent();
    const LoadingPostsJsx = () => (
            <section class="section-hero section-loading" data-aos="fade-up">
                <div class="hero-inner">
                    <h1>Miphic</h1>
                    <h3>High-throughput mitochondrial screening platform</h3>
                </div>
                <div class="arrow-wrapper">
                    <a href="#our-mission" class="button">
                        <span class="arrow-button"></span>
                    </a>
                </div>
            </section>
    );
    const ErrorLoadingPostsJsx = () => (
        <div className="mx-auto alert-danger">
            Error!
        </div>
    );
    return (
        <>
            <div className="">
                <ProgressBar height="6" bgcolor="cyan" duration="1" />
                <Nav/>
                <div className="">
                    <Query query={Client.fetchPosts()}>
                        {
                            ({loading, error, data}) => {
                                if (loading) return LoadingPostsJsx();
                                if (error) {
                                    console.log(error);
                                    return ErrorLoadingPostsJsx();
                                }
                                const POSTS = data.posts;
                                setPosts(POSTS);
                                return POSTS.slice(0,6).map(post => (
                                    <PostsPreview post={post} />
                                ));
                            }
                        }
                    </Query>
                </div>
            </div>
        </>
    );
};
export default Main;

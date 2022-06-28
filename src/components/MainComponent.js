import React from 'react';
import { Query } from 'react-apollo';
import PostsPreview from '../components/postPreview';
import GraphCMSContent from '../services/graphcms';
import Nav from '../components/Nav';

const Main = props => {
    const [setPosts] = React.useState([]);
    const Client = new GraphCMSContent();
    const LoadingPostsJsx = () => (
        <div>
            Loading...
        </div>
    );
    const ErrorLoadingPostsJsx = () => (
        <div className="mx-auto alert-danger">
            Error!
        </div>
    );
    return (
        <>
            <div className="">
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

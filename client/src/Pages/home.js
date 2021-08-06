import React from "react";
import { useQuery } from '@apollo/client';
import gql from "graphql-tag";
import { Grid } from 'semantic-ui-react'

import PostCard from '../Pages/PostCard'
import NewCard from '../Pages/NewPost'

function Home() {
    const { loading, data: { getPosts: posts } = {} } = useQuery(FETCH_POSTS)
    
    return (
            <Grid columns={3}>
                <Grid.Row>
                    <h1>New Posts</h1>
                </Grid.Row>
                <Grid.Row style= {{marginLeft: 15, marginRight: 15}}>
                    <NewCard/>
                </Grid.Row>
                <Grid.Row>
                    {loading ? (
                        <h1>Loading posts..</h1>
                    ) : (
                        posts && posts.map(post => (
                        <Grid.Column key={post.id} style= {{ marginBottom: 30}}>
                            <PostCard post={post}/>
                        </Grid.Column>
                        ))
                    )}
                </Grid.Row>
            </Grid>
    );
}



const FETCH_POSTS = gql`
    {
    getPosts {
        id
        body
        createdAt
        username
        likeCount
        likes {
            username
        }
        commentCount
        comments {
            id
            username
            createdAt
            body
        }
    }
    }
`;

export default Home;

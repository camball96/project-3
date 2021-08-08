import React, {Component} from "react";
import { useQuery } from '@apollo/client';
import gql from "graphql-tag";
import { Grid, Message } from 'semantic-ui-react'
import logo from '../Assets/logo.png'
import PostCard from '../Pages/PostCard'


function MyProfile() {
    const { loading, data: { getPosts: posts } = {} } = useQuery(FETCH_POSTS)
    
    const handleDismiss = () => {
        this.setState({ visible: false });
    }
    
    return (
        <div style={{
            marginTop:-12,
            padding:100,
            backgroundColor: '#0c4169'}}>
            <Grid columns={3}>
                <Grid.Row>
                    <img src={logo} style={{height:300, paddingLeft:600}}/>
                </Grid.Row>
                <Grid.Row>
                    <Message
                        onDismiss={handleDismiss}
                        header='Welcome back!'
                        content='Here you can find your post history, the likes on them and see the comments left!'
                        style={{
                            width:1000,
                            marginLeft:300,
                        }}
                    />
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
        </div>
    )
};



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

export default MyProfile;
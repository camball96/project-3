import React, { useContext } from "react";
import { useQuery } from '@apollo/client';
import gql from "graphql-tag";
import { Grid } from 'semantic-ui-react'
import logo from '../Assets/logo.png'

import { AuthContext } from "../module/AuthFile";
import MenuHeader from './menuHeader'
import PostCard from '../Pages/PostCard'
import NewCard from '../Pages/NewPost'

function Home() {
    const { loading, data: { getPosts: posts } = {} } = useQuery(FETCH_POSTS)
    
    return (
        <div style={{
            marginTop:-12,
            padding:100,
            backgroundColor: '#0c4169'}}>
            

            <Grid columns={1}>
                <Grid.Column >
                    <Grid.Row>
                    <img src={logo} style={{width:1200, paddingLeft:400}}/>
                    </Grid.Row>
                </Grid.Column>
                
                <Grid.Row style= {{marginLeft: 15, marginRight: 15}}>
                    <Grid.Column>
                        <NewCard/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            <Grid columns={3}>
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

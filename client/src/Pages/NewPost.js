import React, { useState, useContext } from 'react'
import { Label, Card, Icon, Image, Button, Form, Grid } from "semantic-ui-react";
import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import { AuthContext } from '../module/AuthFile';


function NewPost(props){
    const context = useContext(AuthContext)
    const [values, setValues] = useState({
        id:'',
        body: ''
    });

    const onChange = (event) => {
        setValues({...values, [event.target.name]: event.target.value});
    }

    const [createPost, { loading }] = useMutation(NEW_POST, {
        update: (mutationResult) => {
            console.log('mutationResult: ', mutationResult);
            context.login(mutationResult.data.login)
            props.history.push('/home');
        },
        variables: values
    });


    const onSubmit = (event) => {
        event.preventDefault();
        createPost();
    };

    function createPostCallback() {
        createPost();
    }

    //const postId = props.match.params.postId;
    //const { user } = useContext(AuthContext);
// see if we can do an If statement on icon. IF comments === >0 have multi icon show

    return(
        <Grid divided='vertically' style={{marginLeft:0, fontSize:20}}>
            <Grid.Row columns={10}>
                        <Card fluid>
                        <Card.Content style={{padding: 30}}>
                            <Card.Header>Hi User!</Card.Header>
                            <Card.Meta></Card.Meta>
                            <Card.Description>  
                                <Form onSubmit={onSubmit} noValidate>     
                                    <Form.Field>
                                        <Form.Input label='Something on your mind?' type='text' name='body' value={values.body} onChange={onChange}/>
                                        <Button type='submit' content='Post!' />
                                    </Form.Field>
                                </Form>
                    </Card.Description>
                        </Card.Content>
                        <Card.Content extra></Card.Content>
                    </Card>
            </Grid.Row>
        </Grid>

    )
}


const NEW_POST = gql`
    mutation createPost($body: String!) {
        createPost(body: $body) {
            id
            body
            createdAt
            username
            likes {
                id
                username
                createdAt
            }
            likeCount
            comments {
                    id
                    body
                    username
                    createdAt
            }
            commentCount
        }
    }
`;


export default NewPost;

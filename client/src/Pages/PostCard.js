import { func } from "prop-types";
import React from 'react';
import { Label, Card, Icon, Image, Button } from "semantic-ui-react";
import moment from 'moment';

function PostCard({ post: { body, id, username, likeCount, likes, commentCount, createdAt}}){
    
    function likePost(){
        console.log(likePost);
    }

    function commentOnPost(){
        console.log(commentOnPost);
    }


// see if we can do an If statement on icon. IF comments === >0 have multi icon show

    return(
        <Card fluid>
            <Card.Content style={{padding: 30}}>
                <Image
                floated='right'
                size='medium'
                src='https://react.semantic-ui.com/images/avatar/large/molly.png'
                />
                <Card.Header>{username}</Card.Header>
                <Card.Meta>{moment(createdAt).fromNow()}</Card.Meta>
                <Card.Description>{body}</Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Button as='div' labelPosition='right' onClick={likePost}>
                    <Button icon basic>
                        <Icon name='heart' color='red' style={{paddingRight:25}}/>
                        Like
                    </Button>
                    <Label as='a' basic pointing='left'>
                        {likeCount}
                    </Label>
                </Button>
                <Button as='div' labelPosition='right' onClick={commentOnPost}>
                    <Button icon basic>
                        
                        <Icon name='comment' color='green' style={{paddingRight:25}}/>
                        Comment
                    </Button>
                    <Label as='a' basic pointing='left'>
                        {commentCount}
                    </Label>
                </Button>
            </Card.Content>
            </Card>
    )
}

export default PostCard;
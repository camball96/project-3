import { func } from "prop-types";
import React from 'react';
import { Label, Card, Icon, Image } from "semantic-ui-react";
import moment from 'moment';

function PostCard({ post: { body, id, username, likeCount, likes, commentCount, createdAt}}){

    return(
        <Card>
            <Card.Content>
                <Image
                floated='right'
                size='mini'
                src='https://react.semantic-ui.com/images/avatar/large/molly.png'
                />
                <Card.Header>{username}</Card.Header>
                <Card.Meta>{moment(createdAt).fromNow()}</Card.Meta>
                <Card.Description>{body}</Card.Description>
            </Card.Content>
            <Card.Content extra>
                <p>Buttons here</p>
            </Card.Content>
            </Card>
    )
}

export default PostCard;
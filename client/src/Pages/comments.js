import React from 'react'
import { Feed, Icon } from 'semantic-ui-react'



function Comments() {
    const { loading, data: { getComments: comments } = {} } = useQuery(FETCH_COMMENTS)

    return (
        <Feed>
            <Feed.Event>
            <Feed.Label>
                <img src='/images/avatar/small/elliot.jpg' />
            </Feed.Label>
            <Feed.Content>
                <Feed.Summary>
                <Feed.User>Elliot Fu</Feed.User> added you as a friend
                <Feed.Date>1 Hour Ago</Feed.Date>
                </Feed.Summary>
                <Feed.Meta>
                <Feed.Like>
                    <Icon name='like' />4 Likes
                </Feed.Like>
                </Feed.Meta>
            </Feed.Content>
            </Feed.Event>
        </Feed>
    )
}

const FETCH_COMMENTS = gql`
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

export default Comments;
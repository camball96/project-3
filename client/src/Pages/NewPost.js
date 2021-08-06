import React from 'react';
import { Label, Card, Icon, Image, Button, Form, Grid } from "semantic-ui-react";


function NewPost(){
    

// see if we can do an If statement on icon. IF comments === >0 have multi icon show

    return(
        <Grid divided='vertically' style={{marginLeft:0}}>
            <Grid.Row columns={10}>
                        <Card fluid>
                        <Card.Content style={{padding: 30}}>
                            <Image
                            floated='right'
                            size='medium'
                            src='https://react.semantic-ui.com/images/avatar/large/molly.png'
                            />
                            <Card.Header>username</Card.Header>
                            <Card.Meta></Card.Meta>
                            <Card.Description>  
                                <Form>     
                                    <Form.Field>
                                        <label>Whats new?</label>
                                        <input />
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


export default NewPost;

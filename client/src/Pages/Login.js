import React from 'react';
import { Button, Checkbox, Container, Form, Grid, Dropdown, Menu } from 'semantic-ui-react'

function submit(){
    console.log("Submitted");
};


function Login() {
    return (
        <div>
            <h1>Log in and see what's new!?</h1>
            <Grid celled>
                <Grid.Row>
                    <Grid.Column width={5}>
                        <Menu secondary vertical>
                            <Menu.Item
                            name='account'
                            //active={activeItem === 'account'}
                            //onClick={this.handleItemClick}
                            />
                            <Menu.Item
                            name='settings'
                            //active={activeItem === 'settings'}
                            //onClick={this.handleItemClick}
                            />
                            <Dropdown item text='Display Options'>
                            <Dropdown.Menu>
                                <Dropdown.Header>Text Size</Dropdown.Header>
                                <Dropdown.Item>Small</Dropdown.Item>
                                <Dropdown.Item>Medium</Dropdown.Item>
                                <Dropdown.Item>Large</Dropdown.Item>
                            </Dropdown.Menu>
                            </Dropdown>
                        </Menu>
                    </Grid.Column>
                    <Grid.Column width={10}>
                        <Form onSubmit={submit} >
                            <Form.Input label='Enter Username' type='username' name='username' />
                            <Form.Input label='Enter Password' type='password' />
                            <Button content='Register!' />
                        </Form>
                    </Grid.Column>
                </Grid.Row>
            </Grid>

        </div>
    )
}


export default Login;
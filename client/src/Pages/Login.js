import React, { useState, useContext } from 'react'
import { Button, Checkbox, Container, Form, Grid, Dropdown, Menu } from 'semantic-ui-react'
import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import logo from '../Assets/logo.png'
import { AuthContext } from '../module/AuthFile'





function Login(props) {
    const context = useContext(AuthContext)
    const [values, setValues] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const onChange = (event) => {
        setValues({...values, [event.target.name]: event.target.value});
    }
    


    const [loginUser, { loading }] = useMutation(LOGIN, {
        update: (mutationResult) => {
            console.log('mutationResult: ', mutationResult);
            context.login(mutationResult.data.login)
            props.history.push('/home');
        },
        variables: values
    });

    const onSubmit = (event) => {
        event.preventDefault();
        loginUser();
    };


//Maybe add a 'remember me' button to make it easier for logging in
    return (
            <div style={{
                height:900,
                marginTop:-13,
                padding:100,
                backgroundColor: '#0c4169'}}>
            
            <Grid fluid>
                <Grid.Row>
                    <Grid.Column width={10}>
                        <img src={logo}  height="400"/>
                    </Grid.Column>
                    <Grid.Column width={5}>
                        <Form onSubmit={onSubmit} noValidate style={{
                            padding: 50,
                            backgroundColor: 'white',
                            borderRadius: 10,
                            fontSize: 20,
                            
                            }}>
                            <h1>Login and see whats new?</h1>
                            <Form.Input label='Enter Username' type='text' name='username' value={values.username} onChange={onChange}/>
                            <Form.Input label='Enter Password' type='password' name='password' value={values.password} onChange={onChange}/>
                            
                            <Button type='submit' content='Login' />
                            <Button type='submit' content='Not Registered? Sign up here' href='/register' />

                            <Menu secondary style={{
                                marginTop:0,
                                padding: 50,
                                backgroundColor: 'white',
                                fontSize:20,
                                justifyContent: 'center'
                                }} >
                                <Menu.Item
                                name='Easy mode'
                                //active={activeItem === 'account'}
                                //onClick={this.handleItemClick}
                                />
                                <Menu.Item
                                name='settings'
                                //active={activeItem === 'settings'}
                                //onClick={this.handleItemClick}
                                />
                                <Dropdown item text='Text Size'>
                                <Dropdown.Menu>
                                    <Dropdown.Item>Small</Dropdown.Item>
                                    <Dropdown.Item>Medium</Dropdown.Item>
                                    <Dropdown.Item>Large</Dropdown.Item>
                                </Dropdown.Menu>
                                </Dropdown>
                            </Menu>
                        </Form>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            
        </div>
    )
}

const LOGIN = gql`
    mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password)
    {
        id
        email
        createdAt 
        username
        token
    }
    }
`;

export default Login;


/*function Login() {
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


export default Login */
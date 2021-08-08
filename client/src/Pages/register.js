import React, { useState, useContext } from 'react'
import { Button, Checkbox, Container, Form, Grid, Dropdown, Menu } from 'semantic-ui-react'
import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import logo from '../Assets/logo.png'
import { AuthContext } from '../module/AuthFile'

// Make checkbox agreement save on db?
function NewRegister(props) {
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
    
        /*const [addUser, { loading }] = useMutation(NEW_REGISTER, {
        update(proxy, result){
            console.log(result);
        },
        variables: values
    });*/


    const [addUser, { loading }] = useMutation(NEW_REGISTER, {
        update: (mutationResult) => {
            console.log('mutationResult: ', mutationResult);
            context.login(mutationResult.data.login)
            props.history.push('/home');
        },
        variables: values
    });

    const onSubmit = (event) => {
        event.preventDefault();
        addUser();
    };



    return (
        <div style={{
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
                            <h1>Ready to sign up?</h1>
                            <Form.Input label='Enter Username' type='text' name='username' placeholder='username..' value={values.username} onChange={onChange}/>
                            <Form.Input label='Enter Password' type='password' name='password' placeholder='password..' value={values.password} onChange={onChange}/>
                            <Form.Input label='Confirm Password' type='password' name='confirmPassword' placeholder='confirm password..' value={values.confirmPassword} onChange={onChange} />
                            <Form.Input label='Enter Email' type='text' name='email' placeholder='your email..' value={values.email} onChange={onChange} />
                            <Form.Checkbox label='I agree to the Terms and Conditions' type='checkbox' name='checkbox'/>
                            <Button type='submit' content='Register!' />
                            <Button type='submit' content='Already a member? Login here!' href='/login'/>

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

const NEW_REGISTER = gql`
    mutation register(
        $username: String!
        $email: String!
        $password: String!
        $confirmPassword: String!
    ) {
        register(
            registerInput: {
                username: $username
                email: $email
                password: $password
                confirmPassword: $confirmPassword
            }
        ){
            id
            email
            createdAt 
            username
            token
        }
    }
`

export default NewRegister;



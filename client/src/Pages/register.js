import React, { useState, useContext } from 'react'
import { Button, Checkbox, Container, Form } from 'semantic-ui-react'
import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';


// Make checkbox agreement save on db?
function NewRegister() {
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
        update: (proxy, mutationResult) => {
            console.log('mutationResult: ', mutationResult);
        },
        variables: values
    });

    const onSubmit = (event) => {
        event.preventDefault();
        addUser();
    };



    return (
        <div>
            <Form onSubmit={onSubmit} noValidate>
                <h1>Ready to sign up?</h1>
                <Form.Input label='Enter Username' type='text' name='username' value={values.username} onChange={onChange}/>
                <Form.Input label='Enter Password' type='password' value={values.password} onChange={onChange}/>
                <Form.Input label='Confirm Password' type='password' value={values.confirmPassword} onChange={onChange} />
                <Form.Input label='Enter Email' type='text' value={values.email} onChange={onChange} />
                <Form.Checkbox label='I agree to the Terms and Conditions' type='checkbox' name='checkbox'/>
                <Button type='submit' content='Register!' />
            </Form>
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
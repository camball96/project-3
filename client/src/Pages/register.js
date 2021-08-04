import React, { useState, useMutation } from 'react'
import { Button, Checkbox, Container, Form } from 'semantic-ui-react'
import gql from 'graphql-tag';


function submit(){
    console.log("Submitted");
};



// Make checkbox agreement save on db?
function NewRegister() {
    const [values, setValues] = useState({
        username: '',
        email: '',
        password:'',
        confirmPassword:''
    })

    const onChange = (e) => {
        setValues({...values,[e.target.name]: e.target.value});
    }
    
    
    const [ addUser, { loading }] = useMutation(NEW_REGISTER,{
        update(result){
            console.log(result);
        },
        variables: {
            username: values.username,
            email: values.email,
            password: values.password,
            confirmPassword: values.confirmPassword
        }
    });

    const onSub = (e) => {
        e.preventDefault();
        addUser();
    }


 
    return (
        <div>
            <h1>Ready to sign up?</h1>
            <Form onSubmit={submit} >
            <Form.Input label='Enter Username' type='username' name='username' value={values.username} onChange={onChange}/>
            <Form.Input label='Enter Password' type='password' value={values.password} onChange={onChange} />
            <Form.Input label='Confirm Password' type='password' value={values.confirmPassword} onChange={onChange} />
            <Form.Input label='Enter Email' type='email' value={values.email} onChange={onChange} />
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
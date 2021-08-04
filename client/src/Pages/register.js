import React from 'react'
import { Button, Checkbox, Container, Form } from 'semantic-ui-react'


function submit(){
    console.log("Submitted");
};

function Register() {
    return (
        <div>
            <Form onSubmit={submit} >
            <Form.Input label='Enter Username' type='username' />
            <Form.Input label='Enter Password' type='password' />
            <Form.Input label='Enter Email' type='email' />
            </Form>
        </div>
    )
}


export default Register;
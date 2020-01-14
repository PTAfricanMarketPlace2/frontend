import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, FormControl, FormLabel } from 'react-bootstrap';
import axios from 'axios';

export default function Login(props) {
  const [username, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  

  function validateForm() {
    return username.length > 0 && password.length > 0;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const values = { username: username, password: password };

    axios
      .post('https://african-marketplace2.herokuapp.com/api/auth/login', values)
      .then(res => {
        console.log(res.status);
        localStorage.setItem('token', res.data.token);
        props.history.push('/mfeed');
      })
      .catch(res => console.log(res));
  }

  return (
    <div id='Login'>
      <div>
        <h2>Log In</h2>
      </div>

      <Form className='signupCard' onSubmit={event => handleSubmit(event)}>
        <FormGroup className='form' controlId='username' bsSize='large'>
          <FormLabel>User Name</FormLabel>
          <FormControl
            autoFocus
            type='username'
            value={props.email}
            onChange={e => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup className='form' controlId='password' bsSize='large'>
          <FormLabel>Password</FormLabel>
          <FormControl
            value={props.password}
            onChange={e => setPassword(e.target.value)}
            type='password'
          />
        </FormGroup>
        <Button block bsSize='large' disabled={!validateForm()} type='submit'>
          Login
        </Button>
      </Form>
    </div>
  );
}

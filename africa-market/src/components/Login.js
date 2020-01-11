import React, { useState } from 'react';
import { Button, FormGroup, FormControl, FormLabel } from 'react-bootstrap';
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
    <div className='Login'>
      <div>
        <h2>Log In</h2>
      </div>

      <form id='signupCard' onSubmit={event => handleSubmit(event)}>
        <FormGroup controlId='username' bsSize='large'>
          <FormLabel>User Name</FormLabel>
          <FormControl
            autoFocus
            type='username'
            value={props.email}
            onChange={e => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId='password' bsSize='large'>
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
      </form>
    </div>
  );
}

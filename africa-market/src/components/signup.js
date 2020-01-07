import React, { useState } from 'react';
import {Form, FormControl, FormLabel, FormGroup, Button} from 'react-bootstrap';

// addMember(userInput)

const Signup = () => {
  const [userInput, setUserInput] = 
  useState({
    firstname: '',
    lastname: '',
    username: '',
    password: '',
    email: '',
    
  });

  const handleChanges = e =>
  setUserInput({
      ...userInput,
      [e.target.name]: e.target.value
    });

    


  const addMember = user => {
    const newMember = {
      first: user.firstname,
      last: user.lastname,
      username: user.username,
      password: user.password,
      email: user.email
      

    }
    
  };

  const submitForm = e => {
    e.preventDefault();
    addMember(userInput);
    setUserInput({
      firstname: '',
      lastname: '',
      username: '',
      password: '',
      email: '',
    
    });
  }


  return (
    <div>
      <div>
        <h2>Sign Up</h2>
      </div>
    <Form id="signupCard" onSubmit={submitForm}>
      <FormGroup className='form'>
        <FormLabel>First Name: </FormLabel>
      <FormControl
        value={userInput.firstname}
        onChange={handleChanges}
        placeholder='First Name'
        type='text'
        name='firstname'
        required
      />
      </FormGroup>
      <FormGroup className='form'>
        <FormLabel>Last Name: </FormLabel>
      <FormControl
        value={userInput.lastname}
        onChange={handleChanges}
        placeholder='Last Name'
        type='text'
        name='lastname'
        required
        
      />
      </FormGroup>
      <FormGroup className='form'>
        <FormLabel>Email: </FormLabel>
        <FormControl
        value={userInput.email}
        onChange={handleChanges}
        placeholder="Email Address"
        type="email"
        name="email"
        required
      />
      
      </FormGroup>
     
      <FormGroup className='form'>
        <FormLabel>Username: </FormLabel>
      <FormControl
        value={userInput.username}
        onChange={handleChanges}
        placeholder="Username"
        type="text"
        name="username"
        required
      />
      </FormGroup>
      <FormGroup className='form'>
      <FormLabel> Password: </FormLabel>
      <FormControl
        value={userInput.password}
        onChange={handleChanges}
        placeholder='Password'
        type='password'
        name='password'
        required
      />
      </FormGroup>

     
      <Button id="signupBtn" variant="dark" type="submit">Submit</Button>
      
    </Form>

    
    
    </div>
  );
};


export default Signup;
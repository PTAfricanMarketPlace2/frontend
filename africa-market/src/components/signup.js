import React, { useState } from 'react';
import SignupCard from '../components/SignupCard';

// addMember(userInput)

const SignupForm = () => {
  const [userInput, setUserInput] = 
  useState({
    firstName: '',
    lastName: '',
    userName: '',
    password: '',
    email: ''
  });

  const handleChanges = event =>
  setUserInput({
      ...userInput,
      [event.target.name]: event.target.value
    });

    // const handleFormSubmit = e => {
    //   e.preventDefault();
    //   addMember(teamMember);
    //   setUserInput({
    //       name:'',
    //       email:'',
    //       role:''
    //   });
    // }

  const { firstName, lastName, email, userName, password } = userInput;

  return (
    <div>
      <div>
        <h2>Sign Up</h2>
      </div>
    <form>
      <input
        value={firstName}
        onChange={handleChanges}
        placeholder='First name'
        type='text'
        name='firstName'
        required
      />
      <input
        value={lastName}
        onChange={handleChanges}
        placeholder='Last name'
        type='text'
        name='lastName'
        required
      />
      <input
        value={userName}
        onChange={handleChanges}
        placeholder="Username"
        type="text"
        name="userName"
        required
      />
      <input
        value={password}
        onChange={handleChanges}
        placeholder='Password'
        type='password'
        name='password'
        required
      />
      <input
        value={email}
        onChange={handleChanges}
        placeholder="Email address"
        type="email"
        name="email"
        required
      />

      <button type='submit'>Submit</button>
    </form>
    </div>
  );
};


export default SignupForm;
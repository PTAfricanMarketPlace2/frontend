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

  const addMember = user => {
    const newMember = {
      first: user.firstName,
      last: user.lastName,
      username: user.userName,
      password: user.password,
      email: user.email,
      role: user.role

    }
    setUserInput([...userInput, newMember])
  };

  const submitForm = e => {
    e.preventDefault();
    addMember();
    setUserInput({
      firstName: '',
      lastName: '',
      userName: '',
      password: '',
      email: ''
    });
  }

  const handleChanges = event =>
  setUserInput({
      ...userInput,
      [event.target.name]: event.target.value
    });

    

  // const { firstName, lastName, email, userName, password } = userInput;

  return (
    <div>
      <div>
        <h2>Sign Up</h2>
      </div>
    <form>
      <input
        value={userInput.firstName}
        onChange={handleChanges}
        placeholder='First name'
        type='text'
        name='firstName'
        required
      />
      <input
        value={userInput.vlastName}
        onChange={handleChanges}
        placeholder='Last name'
        type='text'
        name='lastName'
        required
      />
      <input
        value={userInput.userName}
        onChange={handleChanges}
        placeholder="Username"
        type="text"
        name="userName"
        required
      />
      <input
        value={userInput.password}
        onChange={handleChanges}
        placeholder='Password'
        type='password'
        name='password'
        required
      />
      <input
        value={userInput.email}
        onChange={handleChanges}
        placeholder="Email address"
        type="email"
        name="email"
        required
      />

      <button onSubmit={submitForm} type='submit'>Submit</button>
    </form>
    </div>
  );
};


export default SignupForm;
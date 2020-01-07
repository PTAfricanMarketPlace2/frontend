import React, { useState } from 'react';


// addMember(userInput)

const Signup = () => {
  const [userInput, setUserInput] = 
  useState({
    firstname: '',
    lastname: '',
    username: '',
    password: '',
    email: ''
  });

  const handleChanges = event =>
  setUserInput({
      ...userInput,
      [event.target.name]: event.target.value
    });

    


  const addMember = user => {
    const newMember = {
      first: user.firstname,
      last: user.lastname,
      username: user.username,
      password: user.password,
      email: user.email,
      role: user.role

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
      email: ''
    });
  }


  return (
    <div>
      <div>
        <h2>Sign Up</h2>
      </div>
    <form>
      <input
        value={userInput.firstname}
        onChange={handleChanges}
        placeholder='First name'
        type='text'
        name='firstname'
        required
      />
      <input
        value={userInput.lastname}
        onChange={handleChanges}
        placeholder='Last name'
        type='text'
        name='lastname'
        required
      />
      <input
        value={userInput.username}
        onChange={handleChanges}
        placeholder="Username"
        type="text"
        name="username"
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


export default Signup;
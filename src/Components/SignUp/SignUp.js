import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/UserContext';
import './SignUp.css'

const SignUp = () => {

  const [error, setError] = useState(null);
  const { createUser } = useContext(AuthContext);


  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPass = form.confirm.value;
    console.log(confirmPass,password)

    if (password.length < 6) {
      setError('Password must be 6 character or more');
      return
    }

    if (password !== confirmPass) {
      setError('Your password did not match');
      return
    }
    createUser(email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        form.reset();
        setError(null)
      })
      .catch(error => console.error(error))

  }


  return (
    <div className='login-container'>
      <div className='login-title'>
        <h1>Sign Up</h1>
      </div>
      <form className='form-container' onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="" />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="" />
        </div>
        <div className="form-control">
          <label htmlFor="confirm">Password</label>
          <input type="password" name="confirm" id="" />
        </div>
        <input className='btn-submit' type="submit" value="Sign Up" />
      </form>
      <p>already have an account? <Link to='/login'>Login</Link></p>
      <p>{error}</p>
    </div>
  );
};

export default SignUp;
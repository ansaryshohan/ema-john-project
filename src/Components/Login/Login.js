import React from 'react';
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/UserContext';
import './Login.css'

const Login = () => {

  const { signIn } = useContext(AuthContext);
  const navigate= useNavigate();
  const location = useLocation();
  const from= location.state?.from?.pathname||'/';

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        form.reset();
        navigate(from, {replace:true})
      })
      .catch(error => { console.error(error) })
  }

  return (
    <div className='login-container'>
      <div className='login-title'>
        <h1>Login</h1>
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
        <input className='btn-submit' type="submit" value="Login" />
      </form>
      <p>New to ema john? <Link to='/signup'>Create new account</Link></p>
    </div>
  );
};

export default Login;
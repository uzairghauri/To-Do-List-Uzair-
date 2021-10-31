import React from 'react';
import auth from './auth';
import './Login.css';

export const Login = props => {
  return(
    <div className="login-wrapper">
    <form>
      <label>
        <p>Username</p>
        <input type="text" />
      </label>
      <label>
        <p>Password</p>
        <input type="password" />
      </label>
      <div>
        <button type= "submit" onClick= {
            () => {
                auth.login(() => {
                    props.history.push("/todo")
                });
            }
        }>
            Login
        </button>
      </div>
    </form>
    </div>
  )
}
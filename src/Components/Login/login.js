import React, { Component } from 'react';
import './login.css';

class login extends Component {
  render() {
    return (
      <div className="login-body">
        <div className="login-center" />
        <div className="login-div">
          <div className="login-welcome">
            <div className="login-welcome-message">
              Welcome
            </div>
            <div className="login-welcome-message">
              to
            </div>
            <div className="login-welcome-quizzy">
              Quizzy!
            </div>
          </div>
          <div className="login-form">
            <div className="login-form-name">
              Login
            </div>
            <div className="login-form-name">
              Username<br />
              <input type="text" />
            </div>
            <div className="login-form-button">
              <button type="submit">Login </button>
            </div>
          </div>
        </div>
        <div className="login-center" />
      </div>
    );
  }
}

login.defaultProps = {
  name: '',
};
export default login;

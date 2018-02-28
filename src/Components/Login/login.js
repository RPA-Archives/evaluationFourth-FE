import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './login.css';

class Login extends Component {
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
              <input
                type="text"
                onChange={tag => this.props.input(tag.target.value)}
              />
            </div>
            <div className="login-form-button">
              <button
                onClick={this.props.login}
              >Login
              </button>
            </div>
          </div>
        </div>
        <div className="login-center" />
      </div>
    );
  }
}

Login.defaultProps = {
  login: null,
  input: null,
};
export default Login;
Login.propTypes = {
  login: PropTypes.func,
  input: PropTypes.func,
};

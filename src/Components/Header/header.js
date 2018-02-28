import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './header.css';

class Header extends Component {
  render() {
    return (
      <div className="header-header">
        <div className="header-logo">
          Quizzy
        </div>
        <div className="header-username">
          {this.props.name ? `Hello ${this.props.name}` : ''}
        </div>
      </div>
    );
  }
}

Header.defaultProps = {
  name: '',
};
Header.propTypes = {
  name: PropTypes.string,
};
export default Header;

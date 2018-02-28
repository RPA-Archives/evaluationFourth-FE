import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './radioButton.css';

class RadioButton extends Component {
  render() {
    // const questions = JSON.parse(this.props.quiz));
    return (
      <div className="radio-fields" >
        <input
          required
          type="radio"
          className="question-radio"
          name={this.props.name}
          value={this.props.option}
          onClick={() => this.props.radioClick(this.props.name, this.props.option)}
        /> {this.props.option}
      </div>
    );
  }
}

export default RadioButton;
RadioButton.propTypes = {
  quiz: PropTypes.array,
};


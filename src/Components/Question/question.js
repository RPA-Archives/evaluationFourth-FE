import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './question.css';
import RadioButton from '../RadioButton/radioButton';

class quiz extends Component {
  render() {
    // console.log(this.props.marked);
    return (
      <div className="question-body" >
        <div className="question-number">
          Question {this.props.number}
        </div>
        <div className="question-question">
          {this.props.question.question}
        </div>
        <div className="question-options">
          {this.props.question.options.map(eachOption =>
            (<RadioButton
              marked={this.props.marked}
              option={eachOption.option}
              name={this.props.question.questionId}
              radioClick={(qid, option) => this.props.radioClick(qid, option)}
            />))}
        </div>
      </div>
    );
  }
}

quiz.defaultProps = {
  number: 0,
  marked: '',
  question: {
    questionId: 0,
    question: 'abc',
    options: [{
      option: 'abc',
    }],
    answer: 'abc',
  },
  radioClick: null,
};
export default quiz;
quiz.propTypes = {
  number: PropTypes.number,
  marked: PropTypes.string,
  question: PropTypes.shape({
    options: PropTypes.array,
    answer: PropTypes.string,
    question: PropTypes.string,
    questionId: PropTypes.number,
  }),
  radioClick: PropTypes.func,
};

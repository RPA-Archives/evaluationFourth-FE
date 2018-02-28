import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './question.css';
import RadioButton from '../RadioButton/radioButton';

class quiz extends Component {
  getOptions = () => {

  }
  render() {
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
  question: {
    questionId: 89,
    question: 'What is the capital of Montenegro',
    options: [
      {
        option: 'Podgorica',
      },
      {
        option: 'Antananarivo',
      },
      {
        option: 'Majuro',
      },
      {
        option: 'Andorra la Vella',
      },
    ],
  },

};
export default quiz;
quiz.propTypes = {
  question: PropTypes.object,
};

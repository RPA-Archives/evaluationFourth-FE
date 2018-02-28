import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './quiz.css';
import Question from '../Question/question';

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      queNo: 1,
    };
  }
  render() {
    return (
      <div className="quiz-body" >
        {this.props.quiz.map(question =>
          (<Question
            question={question}
            number={this.state.queNo++}
            radioClick={(qid, option) => this.props.radioClick(qid, option)}
          />))}
      </div>
    );
  }
}

Quiz.defaultProps = {
  quiz: [
    {
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
    {
      questionId: 120,
      question: 'What is the capital of Oman',
      options: [
        {
          option: 'Palikir',
        },
        {
          option: 'Muscat',
        },
        {
          option: 'Majuro',
        },
        {
          option: 'Warsaw',
        },
      ],
    },
    {
      questionId: 123,
      question: 'What is the capital of Palau',
      options: [
        {
          option: 'Palikir',
        },
        {
          option: 'Antananarivo',
        },
        {
          option: 'Ngerulmud',
        },
        {
          option: 'Warsaw',
        },
      ],
    },
    {
      questionId: 23,
      question: 'What is the capital of Afghanistan',
      options: [
        {
          option: 'Kabul',
        },
        {
          option: 'Tirana',
        },
        {
          option: 'Algiers',
        },
        {
          option: 'Andorra la Vella',
        },
      ],
    },
    {
      questionId: 56,
      question: 'What is the capital of Micronesia',
      options: [
        {
          option: 'Palikir',
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
    {
      questionId: 12,
      question: 'What is the capital of India',
      options: [
        {
          option: 'New Delhi',
        },
        {
          option: 'MP',
        },
        {
          option: 'UP',
        },
        {
          option: 'Bangalore',
        },
      ],
    },
    {
      questionId: 34,
      question: 'What is the capital of Madagascar',
      options: [
        {
          option: 'Kabul',
        },
        {
          option: 'Antananarivo',
        },
        {
          option: 'Algiers',
        },
        {
          option: 'Andorra la Vella',
        },
      ],
    },
    {
      questionId: 102,
      question: 'What is the capital of Nigeria',
      options: [
        {
          option: 'Abuja',
        },
        {
          option: 'Antananarivo',
        },
        {
          option: 'Majuro',
        },
        {
          option: 'Warsaw',
        },
      ],
    },
    {
      questionId: 78,
      question: 'What is the capital of Micronesia',
      options: [
        {
          option: 'Palikir',
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
    {
      questionId: 67,
      question: 'What is the capital of Monaco',
      options: [
        {
          option: 'Palikir',
        },
        {
          option: 'Monaco',
        },
        {
          option: 'Majuro',
        },
        {
          option: 'Andorra la Vella',
        },
      ],
    },
    {
      questionId: 45,
      question: 'What is the capital of Marshall Islands',
      options: [
        {
          option: 'Kabul',
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
    {
      questionId: 90,
      question: 'What is the capital of Namibia',
      options: [
        {
          option: 'Palikir',
        },
        {
          option: 'Antananarivo',
        },
        {
          option: 'Windhoek',
        },
        {
          option: 'Naypyidaw',
        },
      ],
    },
  ],

};
export default Quiz;
Quiz.propTypes = {
  quiz: PropTypes.array,
};

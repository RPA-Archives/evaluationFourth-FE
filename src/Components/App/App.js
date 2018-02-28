import React, { Component } from 'react';
import './App.css';
import Header from '../Header/header';
import Login from '../Login/login';
import Quiz from '../Quiz/quiz';
import Leaderboard from '../Leaderboard/leaderboard';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      username: '',
      userId: null,
      questions: [],
    };
  }
  onLogin = () => {
    fetch('/login', {
      method: 'POST',
      body: JSON.stringify({
        username: this.state.username,
      }),
    })
      .then(response => response.json())
      .then(data => this.setState({
        userId: data.userId,
      }))
      .then(() => {
        fetch('/fetch')
          .then(que => que.json())
          .then((allQuestions) => {
            this.setState({
              questions: allQuestions,
              page: 1,
            });
          });
      });
  }
  username = (value) => {
    this.setState({
      username: value,
    });
  }
  radioClick = (questionId, option) => {
    const uid = this.state.userId;
    const payload = {
      questionId,
      userId: uid,
      answer: option,
    };
    fetch('/answer', {
      method: 'POST',
      body: JSON.stringify(payload),
    })
      .then((response) => {
      });
  }
  calculate = () => {
    fetch('/score', {
      method: 'POST',
      body: JSON.stringify(this.state.userId),
    })
      .then(response => response.json())
      .then((score) => {
        this.setState({
          leaderboard: score,
          page: 2,
        });
      });
  }
  render() {
    if (this.state.page === 0) {
      return (
        <div className="app-body">
          <Header />
          <Login input={value => this.username(value)} login={this.onLogin} />
        </div>
      );
    } else if (this.state.page === 1) {
      return (
        <div className="app-body">
          <Header name={this.state.username} />
          <Quiz
            quiz={this.state.questions}
            radioClick={(qid, option) => this.radioClick(qid, option)}
          />
          <div className="calculate-div">
            <button
              className="calculate-button"
              onClick={() => this.calculate()}
            >Calculate
            </button>
          </div>
        </div>
      );
    }

    return (
      <div className="app-body">
        <Header name={this.state.username} />
        <Leaderboard
          score={this.state.leaderboard}
          username={this.state.username}
          total={this.state.questions.length}
        />
      </div>
    );
  }
}

export default App;

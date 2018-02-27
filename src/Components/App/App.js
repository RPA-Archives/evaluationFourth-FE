import React, { Component } from 'react';
import './App.css';
import Header from '../Header/header';
import Login from '../Login/login';
import AllQuestions from '../AllQuestions/allQuestions';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      username: '',
      userid: null,
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
        userid: data.userId,
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
          <AllQuestions questions={this.state.questions} />
        </div>
      );
    }
  }
}

export default App;

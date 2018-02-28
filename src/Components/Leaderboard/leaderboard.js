import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './leaderboard.css';
import Score from '../Score/score';

class Leaderboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      queNo: 1,
    };
  }
  render() {
    let userScore = 0;
    this.props.score.map((eachscore) => {
      if (eachscore.username === this.props.username) {
        userScore = eachscore.score;
      }
    });
    console.log(this.props);
    return (
      <div className="leader-fields" >
        <div className="leader-score">
          <div className="leader-score-title">
            Your Score
          </div>
          <div className="leader-score">
            <span className="score">
              {userScore}
            </span>
            /{this.props.total}
          </div>
        </div>
        <div className="leader-leaderboard">
          <div className="leader-head">
            Leaderboard
          </div>
          {this.props.score.map(eachscore => (
            <Score
              list={eachscore}
              user={this.props.username}
              count={this.state.queNo++}
            />
          ))}
        </div>
        <div>
          <button
            className="playagain"
            onClick={this.props.reset}
          >
          Play Again
          </button>
        </div>
      </div>
    );
  }
}

export default Leaderboard;

Leaderboard.propTypes = {
  username: PropTypes.string,
  reset: PropTypes.func,
  total: PropTypes.number,
  score: PropTypes.array,
};

Leaderboard.defaultProps = {
  username: 'ram',
  total: 0,
  reset: null,
  score: [
    {
      username: 'Ram',
      score: 10,
    },
  ],
};

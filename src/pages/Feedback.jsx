import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setResetScore } from '../redux/action';
import Header from '../components/Header';
import '../styles/Feedback.css';

class Feedback extends React.Component {
  resetScoreOnClick = () => {
    const { dispatch } = this.props;
    dispatch(setResetScore());
  };

  render() {
    const { assertions, score } = this.props;
    const tres = 3;
    return (
      <div className="flexFeedback">
        <Header />
        <div className="feedbackReport">
          {
            (assertions < tres) ? (
              <div className="feedbackInfo">
                <h1>Correct answers:</h1>
                <h1 data-testid="feedback-total-question">{assertions}</h1>
                <h1>Your score:</h1>
                <h1 data-testid="feedback-total-score">{score}</h1>
                <h1 data-testid="feedback-text">Could be better...</h1>
              </div>
            ) : (
              <div>
                <h1>Correct answers:</h1>
                <h1 data-testid="feedback-total-question">{assertions}</h1>
                <h1>Your score:</h1>
                <h1 data-testid="feedback-total-score">{score}</h1>
                <h1 data-testid="feedback-text">Well Done!</h1>
              </div>
            )
          }
        </div>
        <div className="botoesFeedback">
          <Link to="/">
            <button
              type="button"
              data-testid="btn-play-again"
              className="buttonFeedback"
              onClick={ this.resetScoreOnClick }
            >
              Play Again
            </button>
          </Link>
          <Link to="/ranking">
            <button
              type="button"
              data-testid="btn-ranking"
              className="buttonFeedback"
            >
              Ranking
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

Feedback.propTypes = {
  assertions: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  ...state.player,
});

export default connect(mapStateToProps)(Feedback);

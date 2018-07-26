import React from 'react'
import PropTypes from 'prop-types';
import { updateColorRating } from '../utils/api';
import { colors } from '../utils/enums';

class Vote extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      errorHappened: false,
      votesRecord: {}
    }

    this.handleVote = this.handleVote.bind(this);
  }

  handleVote() {
    this.setState(() => ({
      loading: true
    }), () => {
      const { color } = this.props;
      updateColorRating(color).then((result) => {
        let { votes } = result;
        this.setState((prevState) => {
          let votesRecord = prevState.votesRecord;
          votesRecord[color] = votes;
          return {
            loading: false,
            errorHappened: false,
            votesRecord: votesRecord
          }
        })
      }).catch((err) => {
        console.error(err);
        this.setState(() => ({
          loading: false,
          errorHappened: true
        }))
      })

    })
  }

  render() {
    const { loading, votesRecord, errorHappened } = this.state;
    const { color } = this.props;
    const votes = votesRecord[color];
    const voted = votes != null;

    let content = null;
    if (errorHappened) {
      content = <p className='vote-message'>There was an error ;( try refreshing the app</p>;
    } else if (loading) {
      content = <p className='vote-message'>Loading...</p>;
    } else if (voted) {
      content = <p className='vote-message'>So far, {votes} {votes === 1 ? 'person thinks' : 'folks think'}  that this color is orange.</p>;
    } else {
      content = <p className='vote-message disagree' onClick={this.handleVote}>I disagree</p>;
    }

    return (
      <div className='vote'>
        { color === colors.ORANGE
          ? <div><p className='vote-message' style={{visibility: 'hidden'}}>Filler!</p></div>
          : <div>{content}</div>
        }
      </div>
    )
  }

}

Vote.propTypes = {
  color: PropTypes.string.isRequired
}

export default Vote;
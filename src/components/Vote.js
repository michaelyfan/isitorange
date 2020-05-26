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
      updateColorRating(color.id).then((result) => {
        let { votes } = result;
        this.setState((prevState) => {
          let votesRecord = prevState.votesRecord;
          votesRecord[color.id] = votes;
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
    const { color, colorblind } = this.props;
    const votes = votesRecord[color.id];
    const voted = votes != null;

    const attributes = {
      className: 'vote-message',
      style: {
        color: color.contrast
      }
    };
    let content = '';
    if (color === colors.ORANGE) {
      attributes.style = { visibility: 'hidden' };
      content = 'Filler!';
      // content = <p className='vote-message' style={{visibility: 'hidden'}}>Filler!</p>;
    } else if (errorHappened) {
      content = 'There was an error ;( try refreshing the app';
    } else if (loading) {
      content = 'Loading...';
    } else if (voted) {
      content = `So far, ${votes} ${votes === 1 ? 'person thinks' : 'folks think'}  that this color is orange.`;
    } else {
      attributes.className += ' text-button';
      attributes.onClick = this.handleVote;
      attributes.style.color = undefined;
      content = 'I disagree';
    }
    if (colorblind) {
      attributes.className += ' bold';

      // override no contrast on text button
      attributes.style.color = color.contrast;
    }

    return (
      <div className='vote'>
        <div>
         <p {...attributes}>{content}</p>
        </div>
      </div>
    )
  }

}

Vote.propTypes = {
  color: PropTypes.object.isRequired,
  colorblind: PropTypes.bool.isRequired
}

export default Vote;
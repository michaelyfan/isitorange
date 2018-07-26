import React from 'react';
import PropTypes from 'prop-types';
import { colors } from '../utils/enums';

export default function BigMessage(props) {
  const { colorWasSelected, color } = props;
  const isOrange = color === colors.ORANGE;
  const message = colorWasSelected
    ? isOrange
      ? 'This color is orange.'
      : 'This color is not orange.'
    : 'Select a color:'

  return (
    <div>
      <p id='big-message'>{message}</p>
    </div>
  )
}

BigMessage.propTypes = {
  color: PropTypes.string.isRequired,
  colorWasSelected: PropTypes.bool.isRequired
}
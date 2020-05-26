import React from 'react';
import PropTypes from 'prop-types';
import { colors } from '../utils/enums';

export default function BigMessage(props) {
  const { colorWasSelected, color, colorblind } = props;
  const isOrange = color === colors.ORANGE;
  const message = colorWasSelected
    ? isOrange
      ? 'This color is orange.'
      : 'This color is not orange.'
    : 'Select a color:'
  const thisColor = colorblind
    ? color.contrast
    : color.accent || color.contrast;

  return (
    <div>
      <p
        id='big-message'
        style={{color: `${thisColor}`}}
      >
        {message}
      </p>
    </div>
  )
}

BigMessage.propTypes = {
  color: PropTypes.object.isRequired,
  colorWasSelected: PropTypes.bool.isRequired
}
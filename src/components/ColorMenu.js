import React from 'react';
import { colors } from '../utils/enums';
import PropTypes from 'prop-types';

function ColorButton(props) {
  const { handleClick, color, selectedColor, colorblind } = props;
  
  let className;
  if (color === selectedColor) {
    className = `${color} color-button color-button-selected`;
  } else {
    className = `${color} color-button`;
  }
  
  return (
    <div onClick={props.handleClick} className={className}>
      {colorblind && <p>{color}</p>}
    </div>
  )
}

ColorButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
  selectedColor: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
}

export default function ColorMenu(props) {
  const { changeColor, color, colorblind } = props;
  return (
    <div id='button-menu'>
      <ColorButton selectedColor={color} color='red' colorblind={colorblind} handleClick={() => {changeColor(colors.RED)}}>red</ColorButton>
      <ColorButton selectedColor={color} color='orange' colorblind={colorblind} handleClick={() => {changeColor(colors.ORANGE)}}>orange</ColorButton>
      <ColorButton selectedColor={color} color='yellow' colorblind={colorblind} handleClick={() => {changeColor(colors.YELLOW)}}>yellow</ColorButton>
      <ColorButton selectedColor={color} color='green' colorblind={colorblind} handleClick={() => {changeColor(colors.GREEN)}}>green</ColorButton>
      <ColorButton selectedColor={color} color='blue' colorblind={colorblind} handleClick={() => {changeColor(colors.BLUE)}}>blue</ColorButton>
      <ColorButton selectedColor={color} color='purple' colorblind={colorblind} handleClick={() => {changeColor(colors.PURPLE)}}>purple</ColorButton>
      <ColorButton selectedColor={color} color='black' colorblind={colorblind} handleClick={() => {changeColor(colors.BLACK)}}>black</ColorButton>
    </div>
  )
}

ColorMenu.propTypes = {
  changeColor: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired
}
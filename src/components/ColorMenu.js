import React from 'react';
import { colors } from '../utils/enums';
import PropTypes from 'prop-types';

function ColorButton(props) {
  const { handleClick, color } = props;
  const className = `${color} color-button`;
  return (
    <div onClick={props.handleClick} className={className}></div>
  )
}

ColorButton.propTypes = {
  handleClick: PropTypes.func.isRequired
}

export default function ColorMenu(props) {
  const { changeColor } = props;
  return (
    <div id='button-menu'>
      <ColorButton color='red' handleClick={() => {changeColor(colors.RED)}}>red</ColorButton>
      <ColorButton color='orange' handleClick={() => {changeColor(colors.ORANGE)}}>orange</ColorButton>
      <ColorButton color='yellow' handleClick={() => {changeColor(colors.YELLOW)}}>yellow</ColorButton>
      <ColorButton color='green' handleClick={() => {changeColor(colors.GREEN)}}>green</ColorButton>
      <ColorButton color='blue' handleClick={() => {changeColor(colors.BLUE)}}>blue</ColorButton>
      <ColorButton color='purple' handleClick={() => {changeColor(colors.PURPLE)}}>purple</ColorButton>
      <ColorButton color='black' handleClick={() => {changeColor(colors.BLACK)}}>black</ColorButton>
    </div>
  )
}

ColorMenu.propTypes = {
  changeColor: PropTypes.func.isRequired
}
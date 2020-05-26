import React from 'react';
import { colors } from '../utils/enums';
import PropTypes from 'prop-types';

function ColorButton(props) {
  const { handleClick, color, selectedColor, colorblind } = props;
  
  let className;
  if (color.id === selectedColor.id) {
    className = `color-button color-button-selected`;
  } else {
    className = `color-button`;
  }
  
  return (
    <div onClick={props.handleClick} className={className} style={{backgroundColor: `${color.hex}`}}>
      {colorblind && <p style={{color: `${color.contrast}`}}>{color.id}</p>}
    </div>
  )
}

ColorButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
  selectedColor: PropTypes.object.isRequired,
  color: PropTypes.object.isRequired
}

export default function ColorMenu(props) {
  const { changeColor, color, colorblind } = props;
  return (
    <div id='button-menu'>
      <ColorButton selectedColor={color} color={colors.RED} colorblind={colorblind} handleClick={() => {changeColor(colors.RED)}}>red</ColorButton>
      <ColorButton selectedColor={color} color={colors.ORANGE} colorblind={colorblind} handleClick={() => {changeColor(colors.ORANGE)}}>orange</ColorButton>
      <ColorButton selectedColor={color} color={colors.YELLOW} colorblind={colorblind} handleClick={() => {changeColor(colors.YELLOW)}}>yellow</ColorButton>
      <ColorButton selectedColor={color} color={colors.GREEN} colorblind={colorblind} handleClick={() => {changeColor(colors.GREEN)}}>green</ColorButton>
      <ColorButton selectedColor={color} color={colors.BLUE} colorblind={colorblind} handleClick={() => {changeColor(colors.BLUE)}}>blue</ColorButton>
      <ColorButton selectedColor={color} color={colors.PURPLE} colorblind={colorblind} handleClick={() => {changeColor(colors.PURPLE)}}>purple</ColorButton>
      <ColorButton selectedColor={color} color={colors.BLACK} colorblind={colorblind} handleClick={() => {changeColor(colors.BLACK)}}>black</ColorButton>
    </div>
  )
}

ColorMenu.propTypes = {
  changeColor: PropTypes.func.isRequired,
  color: PropTypes.object.isRequired
}
import React from 'react';
import { Helmet } from 'react-helmet';
import Toggle from 'react-toggle'
import "react-toggle/style.css"

import BigMessage from './BigMessage';
import Vote from './Vote';
import ColorMenu from './ColorMenu';
import { colors } from '../utils/enums';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

library.add(faEyeSlash);
library.add(faFacebook);

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      color: colors.WHITE,
      colorWasSelected: false,
      colorblind: false
    }

    this.handleChangeColor = this.handleChangeColor.bind(this);
    this.handleChangeColorblind = this.handleChangeColorblind.bind(this);
  }

  handleChangeColor(color) {
    this.setState(() => ({
      colorWasSelected: true,
      color: color
    }));
  }

  handleChangeColorblind() {
    this.setState((prevState) => ({
      colorblind: !prevState.colorblind
    }))
  }

  render() {
    const { color, colorWasSelected, colorblind } = this.state;
    return (
      <div id='app-wrapper'>

        <div>
          <Helmet>
            <style type="text/css">{`
              body {
                background-color: ${color.hex};
              }
            `}</style>
          </Helmet>

          <div id='text-wrapper'>
            <div>
              <BigMessage color={color} colorblind={colorblind} colorWasSelected={colorWasSelected} />
              { colorWasSelected 
                ? <Vote color={color} colorblind={colorblind} /> 
                : <p className='vote-message' style={{visibility: 'hidden'}}>Filler!</p> }
            </div>
          </div>
        </div>

        <ColorMenu colorblind={colorblind} color={color} changeColor={this.handleChangeColor} />

        <div id='bottom-bar'>
          <label id='colorblind-label'>
            <span className='bold' style={{color: `${color.contrast}`}}>More contrast?</span>
            <Toggle
              defaultChecked={colorblind}
              onChange={this.handleChangeColorblind} />
          </label>
          <a href='https://www.facebook.com/isitorange' target='_blank'><FontAwesomeIcon className='icon' icon={faFacebook} style={{color: `${colorblind ? color.contrast : color.accent || color.contrast}`}} /></a>
        </div>

      </div>
    )
  }
}

export default App;
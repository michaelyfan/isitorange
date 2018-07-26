import React from 'react';
import BigMessage from './BigMessage';
import Vote from './Vote';
import ColorMenu from './ColorMenu';
import { colors } from '../utils/enums';
import { Helmet } from 'react-helmet';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      color: colors.ORANGE,
      colorWasSelected: false
    }

    this.changeColor = this.changeColor.bind(this);
  }

  changeColor(color) {
    this.setState(() => ({
      colorWasSelected: true,
      color: color
    }));
  }

  render() {
    const { color, colorWasSelected } = this.state;
    return (
      <div id='app-wrapper'>
        <div>
          <Helmet>
            <body className={color} />
          </Helmet>
          <div id='text-wrapper'>
            <div>
              <BigMessage color={color} colorWasSelected={colorWasSelected} />
              { colorWasSelected 
                ? <Vote color={color} /> 
                : <p className='vote-message' style={{visibility: 'hidden'}}>Filler!</p> }
            </div>
          </div>
        </div>
        <ColorMenu changeColor={this.changeColor} />
      </div>
    )
  }
}

export default App;
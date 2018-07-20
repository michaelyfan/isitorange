import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: 'under construction :('
    }
  }

  render() {
    return (
      <div>
        <h1>Is it orange?</h1>
        <button>Not orange</button>
        <button onClick={() => {alert('Haha this button doesn\'t do anything')}}>Orange</button>
      </div>
    )
  }
}

export default App;
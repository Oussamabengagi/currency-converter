import React, { Component } from 'react';

import convertCurrency from './api';

import Inputs from './components/Inputs';
import Results from './components/Results';

class App extends Component {
  state = { 
    from: '',
    to: '',
    amount: 0,
    convertedAmount: 0,
    countries: [],
  }

  calculate = (from, to, amount) => {
    convertCurrency(from, to, amount)
      .then(({ convertedAmount, countries }) => {
        this.setState({ from, to, amount, convertedAmount, countries });
      }).catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <Inputs calculate={this.calculate} />
        <Results data={this.state} />
      </div>
    )
  }
}

export default App;
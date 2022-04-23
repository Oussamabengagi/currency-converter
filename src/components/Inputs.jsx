import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Input = ({ calculate }) => {
  const [ from, setFromCurrency ] = useState('');
  const [ to, setToCurrency ] = useState('');
  const [ amount, setAmount ] = useState(0);

  const handleSubmit = (event) => {
    calculate(from.toUpperCase(), to.toUpperCase(), amount);

    event.preventDefault();
  }

  return (
    <div className="form-group">
      <form onSubmit={handleSubmit} >
        <input 
          placeholder="From currency"
          className="form-control"
          type="text"
          value={from}
          onChange={(e) => setFromCurrency(e.target.value)}
        />
        <input 
          placeholder="To currency"
          className="form-control"
          type="text"
          value={to}
          onChange={(e) => setToCurrency(e.target.value)}
        />
        <input 
          placeholder="Amount"
          className="form-control"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <input type="submit" value="Submit"  className="btn btn-primary"/>
      </form>
    </div>
  )
}

export default Input;

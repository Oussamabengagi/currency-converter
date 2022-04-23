const axios = require('axios');

const getExchangeRate = async (from, to) => {

  var myHeaders = new Headers();
    myHeaders.append("apikey", "nQGiXyp0vtFptuUTMDn4tRL9UkmyqqNH");

    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
      headers: myHeaders
    };

    

  try {
    
    
   
    fetch("https://api.apilayer.com/fixer/convert?to={to}&from={from}&amount={amount}", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

    
    const rate = result.data.rates;
    return rate;
    

    

     


  } catch (error) {
    throw new Error(`Unable to get currency ${from} and  ${to}`);
  }
};

export default getExchangeRate;
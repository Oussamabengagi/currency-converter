import getCountries from './getCountries';
import getExchangeRate from './getExchangeRate';

const convertCurrency = async (from, to, amount) => {
  let exchangeRate;
  let countries;

  await Promise.all([getExchangeRate(from, to), getCountries(to)])
    .then(([exchangeRateValue, countriesValue]) => {
      exchangeRate = exchangeRateValue;
      countries = countriesValue;
    });

  const convertedAmount = (amount * exchangeRate).toFixed(2);

  return { convertedAmount, countries };
};

export default convertCurrency;
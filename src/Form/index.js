import { useState } from "react";
import "./style.css";

const Form = ({ currencies, calculateResult, exchangeRate, result }) => {
  const [exchangeAmount, setExchangeAmount] = useState(0);
  const [exchangeCurrency, setExchangeCurrency] = useState("PLN");
  const [resultCurrency, setResultCurrency] = useState("EUR");

  const onInputChange = ({ target }) => {
    setExchangeAmount(target.value);
    console.log(exchangeAmount, exchangeCurrency, resultCurrency);
    calculateResult(exchangeAmount, exchangeCurrency, resultCurrency);
  };

  const onExchangeCurrencyChange = ({ target }) => {
    setExchangeCurrency(target.value);
    console.log(exchangeAmount, exchangeCurrency, resultCurrency);
    calculateResult(exchangeAmount, exchangeCurrency, resultCurrency);
  };

  const onResultCurrencyChange = ({ target }) => {
    setResultCurrency(target.value);
    console.log(exchangeAmount, exchangeCurrency, resultCurrency);
    calculateResult(exchangeAmount, exchangeCurrency, resultCurrency);
  };

  return (
    <form className="form">
    <p>exchange amount {exchangeAmount}</p>
    <p>exchange currency {exchangeCurrency}</p>
    <p>result currency {resultCurrency}</p>
    <p>rate {exchangeRate}</p>
    <p>result {result}</p>
      <fieldset className="form__fieldset">
        <legend className="form__legend">
          Kalkulator walut <span className="form__legendSmall">(kursy z dnia 13.06.2022)</span>
        </legend>
        <p>
          <label className="form__label form--alignRight" for="exchange">
            Kwota do wymiany:
          </label>
          <input
            value={exchangeAmount}
            onChange={onInputChange}
            className="form__input form--alignRight"
            type="number"
            min="0"
            step="1"
          />
          <select value={exchangeCurrency} onChange={onExchangeCurrencyChange} className="form__select">
            {currencies.map((currency) => (
              <option value={currency.shortName} key={currency.shortName}>
                {currency.shortName} ({currency.name})
              </option>
            ))}
          </select>
        </p>
        <p>
          <label className="form__label form--alignRight" for="receive">
            Otrzymasz:
          </label>
          <input className="form__input form--alignRight form__input--readonly" type="number" value={result} readOnly />
          <select value={resultCurrency} onChange={onResultCurrencyChange} className="form__select">
            {currencies.map((currency) => (
              <option value={currency.shortName} key={currency.shortName}>
                {currency.shortName} ({currency.name})
              </option>
            ))}
          </select>
        </p>
        <p className="form__exchangeInfo">
          1 {exchangeCurrency} to {exchangeRate} {resultCurrency}
        </p>
      </fieldset>
    </form>
  );
};

export default Form;

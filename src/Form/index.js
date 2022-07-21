import { useState } from "react";
import "./style.css";
import currencies from "./currencies";

const Form = () => {
  const [exchangeAmount, setExchangeAmount] = useState(0);
  const [exchangeCurrency, setExchangeCurrency] = useState("PLN");
  const [resultCurrency, setResultCurrency] = useState("EUR");

  const exchangeRate =
    currencies.find(({ shortName }) => shortName === exchangeCurrency).rate /
    currencies.find(({ shortName }) => shortName === resultCurrency).rate;

  const result = (
    exchangeAmount * 
    currencies.find(({ shortName }) => shortName === exchangeCurrency).rate /
    currencies.find(({ shortName }) => shortName === resultCurrency).rate
  );

  const onInputChange = ({ target }) => setExchangeAmount(target.value);

  const onExchangeCurrencyChange = ({ target }) => setExchangeCurrency(target.value);

  const onResultCurrencyChange = ({ target }) => setResultCurrency(target.value);

  return (
    <form className="form">
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
            id="exchange"
          />
          <select 
            value={exchangeCurrency} 
            onChange={onExchangeCurrencyChange} 
            className="form__select"
          >
            {currencies.map(({ shortName, name }) => (
              <option value={shortName} key={shortName}>
                {shortName} ({name})
              </option>
            ))}
          </select>
        </p>
        <p>
          <label className="form__label form--alignRight" for="receive">
            Otrzymasz:
          </label>
          <input
            className="form__input form--alignRight form__input--readonly"
            type="number"
            value={result.toFixed(2)}
            id="receive"
            readOnly
          />
          <select 
            value={resultCurrency} 
            onChange={onResultCurrencyChange}
            className="form__select"
          >
            {currencies.map(({ shortName, name }) => (
              <option value={shortName} key={shortName}>
                {shortName} ({name})
              </option>
            ))}
          </select>
        </p>
        <p className="form__exchangeInfo">
          1 {exchangeCurrency} to {exchangeRate.toFixed(5)} {resultCurrency}
        </p>
      </fieldset>
    </form>
  );
};

export default Form;

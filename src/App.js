import { useState } from "react";
import Container from "./Container";
import Legend from "./Legend";
import Form from "./Form";
import DateTime from "./DateTime";
import ResultInfo from "./ResultInfo";
import Result from "./Result";
import currencies from "./currencies";

function App() {
  const [exchangeAmount, setExchangeAmount] = useState(0);
  const [exchangeCurrency, setExchangeCurrency] = useState("PLN");
  const [resultCurrency, setResultCurrency] = useState("EUR");

  const exchangeRate =
    currencies.find(({ shortName }) => shortName === exchangeCurrency).rate /
    currencies.find(({ shortName }) => shortName === resultCurrency).rate;

  const result = exchangeAmount * exchangeRate;

  const onInputChange = ({ target }) => {
    if (Math.sign(target.value) < 0) {
      setExchangeAmount(target.value.slice(1));
    } else {
      setExchangeAmount(target.value);
    }
  };
  const onExchangeCurrencyChange = ({ target }) => setExchangeCurrency(target.value);
  const onResultCurrencyChange = ({ target }) => setResultCurrency(target.value);

  return (
    <Container>
      <Form>
        <Legend legend={"Kalkulator walut"} />
        <DateTime />
        <p>
          <label className="form__label form--alignRight" htmlFor="exchange">
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
          <select value={exchangeCurrency} onChange={onExchangeCurrencyChange} className="form__select">
            {currencies.map(({ shortName, name }) => (
              <option value={shortName} key={shortName}>
                {shortName} ({name})
              </option>
            ))}
          </select>
        </p>
        <p>
          <label className="form__label form--alignRight" htmlFor="receive">
            Otrzymasz:
          </label>
          <Result result={result} />
          <select value={resultCurrency} onChange={onResultCurrencyChange} className="form__select">
            {currencies.map(({ shortName, name }) => (
              <option value={shortName} key={shortName}>
                {shortName} ({name})
              </option>
            ))}
          </select>
        </p>
        <ResultInfo 
          exchangeCurrency={exchangeCurrency} 
          exchangeRate={exchangeRate} 
          resultCurrency={resultCurrency} 
        />
      </Form>
    </Container>
  );
}

export default App;

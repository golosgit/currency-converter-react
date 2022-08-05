import { useState } from "react";
import { DateTime } from "./DateTime";
import { ResultInfo } from "./ResultInfo";
import { Result } from "./Result";
import { Legend } from "./Legend";
import { currencies } from "./currencies";
import { Fieldset, Label, Input, Select } from "./styled.js";

export const Form = () => {
  const [exchangeAmount, setExchangeAmount] = useState(0);
  const [exchangeCurrency, setExchangeCurrency] = useState("PLN");
  const [resultCurrency, setResultCurrency] = useState("EUR");

  const exchangeRate =
    currencies.find(({ shortName }) => shortName === exchangeCurrency).rate /
    currencies.find(({ shortName }) => shortName === resultCurrency).rate;

  const onInputChange = ({ target }) => {
    if (Math.sign(target.value) < 0) {
      setExchangeAmount(target.value.slice(1));
    } else {
      setExchangeAmount(target.value);
    }
  };
  const onExchangeCurrencyChange = ({ target }) => setExchangeCurrency(target.value);
  const onResultCurrencyChange = ({ target }) => setResultCurrency(target.value);

  const checkCurrenciesType = () => (exchangeCurrency === resultCurrency ? true : false);

  return (
    <form>
      <Fieldset>
        <Legend legend={"Kalkulator walut"} />
        <DateTime />
        <p>
          <Label htmlFor="exchange">
            Kwota do wymiany:
          </Label>
          <Input
            value={exchangeAmount}
            onChange={onInputChange}
            type="number"
            min="0"
            step="1"
            id="exchange"
          />
          <Select value={exchangeCurrency} onChange={onExchangeCurrencyChange}>
            {currencies.map(({ shortName, name }) => (
              <option value={shortName} key={shortName}>
                {shortName} ({name})
              </option>
            ))}
          </Select>
        </p>
        <p>
          <Result 
            exchangeRate={exchangeRate} 
            exchangeAmount={exchangeAmount} 
            checkCurrenciesType={checkCurrenciesType} 
          />
          <Select value={resultCurrency} onChange={onResultCurrencyChange}>
            {currencies.map(({ shortName, name }) => (
              <option value={shortName} key={shortName}>
                {shortName} ({name})
              </option>
            ))}
          </Select>
        </p>
        <ResultInfo
          exchangeCurrency={exchangeCurrency}
          exchangeRate={exchangeRate}
          resultCurrency={resultCurrency}
          checkCurrenciesType={checkCurrenciesType}
        />
      </Fieldset>
    </form>
  );
};
import { useState } from "react";
import { DateTime } from "./DateTime";
import { ResultInfo } from "./ResultInfo";
import { Result } from "./Result";
import { Fieldset, Label, Input, Select, Legend } from "./styled.js";
import { useExternalCurrencies } from "./useExternalCurrencies";

export const Form = () => {
  const [exchangeAmount, setExchangeAmount] = useState(0);
  const [exchangeCurrency, setExchangeCurrency] = useState("PLN");
  const [resultCurrency, setResultCurrency] = useState("EUR");
  const { date, rates } = useExternalCurrencies();

  const exchangeRate = rates[exchangeCurrency] / rates[resultCurrency];

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
        <Legend>Kalkulator walut</Legend>
        <DateTime />
        <p>
          <Label htmlFor="exchange">Kwota do wymiany:</Label>
          <Input value={exchangeAmount} onChange={onInputChange} type="number" min="0" step="1" id="exchange" />
          <Select value={exchangeCurrency} onChange={onExchangeCurrencyChange}>
            {Object.keys(rates).map((currency) => (
              <option value={currency} key={currency}>
                {currency}
              </option>
            ))}
          </Select>
        </p>
        <p>
          <Result exchangeRate={exchangeRate} exchangeAmount={exchangeAmount} checkCurrenciesType={checkCurrenciesType} />
          <Select value={resultCurrency} onChange={onResultCurrencyChange}>
            {Object.keys(rates).map((currency) => (
              <option value={currency} key={currency}>
                {currency}
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
        <p>Dane pobrane {date}</p>
      </Fieldset>
    </form>
  );
};

import { useState } from "react";
import { DateTime } from "./DateTime";
import { ResultInfo } from "./ResultInfo";
import { Result } from "./Result";
import { FetchInfo } from "./FetchInfo";
import { Fieldset, Label, Input, Select, Legend, LoadingText, Flex, LoadingGif } from "./styled";
import { useExternalCurrencies } from "./useExternalCurrencies";

export const Form = () => {
  const [exchangeAmount, setExchangeAmount] = useState(0);
  const [exchangeCurrency, setExchangeCurrency] = useState("PLN");
  const [resultCurrency, setResultCurrency] = useState("EUR");
  const { date, rates, status, requestStatus } = useExternalCurrencies();

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

  if (status === requestStatus.PENDING) {
    return (
      <form>
        <Fieldset>
          <Legend>Kalkulator walut</Legend>
          <DateTime />
          <LoadingGif />
          <LoadingText>Proszę chwilę poczekać. Trwa pobieranie danych z serwera...</LoadingText>
        </Fieldset>
      </form>
    )
  } else if (status === requestStatus.ERROR) {
    return (
      <form>
        <Fieldset>
          <Legend>Kalkulator walut</Legend>
          <DateTime />
          <LoadingText>Wystąpił błąd.</LoadingText>
          <LoadingText nextLine>Spróbuj ponownie za chwilę.</LoadingText>
        </Fieldset>
      </form>
    )
  }

  return (
    <form>
      <Fieldset>
        <Legend>Kalkulator walut</Legend>
        <DateTime />
        <p>
          <Flex>
            <Label htmlFor="exchange">Kwota do wymiany:</Label>
            <Input value={exchangeAmount} onChange={onInputChange} type="number" min="0" step="1" id="exchange" />
            <Select value={exchangeCurrency} onChange={onExchangeCurrencyChange}>
              {Object.keys(rates).map((currency) => (
                <option value={currency} key={currency}>
                  {currency}
                </option>
              ))}
            </Select>
          </Flex>
        </p>
        <p>
          <Flex>
            <Result exchangeRate={exchangeRate} exchangeAmount={exchangeAmount} checkCurrenciesType={checkCurrenciesType} />
            <Select value={resultCurrency} onChange={onResultCurrencyChange}>
              {Object.keys(rates).map((currency) => (
                <option value={currency} key={currency}>
                  {currency}
                </option>
              ))}
            </Select>
          </Flex>
        </p>
        <ResultInfo
          exchangeCurrency={exchangeCurrency}
          exchangeRate={exchangeRate}
          resultCurrency={resultCurrency}
          checkCurrenciesType={checkCurrenciesType}
        />
        <FetchInfo date={date} />
      </Fieldset>
    </form>
  );
};

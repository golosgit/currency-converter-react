import { Info } from "./styled.js";

export const ResultInfo = ({ exchangeCurrency, exchangeRate, resultCurrency, checkCurrenciesType }) => {
  return (
    <Info>
      1 {exchangeCurrency} to&nbsp;
      {checkCurrenciesType() ? exchangeRate.toFixed(0) : exchangeRate.toFixed(5)}&nbsp;
      {resultCurrency}
    </Info>
  );
};
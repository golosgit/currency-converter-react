import "./style.css";

const ResultInfo = ({ exchangeCurrency, exchangeRate, resultCurrency, checkCurrenciesType }) => {
  return (
    <p className="form__exchangeInfo">
      1 {exchangeCurrency} to&nbsp;
      {checkCurrenciesType() ? exchangeRate.toFixed(0) : exchangeRate.toFixed(5)}&nbsp;
      {resultCurrency}
    </p>
  );
};

export default ResultInfo;

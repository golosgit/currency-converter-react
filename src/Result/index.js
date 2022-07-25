import "./style.css";

const Result = ({ exchangeCurrency, exchangeRate, resultCurrency }) => {
  return (
    <p className="form__exchangeInfo">
      1 {exchangeCurrency} to {exchangeRate.toFixed(5)} {resultCurrency}
    </p>
  );
};

export default Result;

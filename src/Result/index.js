import "./style.css";

const Result = ({ exchangeAmount, exchangeRate, checkCurrenciesType }) => {
  return (
    <>
      <label className="form__label form--alignRight" htmlFor="receive">
        Otrzymasz:
      </label>
      <input
        className="form__input form--alignRight form__input--readonly"
        type="number"
        value={
          checkCurrenciesType() ? 
          (exchangeAmount*exchangeRate).toFixed(0) : 
          (exchangeAmount*exchangeRate).toFixed(2)
        }
        id="receive"
        readOnly
      />
    </>
  );
};

export default Result;

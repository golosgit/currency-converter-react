import "./style.css";

const Result = ({ result }) => {
  return (
    <input
      className="form__input form--alignRight form__input--readonly"
      type="number"
      value={result.toFixed(2)}
      id="receive"
      readOnly
    />
  );
};

export default Result;

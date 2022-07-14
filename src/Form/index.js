import "./style.css";

const Form = () => (
  <form className="form">
    <fieldset className="form__fieldset">
      <legend className="form__legend">
        Kalkulator walut <span className="form__legendSmall">(kursy z dnia 13.06.2022)</span>
      </legend>
      <p>
        <label className="form__label form--alignRight" for="exchange">
          Kwota do wymiany:
        </label>
        <input className="form__input form--alignRight" type="number" id="exchange" value="0" min="0" step="1" />
        <select name="currencyToExchange" className="form__select">
          <option value="PLN" selected>
            PLN (polski złoty)
          </option>
          <option value="EUR">EUR (euro)</option>
          <option value="USD">USD (dolar amerykański)</option>
          <option value="CZK">CZK (korona czeska)</option>
        </select>
      </p>
      <p>
        <label className="form__label form--alignRight" for="receive">
          Otrzymasz:
        </label>
        <input className="form__input form--alignRight form__input--readonly" type="number" id="receive" value="0.00" readonly />
        <select name="exchangeResult" className="form__select">
          <option value="PLN">PLN (polski złoty)</option>
          <option value="EUR" selected>
            EUR (euro)
          </option>
          <option value="USD">USD (dolar amerykański)</option>
          <option value="CZK">CZK (korona czeska)</option>
        </select>
      </p>
      <p className="form__exchangeInfo">
        1 <span>PLN</span> to <span>0.21592</span> <span>EUR</span>
      </p>
    </fieldset>
  </form>
);

export default Form;

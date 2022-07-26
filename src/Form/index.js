import "./style.css";

const Form = ({ children }) => {
  return (
    <form>
      <fieldset className="form__fieldset">
        {children}
      </fieldset>
    </form>
  );
};

export default Form;

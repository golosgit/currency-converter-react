import { Label, Input } from "../Form/styled.js";

export const Result = ({ exchangeAmount, exchangeRate, checkCurrenciesType }) => {
  return (
    <>
      <Label htmlFor="receive">
        Otrzymasz:
      </Label>
      <Input
        result
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
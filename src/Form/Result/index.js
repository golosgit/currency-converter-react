import { Label, Input } from "../styled.js";

export const Result = ({ exchangeAmount, exchangeRate, checkCurrenciesType }) => {
  return (
    <>
      <Label htmlFor="receive">
        Otrzymasz:
      </Label>
      <Input
        resultInput
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
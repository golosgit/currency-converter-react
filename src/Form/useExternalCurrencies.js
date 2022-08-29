import { useState, useEffect } from "react";

export const useExternalCurrencies = () => {
  const requestStatus = {
    SUCCESS: "SUCCESS",
    ERROR: "ERROR",
    PENDING: "PENDING",
  }

  const [date, setDate] = useState();
  const [rates, setRates] = useState([]);
  const [status, setStatus] = useState(requestStatus.PENDING);

  useEffect(() => {
    const fetchCurrencies = async () => {
      try {
        const response = await fetch("https://api.exchangerate.host/latest?base=PLN");

        if (!response.ok) {
          setStatus(requestStatus.ERROR);
          throw new Error(`HTTP error: ${response.status}`);
        }
        const result = await response.json();
        setDate(result.date);
        setRates(result.rates);
        setStatus(requestStatus.SUCCESS);
      } catch (error) {
        console.error(`Could not get currency rates: ${error}`);
        setStatus(requestStatus.ERROR);
      }
    };
    setTimeout(fetchCurrencies, 2000);
  });

  return { date, rates, status, requestStatus };
};

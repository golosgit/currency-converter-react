import { useState, useEffect } from "react";

export const useExternalCurrencies = () => {
  const [date, setDate] = useState();
  const [rates, setRates] = useState([]);
  const [status, setStatus] = useState("fetching");

  useEffect(() => {
    const fetchCurrencies = async () => {
      try {
        const response = await fetch("https://api.exchangerate.host/latest?base=PLN");

        if (!response.ok) {
          setStatus("error");
          throw new Error(`HTTP error: ${response.status}`);
        }
        const result = await response.json();
        setDate(result.date);
        setRates(result.rates);
        setStatus("done");
      } catch (error) {
        console.error(`Could not get currency rates: ${error}`);
        setStatus("error");
      }
    };
    setTimeout(fetchCurrencies, 2000);
  }, []);

  return { date, rates , status};
};

import { useState, useEffect } from "react";

export const useExternalCurrencies = () => {
  const [date, setDate] = useState();
  const [rates, setRates] = useState([]);

  useEffect(() => {
    const fetchCurrencies = async () => {
      try {
        const response = await fetch("http://localhost:3000/currency-converter-react/currencies.json");

        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }
        const result = await response.json();
        setDate(result.date);
        setRates(result.rates);
      } catch (error) {
        console.error(`Could not get currency rates: ${error}`);
      }
    };
    setTimeout(fetchCurrencies, 0);
  }, []);

  return { date, rates };
};

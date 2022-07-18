import { useState } from "react";
import Form from "./Form";
import currencies from "./currencies";

function App() {
  const [result, setResult] = useState(0);
  const [exchangeRate, setExchangeRate] = useState((1 / currencies[1].rate).toFixed(4));

  const calculateResult = (exchangeAmount, exchangeCurrency, resultCurrency) => {
    checkRate(exchangeCurrency, resultCurrency);
    setResult((exchangeRate * exchangeAmount).toFixed(2));
  };

  const checkRate = (exchangeCurrency, resultCurrency) => {
    if (exchangeCurrency === "PLN") {
      currencies.find(({ shortName, rate }) => {
        if (shortName === resultCurrency) {
          setExchangeRate((1 / rate).toFixed(4));
        }
      });
    }
    // } else {
    //   currencies.find(({ shortName, rate }) => {
    //     if (shortName === exchangeCurrency) {
    //       exchangeRate = rate;
    //     }
    //   });
    //   currencies.find(({ shortName, rate }) => {
    //     if (shortName === resultCurrency) {
    //       exchangeRate = (exchangeRate / rate).toFixed(4);
    //       console.log(exchangeRate);
    //     }
    //   });
    // }
  };

  return (
    <div className="container">
      <Form 
        currencies={currencies} 
        calculateResult={calculateResult} 
        exchangeRate={exchangeRate} 
        result={result} 
      />
    </div>
  );
}

export default App;

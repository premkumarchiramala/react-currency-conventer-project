import { useState } from "react";
import CurrencyForm from "./components/CurrencyForm";
import CurrencyResult from "./components/CurrencyResult";
import { convertCurrency } from "./services/currencyApi";
import "./styles/App.css";

function App() {
  const [result, setResult] = useState("");

  const handleConvert = async (from, to, amount) => {
    try {
      const data = await convertCurrency(from, to, amount);

      setResult(
        `${amount} ${from} = ${data.conversion_result} ${to}`
      );
    } catch (error) {
      setResult("Conversion failed");
    }
  };

  return (
    <div className="app">
      <h1>Currency Converter</h1>

      <CurrencyForm onConvert={handleConvert} />

      {result && <CurrencyResult result={result} />}
    </div>
  );
}

export default App;
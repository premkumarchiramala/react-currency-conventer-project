import { useState } from "react";
import currencyData from "../data/currencyData";
import "../styles/CurrencyForm.css";

const CurrencyForm = ({ onConvert }) => {
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!amount) return;

    onConvert(fromCurrency, toCurrency, amount);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <select
        value={fromCurrency}
        onChange={(e) => setFromCurrency(e.target.value)}
      >
        {currencyData.map((currency) => (
          <option key={currency.code} value={currency.code}>
            {currency.code} - {currency.name}
          </option>
        ))}
      </select>

      <select
        value={toCurrency}
        onChange={(e) => setToCurrency(e.target.value)}
      >
        {currencyData.map((currency) => (
          <option key={currency.code} value={currency.code}>
            {currency.code} - {currency.name}
          </option>
        ))}
      </select>

      <button type="submit">Convert</button>
    </form>
  );
};

export default CurrencyForm;
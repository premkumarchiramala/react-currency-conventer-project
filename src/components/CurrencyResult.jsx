import "../styles/CurrencyResult.css";

const CurrencyResult = ({ result }) => {
  return (
    <div className="result">
      <h2>{result}</h2>
    </div>
  );
};

export default CurrencyResult;
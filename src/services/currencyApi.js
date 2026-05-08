import axios from "axios";

const API_KEY = import.meta.env.VITE_CURRENCY_API_KEY;

export const convertCurrency = async (from, to, amount) => {
  const response = await axios.get(
    `https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${from}/${to}/${amount}`
  );

  return response.data;
};
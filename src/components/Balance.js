import { useContext } from "react";
import { GlobalContext } from "./context/GlobalState";

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);
  // using toFixed(2) for reducing total to 2 decimal places only
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  return (
    <>
      <h4>Current Balance</h4>
      <h1>${total}</h1>
    </>
  );
};

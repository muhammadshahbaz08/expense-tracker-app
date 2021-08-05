import { useContext } from "react";
import { GlobalContext } from "./context/GlobalState";

export const AccountSummary = () => {
  const { transactions } = useContext(GlobalContext);
  // Making an array of amounts.
  const amounts = transactions.map((transaction) => transaction.amount);
  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  return (
    <div className="inc-exp-container">
      <div className="money plus">
        <h4>Income</h4>
        <p>${income}</p>
      </div>
      <div className="money minus">
        <h4>Expense</h4>
        <p>${expense}</p>
      </div>
    </div>
  );
};

import { useContext } from "react";
import { GlobalContext } from "./context/GlobalState";

export const Transaction = ({ transaction }) => {
  const {deleteTransaction} = useContext(GlobalContext);

  const sign = transaction.amount < 0 ? "-" : "+";
  return (
    <li className={sign === "+" ? 'plus' : 'minus' }>
      {transaction.text}
      <span>
        {sign}${Math.abs(transaction.amount)} {/*Using Math.abs function to make our Amount +ve. */}
      </span>
      <button onClick={()=>deleteTransaction(transaction.id)}className="delete-btn">X</button>
    </li>
  );
};

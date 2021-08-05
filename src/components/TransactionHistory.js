import { useContext } from "react";
import { GlobalContext } from "./context/GlobalState";
// Importing Transaction COmponent
import { Transaction } from "./Transaction";

export const TransactionHistory = () => {
  const { transactions } = useContext(GlobalContext);
  
  return (
    <div>
      <h3>Transaction History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
            <Transaction  key={transaction.id}transaction={transaction}/>
        ))}
      </ul>
    </div>
  );
}; 

//        <li className="plus">
//           Project 1 Income
//           <span>$1000</span>
//           <button className="delete-btn">X</button>
//         </li>
//

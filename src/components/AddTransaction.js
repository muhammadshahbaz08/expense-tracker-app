import { useState, useContext } from "react";
import { GlobalContext } from "./context/GlobalState";

export const AddTransaction = () => {
  const {addTransaction} = useContext(GlobalContext);

  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  // handleSubmit
  const handleSubmit = (event) => {
    event.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text: text,
      amount: +amount, // + sign for converting amount to number.
    };

    addTransaction(newTransaction);
  };
  return (
    <div>
      <h3>Add New Transaction </h3>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            placeholder="Details of Transaction"
            value={text}
            onChange={(event) => setText(event.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="transactionamount">Transaction Amount <br/> (negative- expense , positive-income)</label>
          <input
            type="text"
            id="transactionamount"
            placeholder="Enter Transaction Amount"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
          />
        </div>
        <button className="btn">Add Transaction</button>
      </form>
    </div>
  );
};

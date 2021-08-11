import { useState, useContext, useRef } from "react";
import { GlobalContext } from "./context/GlobalState";

export const AddTransaction = () => {
  const { addTransaction } = useContext(GlobalContext);

  // declaring State's
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  // Using useRef Hook for getting values
  const descrInput = useRef();
  const amountInput = useRef();

  // handleSubmit
  const handleSubmit = (event) => {
    event.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text: text,
      amount: +amount, // + sign for converting amount to number.
    };
    
    addTransaction(newTransaction);

    // After the new transaction is added , then the input feilds are reset
    descrInput.current.value = "";
    amountInput.current.value = 0;
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
            ref={descrInput}
            onChange={() => setText(descrInput.current.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="transactionamount">
            Transaction Amount <br /> (negative- expense , positive-income)
          </label>
          <input
            type="text"
            id="transactionamount"
            placeholder="Enter Transaction Amount"
            ref={amountInput}
            onChange={() => setAmount(amountInput.current.value)}
          />
        </div>
        <button className="btn">Add Transaction</button>
      </form>
    </div>
  );
};

export const AddTransaction = () => {
  return (
    <div>
      <h3>Add New Transaction </h3>
      <form>
        <div className="form-control">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            placeholder="Details of Transaction"
          />
        </div>
        <div className="form-control">
          <label htmlFor="transactionamount">Transaction Amount</label>
          <input
            type="text"
            id="transactionamount"
            placeholder="Enter Transaction Amount"
          />
        </div>
        <button className='btn'>Add Transaction</button>
      </form>
    </div>
  );
};

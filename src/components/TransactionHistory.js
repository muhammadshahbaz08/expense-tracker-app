
export default function TransactionHistory() {
  return (
    <div>
      <h3>Transaction History</h3>
      <ul className="list">
        <li className="plus">
          Project 1 Income
          <span>$1000</span>
          <button className="delete-btn">X</button>
        </li>
        <li className="minus">
          Project 1 Salaries
          <span>-$800</span>
          <button className="delete-btn">X</button>
        </li>
      </ul>
    </div>
  )
}

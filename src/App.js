import './App.css'

// Import Components
import { Header} from './components/Header';
import { Balance } from './components/Balance';
import { AccountSummary } from './components/AccountSummary';
import { TransactionHistory } from './components/TransactionHistory';
import {AddTransaction} from './components/AddTransaction'
function App() {
  return (
    <div className="App">
        <Header/>
      <div className="container">
        <Balance/>
        <AccountSummary/>
        <TransactionHistory />
        <AddTransaction />
      </div>
    </div>
  );
}

export default App;

import './App.css'

// Import Components
import {Header} from './components/Header';
import { Balance } from './components/Balance';
import AccountSummary from './components/AccountSummary';
function App() {
  return (
    <div className="App">
        <Header/>
      <div className="container">
        <Balance/>
        <AccountSummary/>
      </div>
    </div>
  );
}

export default App;

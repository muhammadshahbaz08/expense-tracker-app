import './App.css'
import { Balance } from './components/Balance';
// Import Components
import {Header} from './components/Header';

function App() {
  return (
    <div className="App">
        <Header/>
      <div className="container">
        <Balance/>
      </div>
    </div>
  );
}

export default App;

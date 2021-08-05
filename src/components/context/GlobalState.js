import { useReducer, createContext } from "react";
import { reducer } from "./Reducer.js";

// Intial State.
const initialState = {
  transactions: [
    { id: 1, text: "Flower", amount: -20 },
    { id: 2, text: "Salary", amount: 300 },
    { id: 3, text: "Book", amount: -10 },
    { id: 4, text: "Camera", amount: 150 },
  ],
};

// create Context
export const GlobalContext = createContext(initialState);

// provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // Actions 
  function deleteTransaction (id)  {
    dispatch({
      type: 'Delete_Transaction',
      payload: id
    });
  }
  function addTransaction (transaction) {
    dispatch({
      type: 'Add_Transaction',
      payload: transaction
    });
  }
  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction: deleteTransaction,
        addTransaction : addTransaction
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

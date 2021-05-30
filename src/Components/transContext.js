import React, { createContext, useReducer } from "react";
import AppReducer from './transReducer'
const initialState = {
  transactions: [
    {
      id: 1,
      description: "Cash",
      amount: +500,
    },
    {
      id: 2,
      description: "Book",
      amount: -40,
    },
    {
      id: 3,
      description: "Camera",
      amount: -200,
    },
  ],
};

export const TransactionContext = createContext(initialState);

export const TransactionProvider = ({children}) =>{
  const [state, dispatch ] = useReducer(AppReducer , initialState);

  function addTransaction(transaction){
    dispatch({
      type: "ADD_TRANSACTION",
      paylod: transaction
    })
  }
  return ( <TransactionContext.Provider value={{
    transactions: state.transactions,
    addTransaction
  }}>
    {children}
  </TransactionContext.Provider>)
}

// import React,{ createContext,useReducer } from "react";
// import { transReducer } from "./transReducer";
// const Initialtransactions = [
//   {
//     id: 1,
//     description: "Cash",
//     amount: "+500",
//   },
//   {
//     id: 2,
//     description: "Book",
//     amount: "-40",
//   },
//   {
//     id: 3,
//     description: "Camera",
//     amount: "-200",
//   },
// ];
// export const TransactionContext = createContext(Initialtransactions);

// export const TransactionProvider = ({children})=>{
//     let [state, dispatch] = useReducer(transReducer, Initialtransactions);

//     function addTransaction(transObj){
// dispatch({
//     type:'ADD_TRANSACTION',
//     payload:{
//         amount: transObj.amount,
//         description : transObj.description
//     }
// })
//     }

//     return(
//         <TransactionContext.Provider value={{
//             transactions: state,
//             addTransaction: addTransaction
//         }}>

//         </TransactionContext.Provider>
//     )
// }

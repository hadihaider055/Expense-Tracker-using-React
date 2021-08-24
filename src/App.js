import React from "react";
import { Header } from "./Components/Header/index";
import { Balance } from "./Components/Balance/index";
import { IncomeExpenses } from "./Components/IncomeExpenses/index";
import { TransactionList } from "./Components/TransactionList/index";
import { AddTransaction } from "./Components/AddTransaction/index";
import firebase from "./firebase";
import { GlobalProvider } from "./Context/index";

import "./App.css";

function App() {
  const messaging = firebase.messaging();
  messaging
    .requestPermission()
    .then(() => {
      return messaging.getToken();
    })
    .then((token) => {
      console.log(token);
    });
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;

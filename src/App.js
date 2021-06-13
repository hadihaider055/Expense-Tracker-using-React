import React from "react";
import "./App.css";
import Balance from "./Components/Balance/index";
import Header from "./Components/Header/index";
import History from "./Components/History/index";
import Total from "./Components/Total/index";
import Transactions from "./Components/Transactions/index";
function App() {
  return (
    <div className="main">
      <div className="App">
        <Header />
        <Balance />
        <Total />
        <History />
        <Transactions />
      </div>
    </div>
  );
}

export default App;

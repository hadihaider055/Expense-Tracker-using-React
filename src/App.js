import React from 'react';
import './App.css';
import { Balance } from './Components/Balance';
import Header from './Components/Header';
import { History } from './Components/History';
import { Total } from './Components/Total';
import { Transactions } from './Components/Transactions';
import { TransactionProvider } from './Components/transContext';
function App() {
  return (
     <TransactionProvider>
    <div className="main">
    <div className="App">
    <Header />
    <Balance />
    <Total />
    <History />
    <Transactions />
    </div>
    </div>
    </TransactionProvider>
  );
}

export default App;

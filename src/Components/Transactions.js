import React, { useState, useContext } from "react";
import "../App.css";
// import { makeStyles } from "@material-ui/core/styles";
// import Button from "@material-ui/core/Button";
import { TransactionContext } from './transContext'

export const Transactions = () => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState();

const {addTransaction} = useContext(TransactionContext);

const onSubmit = e => {
  e.preventDefault();
  const newTransaction = {
    id: Math.floor(Math.random() *100000000),
    description, 
    amount: +amount
  }
  addTransaction(newTransaction);
}

  return (
    <div>
      <h3>Add Transactions</h3>
      <hr className="transaction-hr" />
      <form onSubmit={onSubmit}>
      <label htmlFor="description">
        Text
        <br />
      </label>
      <input
        type="text"
        id="description"
        value={description}
        placeholder="Enter Text.."
        onChange={(e) => setDescription(e.target.value)}
      />
      <br />
      <label htmlFor="Amount">
        Amount
        <br />
        (negative-expense,positive-income)
        <br />
      </label>
      <input
        type="number"
        id="Amount"
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter Amount.."
        value={amount}
      />
      <br />
      {/* <input type="submit" value="Add Transaction"/> */}
      {/* <Button
        style={{ width: "100%", fontFamily: "sans-serif" }}
        variant="contained"
        color="primary"
      >
        Add Transaction
      </Button> */}
      <input type="submit" value="Add Transaction"/>
      </form>
    </div>
  );
};

import React, { useContext } from "react";
import "../App.css";
import { TransactionContext } from "./transContext";

export const Total = () => {
  let { transactions } = useContext(TransactionContext);
  const amounts = transactions.map((transaction) => transaction.amount);
  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  return (
    <div>
      <div className="total-div">
        <div className="income-div">
          <h2>Income</h2>
          <h3>${income}</h3>
        </div>
        <hr className="total-hr" />
        <div className="expense-div">
          <h2>Expense</h2>
          <h3>${expense}</h3>
        </div>
      </div>
    </div>
  );
};

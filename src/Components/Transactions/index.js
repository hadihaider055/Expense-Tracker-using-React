import React, { useState } from "react";
import "../../App.css";

const Transactions = () => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState();
  return (
    <div>
      <h3>Add Transactions</h3>
      <hr className="transaction-hr" />
      <form>
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
        <input type="submit" value="Add Transaction" />
      </form>
    </div>
  );
};
export default Transactions;

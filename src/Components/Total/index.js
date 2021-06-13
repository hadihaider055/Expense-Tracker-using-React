import React from "react";
import "../../App.css";

const Total = () => {
  return (
    <div>
      <div className="total-div">
        <div className="income-div">
          <h2>Income</h2>
          <h3>$30</h3>
        </div>
        <hr className="total-hr" />
        <div className="expense-div">
          <h2>Expense</h2>
          <h3>$20</h3>
        </div>
      </div>
    </div>
  );
};
export default Total;

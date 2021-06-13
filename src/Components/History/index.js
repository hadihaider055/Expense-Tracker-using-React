import React from "react";
import "../../App.css";
const History = () => {
  const transactions = [
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
  ];
  return (
    <div>
      <h3>History</h3>
      <hr />
      <ul>
        {transactions.map((transObj) => (
          <li className="Item" key={transObj.id}>
            <h3>{transObj.description}</h3>
            <h3>{transObj.amount}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default History;

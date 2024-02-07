import React from "react";

const ExpenseItem = () => {
  return (
    <div className="expense-item">
      <div>date</div>
      <div className="expense-item__description">
        <h2>title</h2>
        <div className="expense-item__price">price</div>
      </div>
    </div>
  );
};

export default ExpenseItem;

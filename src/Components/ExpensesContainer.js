import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesContainer.css";
const ExpensesContainer = ({ expensesData }) => {
  return (
    <div className="expenses">
      {expensesData.map((x) => {
        return <ExpenseItem title={x.title} price={x.price} date={x.date} />;
      })}
    </div>
  );
};

export default ExpensesContainer;

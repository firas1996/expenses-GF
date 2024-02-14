import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesContainer.css";
import ExpensesFilter from "./ExpensesFilter";
const ExpensesContainer = ({ expensesData }) => {
  const years = new Set(
    expensesData.map((item) => item.date.getFullYear()).sort()
  );
  console.log([..."ABCDEF"]);
  return (
    <div className="expenses">
      <ExpensesFilter years={[...years]} />
      {expensesData.map((x) => {
        return <ExpenseItem title={x.title} price={x.price} date={x.date} />;
      })}
    </div>
  );
};

export default ExpensesContainer;

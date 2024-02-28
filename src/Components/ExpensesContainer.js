import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesContainer.css";
import ExpensesFilter from "./ExpensesFilter";
const ExpensesContainer = ({ expensesData }) => {
  const years = [
    ...new Set(expensesData.map((item) => item.date.getFullYear()).sort()),
  ];
  const [selectedYear, setSelectedYear] = useState(years[0]);
  console.log(selectedYear);
  return (
    <div className="expenses">
      <ExpensesFilter years={years} setSelectedYear={setSelectedYear} />
      {expensesData.map((x) => {
        return <ExpenseItem title={x.title} price={x.price} date={x.date} />;
      })}
    </div>
  );
};

export default ExpensesContainer;

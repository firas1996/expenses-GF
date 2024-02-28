import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesContainer.css";
import ExpensesFilter from "./ExpensesFilter";
const ExpensesContainer = ({ expensesData }) => {
  const years = [
    "All",
    ...new Set(expensesData.map((item) => item.date.getFullYear()).sort()),
  ];
  const [selectedYear, setSelectedYear] = useState(years[2]);
  const dataFiltre = expensesData.filter((item) => {
    return selectedYear == item.date.getFullYear();
  });
  return (
    <div className="expenses">
      <ExpensesFilter
        years={years}
        setSelectedYear={setSelectedYear}
        selectedYear={selectedYear}
      />
      {dataFiltre.map((x) => {
        return <ExpenseItem title={x.title} price={x.price} date={x.date} />;
      })}
    </div>
  );
};

export default ExpensesContainer;

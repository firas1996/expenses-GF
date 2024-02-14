import "./ExpensesFilter.css";

const ExpensesFilter = ({ years }) => {
  return (
    <div className="expenses-filter expenses-filter__control">
      <label>Filter by year</label>
      <select>
        {years.map((item) => {
          return <option value={item}>{item}</option>;
        })}
      </select>
    </div>
  );
};

export default ExpensesFilter;

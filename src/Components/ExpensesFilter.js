import "./ExpensesFilter.css";

const ExpensesFilter = ({ years, setSelectedYear, selectedYear }) => {
  const handelSelect = (event) => {
    setSelectedYear(event.target.value);
  };
  return (
    <div className="expenses-filter expenses-filter__control">
      <label>Filter By Year</label>
      <select value={selectedYear} onChange={handelSelect}>
        {years.map((item) => {
          return (
            <option key={item} value={item}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default ExpensesFilter;

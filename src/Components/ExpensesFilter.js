import "./ExpensesFilter.css";

const ExpensesFilter = ({ years, setSelectedYear }) => {
  const handelSelect = (event) => {
    setSelectedYear(event.target.value);
  };
  return (
    <div className="expenses-filter expenses-filter__control">
      <label>Filter By Year</label>
      <select onChange={handelSelect}>
        {years.map((item) => {
          return <option value={item}>{item}</option>;
        })}
      </select>
    </div>
  );
};

export default ExpensesFilter;

import { useState } from "react";
import "./AddExpenseForm.css";

const AddExpenseForm = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");
  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };
  const handelSubmit = (event) => {
    event.preventDefault();
    console.log(title);
    setTitle("");
  };
  return (
    <div className="add-expense">
      <form onSubmit={handelSubmit}>
        <div className="add-expense__controls">
          <div className="add-expense__control">
            <label>Title</label>
            <input
              required
              placeholder="Title"
              onChange={titleChangeHandler}
              value={title}
            />
          </div>
          <div className="add-expense__control">
            <label>Price</label>
            <input type="number" placeholder="Price" min="0" step="0.01" />
          </div>
          <div className="add-expense__control">
            <label>Date</label>
            <input type="date" min="2022-01-01" max="2026-12-31" />
          </div>
        </div>
        <div className="add-expense__actions">
          <button>Cancel</button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
};

export default AddExpenseForm;

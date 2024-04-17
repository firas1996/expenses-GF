import { useState } from "react";
import "./AddExpenseForm.css";
let id = 5;
const AddExpenseForm = ({ get }) => {
  //   const [title, setTitle] = useState("");
  //   const [price, setPrice] = useState("");
  //   const [date, setDate] = useState("");
  const [data, setData] = useState({
    title: "",
    price: "",
    date: "",
  });
  const titleChangeHandler = (event) => {
    // setTitle(event.target.value);
    setData((prevState) => {
      return { ...prevState, title: event.target.value };
    });
  };
  const handelInputChange = ({ target }) => {
    const { name, value } = target;
    setData((prevState) => {
      return { ...prevState, [name]: value };
    });
  };
  const handelSubmit = (event) => {
    event.preventDefault();
    get({
      id: id,
      title: data.title,
      price: +data.price,
      date: new Date(data.date),
    });
    id++;
    setData({
      title: "",
      price: "",
      date: "",
    });
  };
  return (
    <div className="add-expense">
      <form onSubmit={handelSubmit}>
        <div className="add-expense__controls">
          <div className="add-expense__control">
            <label>Title</label>
            <input
              required
              name="title"
              placeholder="Title"
              onChange={handelInputChange}
              value={data.title}
            />
          </div>
          <div className="add-expense__control">
            <label>Price</label>
            <input
              required
              name="price"
              type="number"
              placeholder="Price"
              min="0"
              step="0.01"
              onChange={handelInputChange}
              value={data.price}
            />
          </div>
          <div className="add-expense__control">
            <label>Date</label>
            <input
              required
              name="date"
              type="date"
              min="2022-01-01"
              max="2026-12-31"
              onChange={handelInputChange}
              value={data.date}
            />
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

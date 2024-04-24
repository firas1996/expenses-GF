import { useState } from "react";
import "./AddExpenseForm.css";
import NewExpenseForm from "./NewExpenseForm";

const AddExpenseForm = ({ get }) => {
  //   const [title, setTitle] = useState("");
  //   const [price, setPrice] = useState("");
  //   const [date, setDate] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const handelIsOpen = () => {
    setIsOpen(!isOpen);
  };

  // const titleChangeHandler = (event) => {
  //   // setTitle(event.target.value);
  //   setData((prevState) => {
  //     return { ...prevState, title: event.target.value };
  //   });
  // };

  return (
    <div className="add-expense">
      {isOpen ? (
        <NewExpenseForm handelIsOpen={handelIsOpen} get={get} />
      ) : (
        <button onClick={handelIsOpen}>Add New Expense</button>
      )}
    </div>
  );
};

export default AddExpenseForm;

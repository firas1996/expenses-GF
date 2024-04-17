import React from "react";

const AddExpenseForm = () => {
  return (
    <div>
      <form>
        <div>
          <div>
            <label>Title</label>
            <input />
          </div>
          <div>
            <label>Price</label>
            <input />
          </div>
          <div>
            <label>Date</label>
            <input />
          </div>
        </div>
        <div>
          <button>Cancel</button>
          <button>Add Expense</button>
        </div>
      </form>
    </div>
  );
};

export default AddExpenseForm;

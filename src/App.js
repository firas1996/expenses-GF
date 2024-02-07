import ExpenseItem from "./Components/ExpenseItem";

function App() {
  const expensesData = [
    {
      id: 1,
      price: 7999,
      title: "NEw TV",
      date: new Date(2024, 2, 15),
    },
    {
      id: 2,
      price: 3000,
      title: "New Phone",
      date: new Date(2023, 8, 1),
    },
    {
      id: 3,
      price: 5000,
      title: "Education",
      date: new Date(2023, 10, 15),
    },
    {
      id: 4,
      price: 2500,
      title: "Voyage",
      date: new Date(2025, 7, 30),
    },
  ];
  return (
    <div>
      {expensesData.map((x) => {
        return <ExpenseItem title={x.title} price={x.price} date={x.date} />;
      })}
    </div>
  );
}

export default App;

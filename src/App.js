import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 93.12,
    date: new Date(2020, 3, 11),
  },
  {
    id: "e2",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 5, 21),
  },
  {
    id: "e3",
    title: "New Desk",
    amount: 450,
    date: new Date(2021, 6, 2),
  },
  {
    id: "e4",
    title: "New Desk",
    amount: 450,
    date: new Date(2021, 7, 2),
  },
];
const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...expenses];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses}></Expenses>
    </div>
  );
};

export default App;

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 93.12,
      date: new Date(2021, 3, 11),
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
  ];
  const addExpenseHandler = expense =>{
    console.log('In App.js');
    console.log(expense);
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}></Expenses>
    </div>
  );
};

export default App;

import React, { useState } from "react";
import "./Expense.css";
import ExpensesList from "./Expenses/ExpensesList";
import ExpensesFilter from "./Filter/ExpensesFilter";

import ExpensesChart from "./Expenses/ExpensesChart"

function Expense(props) {
  const [yearSelect, setYearSelected] = useState("2020");

  const filterYear = (selectedYear) => {
    setYearSelected(selectedYear);
  };

  const filterItems = props.items.filter(item => {
    return item.date.getFullYear().toString() === yearSelect;
  })

  
  return (
    <div className="expenses">
      <ExpensesFilter 
        selected={yearSelect} 
        onYearSelect={filterYear} 
      />
      <ExpensesChart expenses={filterItems}/>
      <ExpensesList items={filterItems}/>
    </div>
  );
}

export default Expense;
/*

*/

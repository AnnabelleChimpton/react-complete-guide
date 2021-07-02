import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import './Expenses.css'
import Card from "../UI/Card";

const Expenses = (props) => {
    const [filterDate, setFilterDate] = useState('2020');
    const filterChangeHandler = filteredYear => {
        setFilterDate(filteredYear);
    };
    return (
        <div>
            <Card className="expenses">
            <ExpensesFilter selected={filterDate} onFilterByDateChange={filterChangeHandler}/>
                {props.expenses.map((expense) => (
                    <ExpenseItem
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
                ))}
            </Card>
        </div>
    )
};

export default Expenses;
import { useState } from 'react'
import SingleItem from '../Todo/singleItem'
import '../Todo/index.css'


const defaultPending = ["Complete Homework", "Eat Food", "Visit Park"];
const defaultCompleted = ["Do Laundry", "Bathroom Clean"];

function Todo() {
  const [pending, setPending] = useState(defaultPending)
  const [completed, setCompleted] = useState(defaultCompleted)

  

  return (
    <div className="todo-container">
      <h2 className="todo-title">Todo List</h2>

    <div className="todo-section">
      <h4> Pending Items</h4>
      {pending.map(el => 
        <SingleItem
        title = {el}
        key = {el}
        pending = {pending}
        completed = {completed}
        setPending = {setPending}
        setCompleted = {setCompleted}
        /> 
      )}
      </div>


    <div className="todo-section completed-section">
      <h4> Completed Items</h4>
      {completed.map(el => 
        <SingleItem
        title = {el}
        key = {el}
        isChecked
        pending = {pending}
        completed = {completed}
        setPending = {setPending}
        setCompleted = {setCompleted}
        /> 
      )}
    </div>
  </div>

      
  );
}

export default Todo
      

import React, { useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    let id = 1;
    if(todos.length > 0) {
      id = todos[0].id + 1
    }
    let todo = {id: id, text: text, completed: false}
    let newTodos = [todo, ...todos]
    setTodos(newTodos)
  };

  const remove = (id) => {
    let updatedTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const complete = (id) => {
    let updatedTodos = todos.map((todo) => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    })
    setTodos(updatedTodos)
  }
  let sortedTodos = todos.sort((a, b) => b.important - a.important)
  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      <TodoForm addTodo={addTodo} />
      <hr className="seperator"/>
      {sortedTodos.map((todo) => {
        return (
          <TodoItem remove={remove} complete={complete} todo={todo} key={todo.id}/>
        )
      })}
    </div>
  );
}

export default App;
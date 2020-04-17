import React, { useState, useEffect } from "react";

import { Container } from "react-bootstrap";
import MyNavbar from "../MyNavbar";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const LOCAL_STRORAGE_KEY = "react-todo-list-todos";

const Todo = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STRORAGE_KEY));
    if (storageTodos) {
      setTodos(storageTodos);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem(LOCAL_STRORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    let timestamp = new Date().getTime();
    console.log(timestamp);
    setTodos([todo, ...todos]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  };
  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <div>
      <MyNavbar />
      <Container className="container">
        <TodoForm addTodo={addTodo} />
        <br />
        <hr />
        <br />
        <TodoList
          todos={todos}
          toggleComplete={toggleComplete}
          removeTodo={removeTodo}
        />
      </Container>
    </div>
  );
};

export default Todo;

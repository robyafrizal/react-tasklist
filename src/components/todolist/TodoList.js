import React from "react";
import TodoListCheck from "./TodoListCheck";

const TodoList = ({ todos, toggleComplete, removeTodo }) => {
  return (
    <div>
      <div>
        {todos.map((todo) => (
          <TodoListCheck
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            removeTodo={removeTodo}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;

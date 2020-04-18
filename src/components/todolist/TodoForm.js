import React, { useState } from "react";

import { Form, Button } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import Date from "../Date";

const TodoForm = ({ addTodo }) => {
  const [todo, setTodo] = useState({
    id: "",
    task: "",
    completed: false,
  });
  const [validated, setValidated] = useState(false);

  const handleChange = (e) => {
    setTodo({
      ...todo,
      task: e.target.value,
    });
  };
  const handleSubmit = (et) => {
    et.preventDefault();
    if (todo.task.trim()) {
      addTodo({ ...todo, id: uuidv4() });
      setTodo({ ...todo, task: "" }); //reset ulang task input
    }
    const form = et.currentTarget;
    if (form.checkValidity() === false) {
      setValidated(true);
    }
  };
  return (
    <div>
      <Form
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
        style={{ display: "inline-block" }}
      >
        <Form.Group controlId="formBasicEmail">
          <Form.Label>
            <h1>Create Task List</h1>
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter task"
            onChange={handleChange}
            value={todo.task}
            style={{ width: "30rem" }}
            required
          />
        </Form.Group>
        <Date />
        <Button variant="info" type="submit">
          Add Task
        </Button>
      </Form>
    </div>
  );
};

export default TodoForm;

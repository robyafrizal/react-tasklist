import React from "react";
import { Button, Form, Card, Row, Col } from "react-bootstrap";

const TodoListCheck = ({ todo, toggleComplete, removeTodo }) => {
  const handleToggle = () => {
    toggleComplete(todo.id);
  };
  const handleRemove = () => {
    removeTodo(todo.id);
  };
  return (
    <Form className="todolistCheck" style={{ display: "inline-block" }}>
      <Card style={{ width: "35rem", marginBottom: "1em" }}>
        <Row>
          <Col>
            <Card.Body>
              <Card.Title
                style={{
                  textDecoration: todo.completed ? "line-through" : null,
                }}
              >
                {todo.task}
              </Card.Title>
              <Card.Text className="mb-2 text-muted">
                <Form.Check
                  type="checkbox"
                  onClick={handleToggle}
                  label="Check for completed"
                />
              </Card.Text>
            </Card.Body>
          </Col>
          <Col style={{ padding: "2em" }}>
            <Button variant="warning" onClick={handleRemove}>
              Delete
            </Button>
          </Col>
        </Row>
      </Card>
    </Form>
  );
};

export default TodoListCheck;

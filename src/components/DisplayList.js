import React from "react";
import { Alert, Button, Container } from "react-bootstrap";

const DisplayList = ({ markAsDone, deleteTodo, DisplayTasks }) => {
  return (
    // <div className='w-60 m-auto'>
    <Container>
      {DisplayTasks().map(todoItem => (
        <Alert
          className='d-flex justify-content-between'
          key={todoItem.id}
          variant={todoItem.isCompleted ? "success" : "primary"}
          style={todoItem.isCompleted ? {textDecoration: 'line-through'} : null}
        >
          {todoItem.text}
          <div>
            <Button className="me-2" onClick={() => deleteTodo(todoItem)}>Remove</Button>
            <Button onClick={() => markAsDone(todoItem)}>Done</Button>
          </div>
        </Alert>
      ))}
    </Container>
    // </div>
  );
};

export default DisplayList;

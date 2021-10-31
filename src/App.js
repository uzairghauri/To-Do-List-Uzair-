
import React, {useState, useEffect} from "react";
import "./App.css";
import { Button, Card, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import auth from "./auth";



function Todo({ todo, index, markTodo, removeTodo }) {
  return (
    <div
      className="todo"
      
    >
      <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>{todo.text}</span>
      <div>
        <Button variant="outline-success" onClick={() => markTodo(index)}>✓</Button>{' '}
        <Button variant="outline-danger" onClick={() => removeTodo(index)}>✕</Button>
      </div>
    </div>
  );
}

function FormTodo({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <Form onSubmit={handleSubmit}> 
    <Form.Group>
      <Form.Label><b>Add Task</b></Form.Label>
      <Form.Control type="text" className="input" value={value} onChange={e => setValue(e.target.value)} placeholder="Add A New Task" />
    </Form.Group>
    <Button variant="primary mb-3" type="submit">
      Submit
    </Button>
  </Form>
  );
}

export const ToDoForm = (props) => {
  const [todoRemain, setTodoRemain] = useState(0)
  const [todoFin, setTodoFin] = useState(0) 
  const [todos, setTodos] = useState([
    {
      text: "This is a sample task",
      isDone: false
    }
  ]);

  useEffect(() => { 
    setTodoRemain(todos.filter(todo => !todo.isDone).length) 
  });

  useEffect(() => { 
    setTodoFin(todos.filter(todo => todo.isDone).length) 
  });

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const markTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isDone = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };



  return (
    <div className="app">
      <div className="header">Pending Tasks ({todoRemain}) 
      Finished Tasks ({todoFin})
      </div>
      <div className="container">

        <h1 className="text-center mb-4">Add Tasks</h1>
        <FormTodo addTodo={addTodo} />
        <div>
          {todos.map((todo, index) => (
            <Card>
              <Card.Body>
                <Todo
                key={index}
                index={index}
                todo={todo}
                markTodo={markTodo}
                removeTodo={removeTodo}
                />
              </Card.Body>
            </Card>
          ))}
          
          <Button onClick={() => {
            auth.logout(() => {
              props.history.push("/");
            })

          }}>Logout</Button>
          
        </div>
      </div>
    </div>
  );
}

export default ToDoForm;

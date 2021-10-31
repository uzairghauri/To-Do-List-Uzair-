import React from 'react';
import ReactDOM from 'react-dom';
import { Login } from './Login';
import { BrowserRouter, Route } from 'react-router-dom';
import ToDoForm from './App';
import {ProtectedRoute} from './protectedroute'

function App() {
  return (
  <div className="login">
    <h1>To Do App</h1>
    <Route exact path="/" component={Login} />
    <ProtectedRoute exact path="/todo" component={ToDoForm} />
  </div>
);
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter><App /></BrowserRouter>, rootElement
)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


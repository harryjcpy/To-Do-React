import { useReducer, useState } from 'react'
import './App.css'
import ToDoItems from './components/ToDoItems';
import AddToDo from './components/AddToDo';
import "bootstrap/dist/css/bootstrap.min.css";
import AppName from './components/AppName';
import WelcomeMessage from './components/WelcomeMessage';
import TodoItemsContextProvider, { TodoItemsContext } from './store/todo-items-store';


function App() {

  return (
    <TodoItemsContextProvider>
    <center className="todoContainer">
      <AppName></AppName>
      <AddToDo></AddToDo>
      <WelcomeMessage></WelcomeMessage>
      <ToDoItems></ToDoItems>
    </center>
    </TodoItemsContextProvider>
  );
};

export default App;

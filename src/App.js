import React from 'react';
import './App.css';
import ToDoForm from './components/toDoForm/ToDoForm'
import ToDoList from './components/toDoList/ToDoList';

function App() {
  return (
    <div className="App">
      <ToDoForm/>
      <ToDoList/>
    </div>
  );
}

export default App;

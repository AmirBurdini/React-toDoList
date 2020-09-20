import React from 'react';
import './App.css';
import TaskInput from './components/TaskInput';
import 'bootstrap/dist/css/bootstrap.css'

function App() {

  return (
    <div className="App">
      <header className="App-header">
      ToDoList
      <TaskInput />
      </header>
    </div>
  );
}

export default App;

import React from 'react';
import ToDoList from "./components/ToDoList";
import ToDoForm from './components/ToDoForm';

function App() {
  // this should call the toggleShowCompletedTasks action from the store
  const handleToggle = () => {
  }

  return (
    <div className="App">
      <ToDoList handleToggle={handleToggle}/>
      <ToDoForm/>
    </div>
  );
}

export default App;

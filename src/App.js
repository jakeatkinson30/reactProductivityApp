import React, { useState } from 'react';
import AddTodoForm from './AddToDoForm';
import TodoList from "./TodoList";
import "./index.css";

function App() {
  const [items, setItems] = useState([]);

  const handleSubmit = (text) => {
    setItems([...items, { text, completed: false }]);
  };

  const handleToggle = (index) => {
    const newItems = [...items];
    newItems[index].completed = !newItems[index].completed;
    setItems(newItems);
  };

  const handleRemove = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  return (
    <div className='container'>
      <h1>To Do List</h1>
      <AddTodoForm onSubmit={handleSubmit} />
      <TodoList items={items} onToggle={handleToggle} onRemove={handleRemove} />
    </div>
  );
}

export default App;

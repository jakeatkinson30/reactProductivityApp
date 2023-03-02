import React from 'react';
import "./index.css";

function TodoList(props) {
  const handleToggle = (index) => {
    props.onToggle(index);
  };

  const handleRemove = (index) => {
    props.onRemove(index);
  };

  return (
    <ul className='todo-list'>
      {props.items.map((item, index) => (
        <li key={index} className={item.completed ? 'completed' : ''}>
          <span>{item.text}</span>
          <button className='done-button' onClick={() => handleToggle(index)}>{item.completed ? 'Undo' : 'Done'}</button>
          <button className='remove-button' onClick={() => handleRemove(index)}>Remove</button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;

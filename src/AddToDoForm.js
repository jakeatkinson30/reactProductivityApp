import React, { useState } from 'react';
import "./index.css";

function AddTodoForm(props) {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (text.trim()) {
      props.onSubmit(text);
      setText('');
    }
  };

  return (
    <form className='todo-form' onSubmit={handleSubmit}>
      <input type="text" value={text} onChange={handleChange} />
      <button>Add</button>
    </form>
  );
}

export default AddTodoForm;

import React, { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  const [input, setInput] = useState('');
  const [editId, setEditId] = useState(null);

  const startEdit = (todo) => {
    setInput(todo.text);
    setEditId(todo.id);
  };

  return (
    <>
      <h1>Learn about redux toolkit</h1>
      <AddTodo
        input={input}
        setInput={setInput}
        editId={editId}
        setEditId={setEditId}
      />
      <Todos onEdit={startEdit}/>
    </>
  )
}

export default App

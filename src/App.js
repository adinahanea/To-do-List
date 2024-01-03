import React, { useState } from 'react';
import './App.css';

function App() {
 const [inputtext, setInput] = useState('');
 const [todolist, setTodos] = useState([]);

 const addTodo = (e) => {
    e.preventDefault();
    if(inputtext.trim() !== '') {
      setTodos([...todolist, inputtext]);
      setInput('');
    }
 };

 const deleteTodo = (index) => {
    const copyTodos = [...todolist];
    copyTodos.splice(index, 1);
    setTodos(copyTodos);
 };

 const moveUp = (index) => {
  if (index > 0) {
    const copyTodos = [...todolist];
    const temp = copyTodos[index - 1];
    copyTodos[index - 1] = copyTodos[index];
    copyTodos[index] = temp;
    setTodos(copyTodos);
  }
};

 const moveDown = (index) => {
  if (index < todolist.length - 1) {
    const copyTodos = [...todolist];
    const temp = copyTodos[index + 1];
    copyTodos[index + 1] = copyTodos[index];
    copyTodos[index] = temp;
    setTodos(copyTodos);
  }
 };

 const editTask = (index) => {
// to do
  alert("This functionality doesn't work (yet)")
 };

 

 return (
    <div className="App">
      <h1>Todo List</h1>
      <form onSubmit={addTodo}>
        <input type="text" placeholder="Add todo" maxLength="70" value={inputtext} onChange={(e) => setInput(e.target.value)} />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todolist.map((todo, index) => (
          <li key={index}>               
            <span class='left'>{todo}</span>
            {/* <span>{index}</span> */}
            <div class='right'>
              <div class="button-group">
                <button onClick={() => moveUp(index)}>Move Up</button>
                <button onClick={() => moveDown(index)}>Move Down</button>
              </div>
              <div class="button-group">
                <button onClick={() => editTask(index)}>Edit</button>
                <button onClick={() => deleteTodo(index)}>Delete</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
 );
}

export default App;
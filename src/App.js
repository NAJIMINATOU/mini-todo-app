import React, { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (task.trim() !== "") {
      setTodos([...todos, { text: task, done: false }]);
      setTask("");
    }
  };

  const toggleDone = index => {
    const newTodos = [...todos];
    newTodos[index].done = !newTodos[index].done;
    setTodos(newTodos);
  };

  const deleteTodo = index => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="container">
      <h1> Mini Todo List</h1>
      <div className="input-group">
        <input 
          type="text" 
          value={task} 
          onChange={e => setTask(e.target.value)} 
          placeholder="Ajouter une tâche..." 
        />
        <button onClick={addTodo}>Ajouter</button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} className={todo.done ? "done" : ""}>
            <span onClick={() => toggleDone(index)}>{todo.text}</span>
            <button onClick={() => deleteTodo(index)}>Supprimer</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

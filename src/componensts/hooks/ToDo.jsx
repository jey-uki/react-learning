import React, { useState } from "react";

function TodoApp() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  // Add new task
  const addTask = () => {
    if (task.trim() === "") return alert("Please enter a task");
    setTodos([...todos, task]);
    setTask("");
  };

  // Delete task
  const deleteTask = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div style={styles.container}>
      <h1>My To-Do List</h1>

      <div style={styles.inputSection}>
        <input
          type="text"
          value={task}
          placeholder="Enter a new task..."
          onChange={(e) => setTask(e.target.value)}
          style={styles.input}
        />
        <button onClick={addTask} style={styles.addBtn}>
          Add Task
        </button>
      </div>

      <ul style={styles.list}>
        {todos.map((todo, index) => (
          <li key={index} style={styles.listItem}>
            <span>{todo}</span>
            <button onClick={() => deleteTask(index)} style={styles.deleteBtn}>
              Del
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Inline CSS for simplicity
const styles = {
  container: {
    width: "400px",
    margin: "50px auto",
    textAlign: "center",
    background: "#f9f9f9",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },
  inputSection: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginBottom: "20px",
  },
  input: {
    padding: "10px",
    width: "70%",
    borderRadius: "6px",
    border: "1px solid #ccc",
  },
  addBtn: {
    padding: "10px 15px",
    border: "none",
    background: "#007bff",
    color: "white",
    borderRadius: "6px",
    cursor: "pointer",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  listItem: {
    display: "flex",
    justifyContent: "space-between",
    background: "#fff",
    marginBottom: "10px",
    padding: "10px 15px",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  },
  deleteBtn: {
    border: "none",
    background: "transparent",
    fontSize: "18px",
    cursor: "pointer",
  },
};

export default TodoApp;

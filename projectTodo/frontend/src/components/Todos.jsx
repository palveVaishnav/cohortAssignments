import React, { useState, useEffect } from "react";
import "./TodosList.css";  // Import the CSS file

export function TodosList() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch("http://localhost:3000/todos");
        if (!response.ok) {
          throw new Error(`Failed to fetch todos. Status: ${response.status}`);
        }
        const data = await response.json();
        setTodos(data.todos);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTodos();
  }, []);

  return (
    <div className="previousTodosContainer">
      <h2>Todo List</h2>

      {loading && <p>Loading...</p>}

      {error && <p>Error: {error}</p>}

      {todos.length === 0 && !loading && !error && <p>No todos available.</p>}

      {todos.length > 0 && (
        <div className="previousTodos">
          {todos.slice().reverse().map((todo) => (
            <div key={todo._id} className="previousTodo">
              <h3 className="previousTodoTitle">{todo.title}</h3>
              <h5 className="previousTodoDescription">{todo.description}</h5>
              <div className="previousTodoStatus">
                <input type="checkbox"></input>
                <p>Mark As Complete</p>
              </div>
              <br />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

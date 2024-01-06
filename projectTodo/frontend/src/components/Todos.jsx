import React, { useState, useEffect } from "react";

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
    <div>
      <h2>Todo List</h2>

      {loading && <p>Loading...</p>}

      {error && <p>Error: {error}</p>}

      {todos.length === 0 && !loading && !error && <p>No todos available.</p>}

      {todos.length > 0 && (
        <ul>
          {todos.map((todo) => (
            <li key={todo._id}>
              <strong>{todo.title}</strong> - {todo.description}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

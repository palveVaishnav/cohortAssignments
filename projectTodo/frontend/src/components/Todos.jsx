import React from 'react';

export function Todos({ todos }) {
  const handleMarkCompleted = (todoId) => {
    // Implement the logic to mark a todo as completed
    // This could involve making an API request to your server
    console.log(`Mark todo ${todoId} as completed`);
  };

  return (
    <div>
      {todos.map(function (todo) {
        return (
          <div key={todo.id}>
            <h1>{todo.title}</h1>
            <h2>{todo.description}</h2>
            <button onClick={() => handleMarkCompleted(todo.id)}>
              {todo.completed === true ? 'Completed' : 'Mark as Completed'}
            </button>
          </div>
        );
      })}
    </div>
  );
}

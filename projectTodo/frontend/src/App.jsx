import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { TodosList } from './components/Todos'

// useEffect hook
function App() { 

  const [todos,setTodos]=useState([]);

  fetch("https://localhost:3000/todos")
    .then(async (res)=> {
      const json = await  res.json();
      setTodos(json.todos);
    })

  return (
    <div>
      <CreateTodo></CreateTodo>
      <TodosList />
    </div>
  )
}

export default App

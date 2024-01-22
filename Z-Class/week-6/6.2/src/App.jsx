import { useEffect, useState } from 'react'
import axios from "axios";
import './App.css'

function App() {

  // First example
  // const [todos, setTodos] = useState([]);
  // useEffect(() => {
  //   axios.get("https://sum-server.100xdevs.com/todos")
  //     .then(function (res) {
  //       setTodos(res.data.todos);

  //     })
  // }, []);



  return (
    // <div>
    //   {todos.map(todo => <Todos key={todo.id} title={todo.title} description={todo.description} />)};
    // </div>
    <div>
      <Todo id={2} />
    </div>
  )
}

function Todo({ id }) {
  // second example
  const [todo, setTodo] = useState({});

  useEffect(() => {
    axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`)
      .then((res) => {
        setTodo(res.data.todo);
      })
  }, [todo]);

  return (
    <div>
      <h1> {todo.title}</h1>
      <h4> {todo.description} </h4>
    </div>
  )


}


function Todos({ title, description }) {
  return (
    <div>
      <h1>{title}</h1>
      <h3>{description}</h3>
    </div>
  )
}


export default App

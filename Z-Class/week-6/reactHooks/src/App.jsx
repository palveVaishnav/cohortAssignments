import React, { Fragment, useState } from "react"

let idi = 4;

function App() {

  // return (
  //   <div>
  //     <HeaderWithButton />
  //     <Header title="Palve" ></Header>
  //   </div>
  // )


  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Go to Home",
      descrition: "Travel home by bus"
    },
    {
      id: 2,
      title: "Eat Home",
      descrition: "Travel home by bus"
    },
    {
      id: 3,
      title: "Attend Lectres",
      descrition: "Go to college and attend classes"
    }
  ]);


  function updateTodo() {
    setTodos([...todos, {
      id: idi++,
      title: "Todoo no " + idi,
      descrition: Math.random() * 200
    }])
  }


  return (
    <div>
      <button onClick={updateTodo}>Add Todo</button>
      {todos.map(todo => <Todo key={todo.id} title={todo.title} descrition={todo.descrition} />)};
    </div>
  )


}

function Todo({ title, descrition }) {
  return (
    <div>
      <h1>{title}</h1>
      <h3>{descrition}</h3>
    </div>
  )
}




function HeaderWithButton() {
  const [title, setTitle] = useState("My name is Vaishnav");
  function updateTitle() {
    setTitle("My name is " + Math.random());
  }
  return (
    <div>
      <button onClick={updateTitle}> Click Here to Change Title</button>
      <Header title={title}></Header>
    </div>
  )

}

// function Header({ title }) {
//   return (
//     <div>
//       {title}
//     </div>
//   )
// }


// using React.memo
const Header = React.memo(function Header({ title }) {
  return (
    <div>
      {title}
    </div>
  )
});


export default App

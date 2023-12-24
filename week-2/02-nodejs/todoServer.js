/**
  You need to create an express HTTP server in Node.js which will handle the logic of a todo list app.
  - Don't use any database, just store all the data in an array to store the todo list data (in-memory)
  - Hard todo: Try to save responses in files, so that even if u exit the app and run it again, the data remains (similar to databases)

  Each todo has a title and a description. The title is a string and the description is a string.
  Each todo should also get an unique autogenerated id every time it is created
  The expected API endpoints are defined below,

  1.GET /todos - Retrieve all todo items
    Description: Returns a list of all todo items.
    Response: 200 OK with an array of todo items in JSON format.
    Example: GET http://localhost:3000/todos
    
  2.GET /todos/:id - Retrieve a specific todo item by ID
    Description: Returns a specific todo item identified by its ID.
    Response: 200 OK with the todo item in JSON format if found, or 404 Not Found if not found.
    Example: GET http://localhost:3000/todos/123
    
  3. POST /todos - Create a new todo item
    Description: Creates a new todo item.
    Request Body: JSON object representing the todo item.
    Response: 201 Created with the ID of the created todo item in JSON format. eg: {id: 1}
    Example: POST http://localhost:3000/todos
    Request Body: { "title": "Buy groceries", "completed": false, description: "I should buy groceries" }
    
  4. PUT /todos/:id - Update an existing todo item by ID
    Description: Updates an existing todo item identified by its ID.
    Request Body: JSON object representing the updated todo item.
    Response: 200 OK if the todo item was found and updated, or 404 Not Found if not found.
    Example: PUT http://localhost:3000/todos/123
    Request Body: { "title": "Buy groceries", "completed": true }
    
  5. DELETE /todos/:id - Delete a todo item by ID
    Description: Deletes a todo item identified by its ID.
    Response: 200 OK if the todo item was found and deleted, or 404 Not Found if not found.
    Example: DELETE http://localhost:3000/todos/123

    - For any other route not defined in the server return 404

  Testing the server - run `npm run test-todoServer` command in terminal
 */
const express = require('express');
const app = express();

// for accessing the body contents 
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Each todo has a title and a description. The title is a string and the description is a string.
// Each todo should also get an unique autogenerated id every time it is created
let idcounter = 100;
let todos = [
  {
    'id': idcounter++,
    'title': 'the task',
    'completed': true,
    'discription': 'the discription goes here'
  },
  {
    'id': idcounter++,
    'title': 'the task',
    'completed': true,
    'discription': 'the discription goes here'
  },
  {
    'id': idcounter++,
    'title': 'the task',
    'completed': true,
    'discription': 'the discription goes here'
  },
  {
    'id': idcounter++,
    'title': 'the task',
    'completed': true,
    'discription': 'the discription goes here'
  },
  {
    'id': idcounter++,
    'title': 'the task',
    'completed': true,
    'discription': 'the discription goes here'
  }
];

/*

  1.GET /todos - Retrieve all todo items
    Description: Returns a list of all todo items.
    Response: 200 OK with an array of todo items in JSON format.
    Example: GET http://localhost:3000/todos
    
  2.GET /todos/:id - Retrieve a specific todo item by ID
    Description: Returns a specific todo item identified by its ID.
    Response: 200 OK with the todo item in JSON format if found, or 404 Not Found if not found.
    Example: GET http://localhost:3000/todos/123
*/

app.get("/todos", (req, res) => {
  res.status(200).json(todos);
});

app.get("/todos/:id", (req, res) => {
  const iD = req.params.id;
  todos.forEach(todo => {
    if (todo['id'] == iD) {
      res.status(200).json(todo)
    }
  })
  res.status(404).send('Not FOund');
})


/**
 *  3. POST /todos - Create a new todo item
    Description: Creates a new todo item.
    Request Body: JSON object representing the todo item.
    Response: 201 Created with the ID of the created todo item in JSON format. eg: {id: 1}
    Example: POST http://localhost:3000/todos
    Request Body: { "title": "Buy groceries", "completed": false, "description": "I should buy groceries" }
 */

app.post("/todos/", (req, res) => {
  const todo = {
    id: ++idcounter,
    title: req.body.title,
    completed: req.body.completed,
    description: req.body.description
  };
  todos.push(todo);
  res.status(201).json({ 'id': idcounter });
});

/**
 *  4. PUT /todos/:id - Update an existing todo item by ID
    Description: Updates an existing todo item identified by its ID.
    Request Body: JSON object representing the updated todo item.
    Response: 200 OK if the todo item was found and updated, or 404 Not Found if not found.
    Example: PUT http://localhost:3000/todos/123
          Request Body: { "title": "Buy groceries", "completed": true }
 */

app.put("/todos/:id", (req, res) => {
  const ID = req.params.id;
  const updatedTodo = {
    'id': ID,
    'title': req.body.title,
    'completed': req.body.completed,
    'description': req.body.description
  }

  let i = todos.findIndex(todo => todo.id == ID)
  if (i == -1) {
    res.status(404).send('Not Found')
  } else {
    todos[i] = updatedTodo;
    res.status(200).json(updatedTodo)
  }
  // todos.forEach(todo => {
  //   if (todo['id'] === ID) {
  //     todo = updatedTodo;
  //     res.status(200).json(updatedTodo);
  //   }
  // })
  // res.status(404).send('Not Found')
});

/**
 * 5. DELETE /todos/:id - Delete a todo item by ID
    Description: Deletes a todo item identified by its ID.
    Response: 200 OK if the todo item was found and deleted, or 404 Not Found if not found.
    Example: DELETE http://localhost:3000/todos/123

 */


app.delete("/todos/:id", (req, res) => {
  const ID = req.params.id;
  let i = todos.findIndex(todo => todo.id == ID);
  if(i === -1){
    res.status(404).send('Nott Founddd')
  }else{
    todos.splice(i,1);
    res.status(200).send('ToDO Deleted Successfully');
  }
})


app.all('*', (req, res) => {
  res.status(404).send('Route not Foundd')
})


app.listen(3000, () => {
  console.log("Server is running at localhost:3000/todos");
})
module.exports = app;
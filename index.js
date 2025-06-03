const express = require("express");
const morgan = require("morgan");  // Import morgan

const app = express();

app.use(morgan("dev")); // Use morgan middleware for logging
app.use(express.json());

let todos = [
  { id: 1, task: "Learn DevOps basics" },
  { id: 2, task: "Build Node.js API" },
];

// Root route with updated welcome message
app.get("/", (req, res) => {
  res.send("hello from the todo api");
});

// Health check route
app.get("/health", (req, res) => {
  res.json({ status: "OK", uptime: process.uptime() });
});

// Get all todos
app.get("/todos", (req, res) => {
  res.json(todos);
});

// Get a single todo by id
app.get("/todos/:id", (req, res) => {
  const todo = todos.find(t => t.id === parseInt(req.params.id));
  if (!todo) return res.status(404).send("Todo not found");
  res.json(todo);
});

// Create a new todo
app.post("/todos", (req, res) => {
  const newTodo = {
    id: todos.length + 1,
    task: req.body.task,
  };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// Update a todo by id
app.put("/todos/:id", (req, res) => {
  const todo = todos.find(t => t.id === parseInt(req.params.id));
  if (!todo) return res.status(404).send("Todo not found");

  todo.task = req.body.task || todo.task;
  res.json(todo);
});

// Delete a todo by id
app.delete("/todos/:id", (req, res) => {
  const todoIndex = todos.findIndex(t => t.id === parseInt(req.params.id));
  if (todoIndex === -1) return res.status(404).send("Todo not found");

  todos.splice(todoIndex, 1);
  res.sendStatus(204);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


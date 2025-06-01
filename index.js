const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Sample in-memory todo list
let todos = [
  { id: 1, task: 'Learn Docker', completed: false },
  { id: 2, task: 'Deploy with Render', completed: true },
];

// Root route
app.get('/', (req, res) => {
  res.send('Hello from TODO API!');
});

// GET all todos
app.get('/todos', (req, res) => {
  res.json(todos);
});

// POST a new todo
app.post('/todos', (req, res) => {
  const newTodo = {
    id: todos.length + 1,
    task: req.body.task,
    completed: false,
  };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// Health check
app.get('/health', (req, res) => {
  res.send('OK');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


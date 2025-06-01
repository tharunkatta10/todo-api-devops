const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// In-memory todos array
let todos = [
  { id: 1, task: "Sample todo", completed: false }
];

// Root route - welcome message
app.get('/', (req, res) => {
  res.send('Todo API is live! ✅');
});

// Health check route
app.get('/health', (req, res) => {
  res.json({ status: 'OK', uptime: process.uptime() });
});

// Get all todos
app.get('/todos', (req, res) => {
  res.json(todos);
});

// Get a single todo by id
app.get('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const todo = todos.find(t => t.id === id);
  if (!todo) {
    return res.status(404).json({ error: "Todo not found" });
  }
  res.json(todo);
});

// Create a new todo
app.post('/todos', (req, res) => {
  const { task, completed } = req.body;
  if (!task) {
    return res.status(400).json({ error: "Task is required" });
  }
  const newTodo = {
    id: todos.length + 1,
    task,
    completed: completed || false
  };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// Update a todo by id
app.put('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const todoIndex = todos.findIndex(t => t.id === id);
  if (todoIndex === -1) {
    return res.status(404).json({ error: "Todo not found" });
  }
  const { task, completed } = req.body;
  if (task !== undefined) todos[todoIndex].task = task;
  if (completed !== undefined) todos[todoIndex].completed = completed;
  res.json(todos[todoIndex]);
});

// Delete a todo by id
app.delete('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const todoIndex = todos.findIndex(t => t.id === id);
  if (todoIndex === -1) {
    return res.status(404).json({ error: "Todo not found" });
  }
  todos.splice(todoIndex, 1);
  res.status(204).send();
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


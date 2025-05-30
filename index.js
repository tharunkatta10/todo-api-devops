const express = require('express');
const app = express();

app.use(express.json());

let todos = [];

// Get all todos
app.get('/todos', (req, res) => {
  res.json(todos);
});

// Add a new todo
app.post('/todos', (req, res) => {
  const todo = req.body;
  if (!todo || !todo.task) {
    return res.status(400).json({ error: 'Todo must have a task' });
  }
  todos.push(todo);
  res.status(201).json(todo);
});

// Delete a todo by index
app.delete('/todos/:index', (req, res) => {
  const index = parseInt(req.params.index);
  if (isNaN(index) || index < 0 || index >= todos.length) {
    return res.status(400).json({ error: 'Invalid index' });
  }
  const deleted = todos.splice(index, 1);
  res.json(deleted[0]);
});

// Use port from environment or default 3000
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(express.json());
app.use(morgan('dev'));

let todos = [
  { id: 1, task: 'Learn Node.js' },
  { id: 2, task: 'Build a To-Do API' },
];

// Welcome route
app.get('/', (req, res) => {
  res.send('HELLO FROM THE TODO API');
});

// Health check route
app.get('/health', (req, res) => {
  res.json({ status: 'OK', uptime: process.uptime() });
});

// Get all todos
app.get('/todos', (req, res) => {
  res.json(todos);
});

// Get todo by id
app.get('/todos/:id', (req, res) => {
  const todo = todos.find(t => t.id === parseInt(req.params.id));
  if (!todo) return res.status(404).send('Todo not found');
  res.json(todo);
});

// Create new todo
app.post('/todos', (req, res) => {
  const { task } = req.body;
  if (!task) return res.status(400).send('Task is required');
  const newTodo = { id: todos.length + 1, task };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// Update todo
app.put('/todos/:id', (req, res) => {
  const todo = todos.find(t => t.id === parseInt(req.params.id));
  if (!todo) return res.status(404).send('Todo not found');
  const { task } = req.body;
  if (!task) return res.status(400).send('Task is required');
  todo.task = task;
  res.json(todo);
});

// Delete todo
app.delete('/todos/:id', (req, res) => {
  const todoIndex = todos.findIndex(t => t.id === parseInt(req.params.id));
  if (todoIndex === -1) return res.status(404).send('Todo not found');
  const deleted = todos.splice(todoIndex, 1);
  res.json(deleted[0]);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


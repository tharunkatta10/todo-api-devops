const express = require('express');
const app = express();

app.use(express.json());

const todos = [
  // Sample initial data (optional)
  { id: 1, task: 'Learn Docker', completed: false },
  { id: 2, task: 'Build Todo API', completed: false },
];

// Get all todos
app.get('/todos', (req, res) => {
  res.json(todos);
});

// Add new todo
app.post('/todos', (req, res) => {
  const { task } = req.body;
  if (!task) {
    return res.status(400).json({ error: 'Task is required' });
  }
  const newTodo = {
    id: todos.length + 1,
    task,
    completed: false,
  };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// Update todo (mark completed)
app.put('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const todo = todos.find(t => t.id === id);
  if (!todo) {
    return res.status(404).json({ error: 'Todo not found' });
  }
  todo.completed = req.body.completed ?? todo.completed;
  res.json(todo);
});

// Delete todo
app.delete('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = todos.findIndex(t => t.id === id);
  if (index === -1) {
    return res.status(404).json({ error: 'Todo not found' });
  }
  todos.splice(index, 1);
  res.status(204).send();
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


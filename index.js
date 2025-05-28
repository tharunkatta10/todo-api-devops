const express = require("express");
const app = express();
const port = 3000;

let todos = [];

app.use(express.json());

app.get("/todos", (req, res) => res.json(todos));
app.post("/todos", (req, res) => {
  todos.push(req.body);
  res.status(201).json({ message: "Todo added." });
});

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));


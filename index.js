const express = require("express");
const app = express();

// Middleware
app.use(express.json());

// Sample route for health check
app.get("/", (req, res) => {
  res.send("Todo API is live! ✅");
});

// Example Todo route (can add more logic later)
app.get("/todos", (req, res) => {
  res.json([
    { id: 1, title: "Learn Docker" },
    { id: 2, title: "Deploy to Render" },
  ]);
});

// Use PORT from environment or fallback to 3000
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


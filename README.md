# 📝 ToDo API - DevOps Internship Project

This is a simple **Node.js CRUD API** built as part of a DevOps internship. It manages a list of todos using in-memory data, and demonstrates containerization, CI/CD with GitHub Actions, and cloud deployment using Render.

---

## 📦 Features

- Full CRUD functionality (Create, Read, Update, Delete)
- RESTful API design
- Logging using `morgan`
- Dockerized for easy deployment
- Deployed on [Render](https://render.com)
- CI/CD via GitHub Actions

---

## 🚀 Live API

🌐 [https://todo-api-devops.onrender.com](https://todo-api-devops.onrender.com)

---

## 🛠️ Installation (Local Setup)

```bash
git clone https://github.com/tharunkatta10/todo-api-devops.git
cd todo-api-devops
npm install
npm start
📦 Docker Instructions
Build Docker Image
bash
Copy
Edit
docker build -t todo-api .
Run the Container
bash
Copy
Edit
docker run -p 3000:3000 todo-api
Visit http://localhost:3000 in your browser or use Postman.

🧪 API Endpoints
Method	Route	Description
GET	/	Welcome message
GET	/health	Health check status
GET	/todos	Get all todos
POST	/todos	Add a new todo
PUT	/todos/:id	Update a todo by ID
DELETE	/todos/:id	Delete a todo by ID

Use tools like Postman, curl, or browser (for GET routes).

⚙️ CI/CD with GitHub Actions
This project includes a GitHub Actions workflow:

Runs automatically on push to main

Installs dependencies

(Optional) Runs tests

Deploys to Render automatically

File: .github/workflows/main.yml

📂 Project Structure
pgsql
Copy
Edit
├── index.js
├── package.json
├── Dockerfile
├── .dockerignore
├── .github
│   └── workflows
│       └── main.yml
└── README.md
🧑‍💻 Author
Tharun Katta

GitHub: tharunkatta10



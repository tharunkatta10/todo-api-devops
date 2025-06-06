# 📝 Todo API – DevOps Internship Final Project

This is a simple **CRUD Todo API** built using **Node.js** and deployed using **Docker**, **GitHub Actions CI/CD**, and **Render**.

> 🚀 **Live App**: [https://todo-api-devops.onrender.com](https://todo-api-devops.onrender.com)

---

## 📁 Project Structure

todo-api-devops/
├── Dockerfile
├── .github/workflows/main.yml
├── index.js
├── package.json
├── README.md
└── deployment_guide.md

yaml
Copy
Edit

---

## 📌 Features

- ✅ Simple Express-based Node.js API
- ✅ GET `/` — Welcome message
- ✅ GET `/health` — Returns health status
- ✅ GET `/todos` — Returns static list of todos
- ✅ Logging with Morgan middleware
- ✅ Dockerized using `Dockerfile`
- ✅ GitHub Actions CI/CD Workflow
- ✅ Live auto-deployment to Render

---

## 🚀 API Endpoints

| Method | Endpoint                  | Description                |
|--------|---------------------------|----------------------------|
| GET    | `/`                       | Welcome message            |
| GET    | `/health`                 | Health check               |
| GET    | `/todos`                  | Returns list of todos      |

---

## 🐳 Docker Commands (for local run)

```bash
# Build Docker image
docker build -t todo-api .

# Run container
docker run -p 3000:3000 todo-api
🤖 GitHub Actions CI/CD
Workflow file: .github/workflows/main.yml

Automatically builds Docker image and deploys to Render on every git push

🌐 Deployment
Cloud Provider: Render

GitHub integration for auto-deployments

Docker-based web service deployment

👨‍💻 Developer Info
Name: Tharun Katta

GitHub: @tharunkatta10

Project ID: CCG25101

Internship: Code Core Global – DevOps Internship (4 Weeks)

📄 Related Files
deployment_guide.md – Step-by-step deployment instructions

Dockerfile – Containerization setup

main.yml – GitHub Actions CI/CD workflow

✅ Final Deliverables
 GitHub repo with working code

 Dockerfile for containerization

 GitHub Actions CI/CD

 Deployed live on Render

 README.md + deployment_guide.md

🙌 Thank you for reviewing my internship project!

# 🚀 Deployment Guide – ToDo API

This guide explains how the **ToDo API** was deployed to the cloud using **Render**, **Docker**, and **GitHub Actions**.

---

## 🔧 Prerequisites

- A GitHub repository with your code.
- Docker installed (for local testing).
- A free [Render.com](https://render.com) account.

---

## 🗂️ Project Structure

todo-api-devops/
│
├── index.js # Node.js API logic
├── package.json # App dependencies and scripts
├── Dockerfile # Docker build instructions
├── .dockerignore # Files to ignore during Docker build
├── .github/workflows/
│ └── main.yml # GitHub Actions CI/CD pipeline
├── README.md
└── deployment_guide.md # ← This file

yaml
Copy
Edit

---

## 🐳 Docker Setup

### 1. Dockerfile

Your `Dockerfile` contains instructions to containerize the Node.js app:

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD [ "node", "index.js" ]
2. Build & Run (Local Test)
bash
Copy
Edit
docker build -t todo-api .
docker run -p 3000:3000 todo-api
Test in browser: http://localhost:3000

🤖 GitHub Actions CI/CD
1. Workflow File: .github/workflows/main.yml
yaml
Copy
Edit
name: CI/CD Pipeline

on:
  push:
    branches: [ "main" ]

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v3

      - name: Set up Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 18

      - name: Install dependencies
        run: npm install

      - name: Print message
        run: echo "CI build successful!"
This CI workflow ensures your app builds correctly after each push to main.

☁️ Deployment to Render
1. Create New Web Service
Go to Render Dashboard

Click "New Web Service"

Connect your GitHub repo

Set Build Command: npm install

Set Start Command: node index.js

Select Docker if your service is containerized

Set Port: 3000

Choose Free Plan

2. Enable Auto Deploy
In Render, enable "Auto Deploy" from GitHub.

Every new push to main will trigger a new deployment.

🔍 Validate Deployment
Test these endpoints:

URL	Description
https://todo-api-devops.onrender.com/	Welcome message
https://todo-api-devops.onrender.com/health	Health check
https://todo-api-devops.onrender.com/todos	Get all todos

📦 Final Deliverables
✅ GitHub Repo: https://github.com/tharunkatta10/todo-api-devops

✅ Live API: https://todo-api-devops.onrender.com

✅ Dockerfile and GitHub Actions workflow

✅ README.md and deployment_guide.md

👏 You're Done!
Congratulations on successfully containerizing, automating, and deploying your first API with CI/CD!

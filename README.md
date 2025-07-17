# 🚀 Containerized MERN Stack with Docker Compose

This project demonstrates a fully containerized MERN (MongoDB, Express.js, React, Node.js) stack application using Docker Compose. Each service runs in its own isolated container, enabling easier development, scaling, and deployment.

<img width="2048" height="2048" alt="Gemini_Generated_Image_tuhif7tuhif7tuhi" src="https://github.com/user-attachments/assets/630ad435-3c79-4fcb-ba12-f6a965e94583" />


---

## 📦 Tech Stack

- **Frontend**: React + Vite
- **Backend**: Express + Node.js
- **Database**: MongoDB
- **Containerization**: Docker & Docker Compose

---

## 📁 Project Structure
<img width="1920" height="1020" alt="Screenshot 2025-07-16 210448" src="https://github.com/user-attachments/assets/63b9fcde-3fd3-4925-93b8-fb14d2f9bdfd" />


---

## 🚀 Setup Instructions

### 🔧 Prerequisites

| Tool             | Version |
|------------------|---------|
| Node.js          | 18+     |
| Docker           | Latest  |
| Docker Compose   | v1.29+  |
| Git (optional)   | Latest  |
| Browser          | Chrome / Firefox |

---

### 🛠️ Local Development (Dockerized)


🐳 How to Run

Make sure you have Docker and Docker Compose installed.

# Step 1: Clone the repository
git clone https://github.com/ketanpawar-kp/mern-docker.git

cd mern-docker

# Step 2: Run all containers
docker-compose up --build

# Step 3: Visit the app
Frontend: http://localhost:3000  

Backend API: http://localhost:5000/api 

MongoDB: mongodb://mongo:27017


## 🐳 What Docker Compose Does

This setup automatically provisions:

🗃️ MongoDB – NoSQL database with persistent volume

🧠 Backend API – Express.js server handling auth & data

💻 Frontend – Vite + React-based client UI

🔗 Docker Networking – Seamless communication between services

## 🚀 Features

✅ User login and registration

✅ Real-time-like chat interface

✅ React + Vite fast build

✅ Vite-powered React frontend (fast builds!)

✅ Fully containerized with Docker

✅ Scalable & cloud-ready microservice architecture



## 📎 References Links

📂 My Repo: github.com/ketanpawar-kp/mern-docker

📎 Based on Docker Sample: github.com/dockersamples/slack-clone-docker

## 😂 Just for Fun
Why don't containers gossip?

Because they keep everything isolated! 🐳

## 🙏 Thank You
Made with ❤️ by Ketan Pawar

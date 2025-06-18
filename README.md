# React Message Poster

A simple full-stack app for posting and viewing messages. Built with **React** on the frontend and **Express.js** on the backend.

## 🖼️ Demo

Coming soon (or paste screenshots / Loom link here)

## 🛠️ Features

- Create and view messages with author and body
- Delete individual messages
- Full-screen modal for viewing post details
- API connected via RESTful endpoints
- CORS-enabled backend using Express.js

## 🧱 Tech Stack

**Frontend:**

- React (Vite)
- React Router
- CSS Modules

**Backend:**

- Node.js
- Express.js
- JSON file as mock database

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/wicopretorius/react-message-poster.git
cd react-message-poster
```

### 2. Install dependencies

**Install frontend dependencies:**

```bash
cd frontend
npm install
```

**Install backend dependencies:**

```bash
cd ../backend-api
npm install
```

### 3. Run the app

**In one terminal, run the backend:**

```bash
cd backend-api
npm start
```

**In another terminal, run the frontend:**

```bash
cd frontend
npm run dev
```

**The frontend runs at http://localhost:5173 and the backend at http://localhost:8080.**

## 📝 Folder Structure

```bash
react-message-poster/
├── frontend/          # Vite + React frontend
│   └── src/
│       ├── components/
│       ├── pages/
│       └── ...
├── backend-api/       # Express API backend
│   ├── app.js
│   └── data/
│       └── dummy-backend.json
```

## 📜 License

MIT – Feel free to use and adapt this project.

## 👤 Author

Built by Wico Pretorius.

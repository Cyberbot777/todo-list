
# To-Do List React + Express Project

A sleek, dark-themed full-stack to-do list app built with React and a custom Express backend.

This project was created as part of a 4Geeks Academy assignment to demonstrate mastery of React, API integration, and modern UI design.  
When the official API proved unreliable, a fully custom REST backend was built to meet all requirements.

---

## 🔗 Live Demo (Frontend)

[View the deployed project](https://todo-list-brown-eta.vercel.app/)

---

## Features

- Add tasks by typing and pressing **Enter**
- Tasks are persisted to a live Express backend
- Hover over a task to reveal a delete button
- **Clear All Tasks** button syncs delete to backend
- Tasks persist on reload via `GET` request
- Smooth, dark-themed responsive UI with hover feedback

---

## Tech Stack

- React (Vite)
- Express.js (Node.js backend)
- JavaScript
- CSS (inline styles + dark theme)
- Vercel (frontend deployment)

---

## Getting Started

Clone the repo and run the project locally.

### Folder Structure

```
project-root/
├── todo-api/           ← Express backend
│   └── server.js
├── src/                ← React frontend
│   └── App.jsx
├── package.json        ← React/Vite config
```

### Install Dependencies

From the root and backend folders:

```bash
# React Frontend
npm install

# Then in a second terminal window:
cd todo-api
npm install
```

### Run the Project

```bash
# Start the backend server
cd todo-api
node server.js
```

```bash
# In another terminal, start the frontend
npm run dev
```

- Frontend: http://localhost:5173  
- Backend: http://localhost:3001

---

## Assignment Objectives Covered

- Sync React app with backend on **task add**, **delete**, and **clear**
- Use `GET`, `PUT`, and `DELETE` methods correctly
- Use `useEffect` for loading tasks on app start
- Use `useState`, `map()`, conditional rendering, and event handling
- Deliver polished, minimal UX with a custom-built REST API

---

## Learning Outcomes

- Build and connect a custom REST API
- Integrate `fetch()` calls into a React app
- Debug real-world backend issues
- Replace unreliable APIs with fully working custom solutions
- Write clean, reusable logic with consistent styling
- Prepare and ship a complete full-stack assignment

---

## Author

Built by [@Cyberbot777](https://github.com/Cyberbot777)

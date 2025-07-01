# To-Do List React Project – 4Geeks API Version

A sleek, dark-themed to-do list app built with React.  
This branch connects the frontend to the official 4Geeks Academy REST API using `fetch()` calls for full CRUD functionality.

This version was created to meet the official assignment specifications exactly, using the provided backend routes and methods.

---

## 🔗 Live Demo

[View the deployed project](https://todo-list-7qtf20nhr-richard-s-projects-24c03fe9.vercel.app/)

---

## Features

- Load tasks on app start via `GET` request
- Add tasks with **Enter** key via `POST`
- Delete individual tasks using `DELETE`
- Clear all tasks using batched `DELETE` requests
- Auto-creates user if not found on the server (persistent user logic)
- Fully synced with [playground.4geeks.com](https://playground.4geeks.com) API
- Hover-based delete buttons and clean empty state messaging
- Responsive, modern dark-themed UI

---

## Tech Stack

- React (via Vite)
- JavaScript (ES6)
- CSS (inline + dynamic styling)
- 4Geeks REST API
- Vercel (frontend deployment)

---

## Learning Goals (Met)

- `useState` and `useEffect` for side-effect-based API sync
- `map()` and conditional rendering
- RESTful API integration with async/await and fetch
- Error handling and optimistic UI updates
- Fallback handling for deleted users
- Git branching and project cleanup
- Following and delivering to real-world API specs

---

## API Integration Details

This project interacts with the official 4Geeks API:

- `GET https://playground.4geeks.com/todo/users/richard_h_todo`
- `POST https://playground.4geeks.com/todo/todos/richard_h_todo`
- `DELETE https://playground.4geeks.com/todo/todos/:id`

All calls are unauthenticated and use the `richard_h_todo` namespace.  
If the user is not found, the app will automatically create the user via `POST` and retry loading tasks.

---

## Author

Built by [@Cyberbot777](https://github.com/Cyberbot777)

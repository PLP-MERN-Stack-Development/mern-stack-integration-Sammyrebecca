# MERN Blog — mern-stack-integration-Sammyrebecca

A small MERN-stack blog application (frontend + backend) used for learning and integration.

This README explains how to set up and run the Frontend (React) and Backend (Express + MongoDB) locally.

---

## Table of Contents

- Project overview
- Prerequisites
- Repo structure
- Environment variables
- Frontend: install & run
- Backend: install & run
- API quick reference
- Troubleshooting & common errors
- Notes

---

## Project overview

This repository contains two main parts:

- `Frontend/` — React application (development server expected at `http://localhost:3000`)
- `Backend/` — Express API server (development server expected at `http://localhost:5000`)

The frontend communicates with the backend API (default base URL `http://localhost:5000/api`). The backend uses MongoDB to persist users and posts.

---

## Prerequisites

- Node.js (>= 16 recommended)
- npm (bundled with Node)
- MongoDB running locally (or a MongoDB connection URI you can use)

If you don't have MongoDB installed locally, you can use a hosted MongoDB Atlas cluster. Update the backend environment variable `MONGODB_URI` accordingly.

---

## Repo structure (top-level)

```
mern-stack-integration-Sammyrebecca/
├── Frontend/
│   ├── public/index.html
│   ├── src/index.js
│   ├── src/App.js
│   ├── src/Api.js
│   ├── src/Context.js
│   ├── src/CreatePost.js
│   ├── src/PostList.js
│   ├── package.json
│   └── node_modules/
├── Backend/
│   ├── Server.js
│   ├── Routes.js
│   ├── route.Post.js
│   ├── Auth.js
│   ├── User.js
│   ├── Post.js
│   ├── uploads/
│   ├── package.json
│   └── node_modules/
└── README.md
```

(Your repo may have slightly different filenames/paths as you continue developing.)

---

## Environment variables

Create a `.env` file in `Backend/` (a sample `.env` is already present). At minimum set:

```
MONGODB_URI=mongodb://localhost:27017/blog-app
JWT_SECRET=your-super-secret-jwt-key
PORT=5000
```

- `MONGODB_URI`: MongoDB connection string.
- `JWT_SECRET`: secret used to sign JWTs.
- `PORT`: backend port (default: `5000`).

For Frontend, the API base is currently set in `Frontend/src/Api.js` to `http://localhost:5000/api`. You can change it to an environment-driven value if needed.

---

## Frontend — install & run

1. Change into the frontend folder:

```powershell
cd Frontend
```

2. Install dependencies (if not installed):

```powershell
npm install
```

3. Start the development server:

```powershell
npm start
```

- The app will compile and be available at `http://localhost:3000`.
- If you see a prompt about "unable to detect target browsers", you can accept the defaults (it will add a `browserslist` entry to `package.json`) or decline; it's not required for local development.

---

## Backend — install & run

1. Change into the backend folder:

```powershell
cd Backend
```

2. Install dependencies (if not installed):

```powershell
npm install
```

3. Ensure MongoDB is running locally (or set `MONGODB_URI` to a reachable URI).

4. Start the server:

```powershell
# development (with nodemon, if installed)
npm run dev

# or production mode
npm start
```

- The server listens on `http://localhost:5000` by default.
- If the backend exits immediately with a `MongooseServerSelectionError: connect ECONNREFUSED` error, it means MongoDB is not reachable. Start your MongoDB service and retry.

---

## API quick reference (example endpoints)

> The backend prefixes API routes with `/api` in `Server.js` (e.g. `app.use('/api/posts', postRoutes)`).

Typical endpoints (adjust if your routes file differs):

- `GET /api/posts?page=1` — list published posts
- `GET /api/posts/:id` — get a single post
- `POST /api/posts` — create a post (authenticated)
- `POST /api/auth/register` — register
- `POST /api/auth/login` — login

Refer to the route files (`Backend/Routes.js`, `Backend/route.Post.js`) for exact request/response schemas.

---

## Troubleshooting & common errors

- "Missing script: start/dev": Make sure you're running `npm run` from the correct folder (`Frontend` or `Backend`). Each package has its own `package.json`.

- "Could not find a required file: index.html": Ensure `Frontend/public/index.html` exists. (It was created during debugging.)

- "MongooseServerSelectionError: connect ECONNREFUSED 127.0.0.1:27017": MongoDB is not running locally or the connection string is incorrect. Start MongoDB or update `MONGODB_URI`.

- Static file uploads: backend stores uploaded files in `Backend/uploads`. Ensure this folder exists and is writable.

- Cross-Origin (CORS) issues: Backend uses `cors()` middleware. If you need to restrict origins update `Server.js` to pass options to cors.

---

## Notes and recommendations

- For production deployments, secure `JWT_SECRET` and avoid committing `.env` to source control.
- Consider adding a `README` per `Frontend` and `Backend` for component-level or route-level documentation.
- Add a `Procfile` or equivalent when deploying to platforms like Heroku.
- Add tests (Jest / supertest for backend, React Testing Library for frontend) as next steps.

---

## Contact / Next steps

If you want, I can:

- Add more detailed API docs (sample request/response bodies).
- Add a Postman collection / curl examples.
- Wire up deployment scripts.

---

Created/updated on: November 11, 2025

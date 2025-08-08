# Internship Suntek Practice

A full-stack recipe app built with React, Vite, Node.js, Express, MongoDB, and Tailwind CSS. You can add, view, and delete recipes.

---

## Features

* React frontend with Tailwind CSS
* Node.js + Express backend with REST API
* MongoDB database with Mongoose
* Add and delete recipes

---

## Setup

1. **Backend**

```bash
cd server
npm install
# create .env with MONGO_URI and PORT
npm run dev
```

2. **Frontend**

```bash
cd client
npm install
npm run dev
```

Open `http://localhost:5173` in your browser.

---

## API Endpoints

* `GET /api/recipes` — get all recipes
* `POST /api/recipes` — add recipe
* `DELETE /api/recipes/:id` — delete recipe

---

## Next

* Edit recipes
* Validation and better UX
* Deployment

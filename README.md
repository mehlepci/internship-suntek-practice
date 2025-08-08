# Internship Suntek Practice

A full-stack recipe app built with React, Vite, Node.js, Express, MongoDB, and Tailwind CSS.  
Users can add, view, edit, and delete recipes through a clean and responsive interface.

---

## Features

- React frontend styled with Tailwind CSS  
- Node.js + Express backend with RESTful API  
- MongoDB database with Mongoose ODM  
- Add, view, edit, and delete recipes  
- Responsive design for desktop and mobile  

---

## Getting Started

### Backend

1. Navigate to the backend folder:

    ```bash
    cd server
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file in the `server` directory with the following variables:

    ```ini
    MONGO_URI=your_mongodb_connection_string
    PORT=5000
    ```

4. Start the backend server:

    ```bash
    npm run dev
    ```

### Frontend

1. Navigate to the frontend folder:

    ```bash
    cd client
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Start the frontend development server:

    ```bash
    npm run dev
    ```

4. Open your browser and visit:

    ```
    http://localhost:5173
    ```

---

## API Endpoints

| Method | Endpoint           | Description       |
|--------|--------------------|-------------------|
| GET    | `/api/recipes`     | Get all recipes   |
| POST   | `/api/recipes`     | Add a new recipe  |
| PUT    | `/api/recipes/:id` | Update a recipe   |
| DELETE | `/api/recipes/:id` | Delete a recipe   |

---

## Future Improvements
 
- Add form validation and user-friendly error handling  
- Enhance UI/UX with animations and feedback  
- Deploy to a cloud service for live access  

---


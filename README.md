
# 📚 School Management System - Full Stack App

This is a full stack application for managing users and students. It includes JWT-based authentication, student photo upload, input validation, and error handling.
Live version: [http://35.247.228.63:82](http://35.247.228.63:82)

## 🔥 Features

### ✅ Authentication

* Login with email and password
* JWT token generation and validation
* Protected private routes

### 👤 User CRUD

* Register new user
* Login
* Update profile
* Delete account

### 👨‍🎓 Student CRUD

* List all students
* View single student
* Create new student
* Edit student info
* Delete student

### 📸 Photo Upload

* Upload image files through a form
* Associate photos with students
* Replace/update photos
* Served via `/photos/` route

### 🛡️ Validations & Error Handling

* Field validation for all forms
* Custom error messages (400, 401, 404, etc.)
* Centralized error handling middleware

## 🚀 Tech Stack

* **Frontend:** React, Redux, Axios, React Router
* **Backend:** Node.js, Express, Sequelize
* **Database:** PostgreSQL
* **Auth:** JWT (JSON Web Tokens)
* **File Upload:** Multer

## 🧪 API Testing

Use Postman or Insomnia to test private routes.
Make sure to include the JWT token in the headers:

```
Authorization: Bearer YOUR_TOKEN_HERE
```

## 📂 Project Structure

```
/frontend       # React front-end app
/backend        # Node.js + Express REST API
```

## 🛠️ Useful Scripts

```bash
# Frontend
cd frontend
npm install
npm start

# Backend
cd backend
npm install
npm run dev
```

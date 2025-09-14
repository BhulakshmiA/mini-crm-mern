### Project Overview

This is a full-stack Mini CRM (Customer Relationship Management) application built using the MERN stack. The application allows users to securely register and log in to manage their customers. Authenticated users can perform full CRUD (Create, Read, Update, Delete) operations on customer records.

### Features Implemented

  - **User Authentication**: Users can register and log in securely using JWT (JSON Web Tokens) for session management.
  - **Customer Management**: Authenticated users can add new customers, view a list of all their customers, and edit or delete existing customer records.
  - **RESTful API**: The backend provides a well-structured REST API for all frontend operations.
  - **Responsive UI**: The frontend is a clean and simple Single-Page Application (SPA) built with React, designed to be responsive and easy to use on both desktop and mobile devices.

### Tech Stack

**Backend**

  - **Node.js & Express.js**: For building the REST API.
  - **MongoDB & Mongoose**: As the database and ODM (Object Data Modeling) for data storage.
  - **bcrypt.js**: For securely hashing and salting passwords.
  - **jsonwebtoken**: For handling user authentication with JSON Web Tokens.
  - **cors**: To enable Cross-Origin Resource Sharing.

**Frontend**

  - **React.js**: For building the user interface.
  - **Vite**: A modern and fast build tool for the React application.
  - **React Router DOM**: For handling client-side routing.
  - **Axios**: For making API requests to the backend.

### Setup and Running the Project

Follow these steps to get a copy of the project up and running on your local machine.

#### Prerequisites

Ensure you have the following installed on your machine:

  - Node.js (v16.x or higher)
  - npm (v8.x or higher)
  - MongoDB (local or cloud-based service like MongoDB Atlas)

#### 1\. Clone the Repository

```bash
git clone https://github.com/BhulakshmiA/mini-crm-mern.git
cd mini-crm-mern
```

#### 2\. Backend Setup

Navigate to the `backend` folder, install the dependencies, and start the server.

```bash
cd backend
npm install
node server.js
```

The server will run on `http://localhost:5000`.

#### 3\. Frontend Setup

Open a new terminal, navigate to the `frontend` folder, and start the development server.

```bash
cd frontend
npm install
npm run dev
```

The frontend will run on `http://localhost:5173`.

### Usage

1.  Open your browser and go to `http://localhost:5173`.
2.  Register a new user by going to the `/register` route.
3.  Log in with your new user credentials.
4.  Once on the dashboard, you can add, edit, and delete customer records.

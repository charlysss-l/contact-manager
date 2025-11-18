# Contact Manager Project

A simple **Contact Manager** web application built with **React** for the frontend and **Node.js + Express + MongoDB** for the backend. Users can add, view, edit, and delete contacts.

---

## Table of Contents

- [Features](#features)  
- [Tech Stack](#tech-stack)  
- [Setup & Installation](#setup--installation)  
- [Environment Variables](#environment-variables)  
- [Running the Project](#running-the-project)  
- [Deployment](#deployment)  
- [Folder Structure](#folder-structure)  
- [Contributing](#contributing)  
 
---

## Features

- Add new contacts (Name, Email, Phone)  
- View a list of all contacts  
- Edit existing contacts  
- Delete contacts  
- Responsive design  

---

## Tech Stack

- **Frontend:** React, React Router, Axios, CSS Modules  
- **Backend:** Node.js, Express.js, MongoDB, Mongoose, dotenv, CORS  
- **Deployment:** Render (backend), Netlify (frontend)  

---

## Setup & Installation

1. **Clone the repository**

git clone https://github.com/charlysss-l/contact-manager.git
cd contact-manager

2. **Backend Setup**
cd backend
npm install

3. **Frontend Setup**
cd frontend
npm install


## Environment Variables
Create a .env file in the backend folder:
MONGO_URL=your_mongodb_connection_string
PORT=5000

Create a .env file in the frontend folder:
REACT_APP_API_URL=https://your-backend-url.onrender.com/api


## Running the Project
Backend (development)
npm run dev

Frontend (development)
npm start

Visit http://localhost:3000 in your browser.

## Deployment
Backend: Deployed on Render
Frontend: Deployed on Netlify


Make sure your frontend .env points to the deployed backend URL:
REACT_APP_API_URL=https://your-backend-url.onrender.com/api


## Folder Structure
contact-manager/
├─ backend/
│  ├─ models/
│  ├─ routes/
│  ├─ index.js
├─ frontend/
│  ├─ src/
│  │  ├─ components/
│  │  ├─ pages/
│  │  ├─ App.js
│  │  ├─ index.js
│  ├─ package.json
├─ README.md


## Contributing
1. Fork the repository
2. Create your feature branch: git checkout -b feature-name
3. Commit your changes: git commit -m 'Add some feature'
4. Push to the branch: git push origin feature-name
5. Open a Pull Request

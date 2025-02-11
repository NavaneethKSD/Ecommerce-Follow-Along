## Ecommerce

## A Full-Stack Ecommerce Platform

This project will develop an all-inclusive and interactive ecommerce platform. Users can browse products, manage their shopping carts, and complete purchases seamlessly. The platform focuses on user-friendliness, scalability, and secure operations to ensure a smooth online shopping experience.

## Milestone 1: Project Overview

### Session Summary

During the first session, the following key aspects of the project were covered:

### Project Purpose:

It aims to provide a seamless experience from browsing products to making secure checkouts on the ecommerce platform.

### Key Features to Be Implemented:

- **User Management:** Features like secure sign-up, login, and management of user accounts.
- **Product Catalog:** Display of products with detailed descriptions, images, and prices.
- **Shopping Cart:** Add/Remove/Modify items in the cart.
- **Checkout Process:** Ensuring secure payment and order placement.

### Tech Stack:

- **Front-end:** React.js to create a responsive and dynamic interface.
- **Back-end:** Node.js with Express.js to handle the server-side functions.
- **Database:** MongoDB to manage user and product data.
- **Authentication:** JSON Web Tokens (JWT) for secured login sessions.

### Project Goals:

Creating a fully-stacked web application that is industry-level compliant, scalable, easy to maintain, and features a visually clean UI and UX. This session provides the foundation for the building process, focusing on the vision and project goals alongside their technological needs.

---

## Milestone 2: Project Setup and Login Page Development

With Milestone 1 completed, Milestone 2 focused on structuring the project, setting up the frontend and backend, and building the login page for the application. The following tasks were completed during this milestone:

### Accomplishments 

- **Project Folder Structure:** Organized the project files into separate frontend and backend directories for better maintainability.
- **React Frontend Setup:** Initialized a React application to serve as the user interface of the platform.
- **Node.js Backend Setup:** Set up a Node.js server to handle server-side functionality and prepare for API integration in future milestones.
- **Tailwind CSS Configuration:** Integrated and configured Tailwind CSS for modern, responsive, and utility-based styling.
- **Login Page Development:** Built a fully functional and styled login page for the frontend. The page allows users to securely log in to their accounts.

### Repository Updates

The code has been pushed to the GitHub repository created in Milestone 1. The repository now includes:

1. **Separate folders** for frontend and backend.
2. **A functional Login Page** in the frontend with proper styling using Tailwind CSS.
3. An updated README file summarizing the progress made during Milestone 2.



## Milestone 3: Backend Setup  

In this milestone, I worked on setting up the backend for the e-commerce project. The goal was to make sure the backend is organized, connected to a database, and ready to handle errors smoothly.  

### What I Did  

- **Backend Folder Structure:**  
  - I created folders like `routes`, `controllers`, `models`, and `middlewares`. This helps keep the backend code neat and easy to manage.  

- **Set Up the Server:**  
  - I used Node.js and Express.js to create a basic server. The server listens for API requests and will handle them in future milestones.  

- **Connected to MongoDB:**  
  - I used Mongoose to connect the project to a MongoDB database. This is where all the data, like users and products, will be stored.  

- **Added Error Handling:**  
  - I wrote some basic code to handle errors. This means if something goes wrong, I’ll get a clear message about what happened.  

### Tools I Used  

- **Express.js:** To create routes and handle API requests.  
- **Mongoose:** To connect and interact with MongoDB.  
- **Nodemon:** To automatically restart the server when I make changes.  
- **Dotenv:** To keep important data like the database link safe in a `.env` file.  

### Updates to the Repository  

- The backend now has:  
  - A proper folder structure.  
  - A `server.js` file to start the backend.  
  - A connection to MongoDB.  
  - Basic error-handling middleware.  

Below is a sample README text for Milestone 4, detailing the work done for user management and file upload integration:

---

# Milestone 4: User Management and File Upload Integration

## Overview

In Milestone 4, the focus was on enhancing the backend functionality for user management. This milestone introduces:

- **User Controller:** API endpoint for creating users with file upload support.
- **User Model:** A robust Mongoose schema to store user information.
- **Middleware Enhancements:** Error handling and authentication middleware for better route protection.
- **File Upload Integration:** Configured Multer for handling avatar uploads.

## Features Implemented

### 1. User Controller

- **Create User Endpoint:**  
  A new route (`/create-user`) was implemented to allow the creation of a new user.  
  - **Functionality:**  
    - Accepts user data (name, email, password) along with a file upload (user avatar).
    - Checks if the user already exists using the email.
    - Processes the file upload using Multer and constructs a file URL for the user's avatar.
    - Utilizes custom error handling to return appropriate error messages if the user already exists.
    


### 2. User Model

- **Mongoose Schema for Users:**  
  The user schema was enhanced to include necessary fields along with validation:
  - **Fields:** name, email, password, phone, addresses, role, and avatar.
  - **Validations:** Ensures required fields are present, password meets a minimum length, etc.



### 3. Middleware Enhancements

- **Authentication Middleware (`auth.js`):**  
  Prepares the backend for secure routes by integrating JWT-based authentication (further improvements and implementations are planned for future milestones).

- **Error Handling Middleware (`catchAsyncErrors.js`):**  
  Simplifies error handling in asynchronous route handlers:


### 4. File Upload Integration with Multer

- **Multer Configuration:**  
  Configured Multer to handle file uploads, specifically for user avatars.
  - **Storage:**  
    - Files are stored in the `uploads/` directory.
    - Each file is given a unique filename using a timestamp and random number to prevent conflicts.
  


## Repository Updates

- **Backend Structure:**
  - **Controllers:** New user controller for handling user-related API requests.
  - **Models:** Updated user model reflecting the new schema.
  - **Middlewares:** Added `auth.js` for authentication and `catchAsyncErrors.js` for error handling.
  - **Multer:** Integrated configuration for handling file uploads.
  

## Milestone 5: Sign-Up Page and Form Validation

### Overview
In this milestone, the **Sign-Up Page** was created for new users to register an account. It includes form validation to ensure valid user input before submission.

### Features Implemented
- **Sign-Up Page UI:** A clean and responsive sign-up page built with React.js and Tailwind CSS.
- **Form Fields:** Users enter their name, email, and password.
- **Validation Logic:** 
  - Ensures email contains '@'.
  - Password must be at least 6 characters long.
  - Name field cannot be empty.
- **Routing:** The `/signup` route was added to navigate to the Sign-Up Page.

### Repository Updates
- Added `SignUpPage.jsx` to `src/components/`.
- Updated `App.jsx` to include routing for the Sign-Up Page.
- Updated `README.md` with Milestone 5 details.

Here’s your **Milestone 6 README** in the same style as your friend’s:  

---

## **Milestone 6: Backend Endpoint for Secure Signup **  

### **Overview**  
In this milestone, we implemented a **secure backend endpoint** for the Signup page. This included encrypting passwords and safely storing user data in the database to enhance security.  

### **Features Implemented**  

1. **Password Encryption**:  
   - Used `bcrypt` to hash user passwords before saving them.  
   - Ensured that only the **hashed password** is stored in the database, protecting user credentials from potential breaches.  

2. **User Data Storage**:  
   - Designed a schema to store user information, including:  
     - Name  
     - Email  
     - Password (hashed)  
     - Avatar (profile image)  
   - Implemented validation and error handling to prevent duplicate accounts and incorrect data entry.  

### **How It Works**  
1. Users submit their **name, email, and password** through the Signup form.  
2. The backend API hashes the password using `bcrypt`.  
3. The hashed password, along with other user details, is **stored securely** in the MongoDB database.  


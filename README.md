## Ecommerce

## A Full-Stack Ecommerce Platform

This project will develop an all-inclusive and interactive ecommerce platform. Users can browse products, manage their shopping carts, and complete purchases seamlessly. The platform focuses on user-friendliness, scalability, and secure operations to ensure a smooth online shopping experience.

# Milestone 1: Project Overview

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

# Milestone 2: Project Setup and Login Page Development

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



# Milestone 3: Backend Setup  

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
  

# Milestone 5: Sign-Up Page and Form Validation

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
 

---

# **Milestone 6: Backend Endpoint for Secure Signup **  

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


---

# **Milestone 7: Backend Endpoint for User Login 🔑**  

### **Overview**  
In this milestone, we implemented a **secure login authentication system** in the backend. This ensures that only users with valid credentials can access their accounts by verifying their encrypted passwords.  

### **Features Implemented**  

1. **User Authentication**:  
   - Created a **login endpoint** to handle user authentication.  
   - Validates user credentials (email and password) before granting access.  

2. **Password Verification**:  
   - Used `bcrypt` to **compare the entered password** with the hashed password stored in the database.  
   - If passwords match, authentication is successful; otherwise, an error is returned.  

3. **Error Handling & Security**:  
   - Returns an error message if the user does not exist.  
   - Ensures passwords are never stored in plain text, following security best practices.  

### **Technologies Used**  
- **Node.js** for backend logic.  
- **Express.js** for handling API requests.  
- **bcrypt** for secure password comparison.  
- **MongoDB** to store user credentials.  

### **How It Works**  
1. **User Enters Credentials**: The user provides their **email and password** on the login page.  
2. **Fetch User Data**: The backend retrieves the **user record** from the database using the provided email.  
   - If the user is not found, an error is returned: **"User does not exist."**  
3. **Compare Encrypted Passwords**:  
   - The backend **hashes the entered password** using `bcrypt`.  
   - The hashed password is **compared** to the stored password in the database.  
   - If they match, the user is authenticated; otherwise, an error is sent.  

---


# 🛍️ Milestone 8: Product Card Component & Homepage  

##  Overview  
In this milestone, I created a **reusable product card component** and designed a **homepage** to display multiple product cards dynamically.  

##  Features Implemented  
 **Reusable Product Card Component**: Displays product details like name, image, and price.  
 **Dynamic Rendering**: Uses `.map()` to render multiple products from an array.  
 **Styled Layout**: Organized product cards using **Flexbox/Grid** for a clean UI.  
 **Routing**: Added a route `/home` to display the products page.  

## 📁 Project Structure  
```
frontend/
│-- src/
│   ├── components/
│   │   ├── LoginPage.jsx
│   │   ├── SignUpPage.jsx
│   │   ├── ProductCard.jsx  <-- (New Product Card Component)
│   │   ├── HomePage.jsx     <-- (New Homepage Component)
│   ├── App.jsx
│   ├── index.css
│-- package.json
│-- README.md
```

3️⃣ **Open in Browser**  
Visit: [http://localhost:5173/home](http://localhost:5173/home)  

# Milestone 9 - Product Input Form 🎯

## Overview 📌
In this milestone, we created a frontend form to take product input dynamically. The form allows users to enter product details, including multiple images, and displays them instantly on the homepage.  

This feature ensures products can be added dynamically without modifying the code manually.

## Features 
- **Product Input Form**: Users can enter product details (name, price, image URL).
- **Real-time Updates**: Products are added dynamically to the homepage.
- **State Management**: Used React `useState` to manage product data.

## How It Works 
1. Users enter product details in the form.
2. Clicking "Add Product" updates the product list dynamically.
3. The new product appears instantly on the homepage.

## Folder Structure 📁

frontend/
│-- src/
│   ├── components/
│   │   ├── LoginPage.jsx
│   │   ├── SignUpPage.jsx
│   │   ├── ProductCard.jsx
│   │   ├── HomePage.jsx
│   │   ├── ProductForm.jsx  <-- (New Product Input Form Component)
│   ├── App.jsx
│   ├── index.css
│-- package.json
│-- README.md


# **Milestone 10: Backend Endpoint for Product Storage 🛒**  

### **Overview**  
In this milestone, we implemented a **Mongoose schema** for products and created a **backend API endpoint** to store product details securely in MongoDB. This ensures structured data storage and validation for product entries.  

---

### **Features Implemented**  

1. **Product Schema (Mongoose Model)**  
   - Defined a **schema for product data** with proper validation.  
   - Fields include **name, description, price, images, and createdAt timestamp**.  

2. **Backend API Endpoint**  
   - Created a **POST API endpoint** to accept product details and store them in MongoDB.  
   - Ensured **proper validation** before saving product data.  

3. **Data Validation & Security**  
   - Enforced required fields (e.g., name, description, price) to maintain data integrity.  
   - Sanitized input data to prevent injection attacks.  

---

### **Technologies Used**  
- **Node.js** for backend logic.  
- **Express.js** for API development.  
- **Mongoose** to interact with MongoDB.  
- **MongoDB** as the database for storing product details.  

---

### **How It Works**  

1. **User Submits Product Details**  
   - The frontend sends a `POST` request to the backend with product data.  

2. **Product Data Validation**  
   - The backend checks if **required fields are provided** and validates their data types.  
   - If any field is missing or invalid, an error is returned.  

3. **Store Product in MongoDB**  
   - If validation passes, the product is **saved in MongoDB** using Mongoose.  
   - A **success response** is sent back to the frontend.  

---


---

### **POST API Endpoint for Adding Products**  

📌 **Route:** `/api/v1/product/create-product`  
📌 **Method:** `POST`  


---




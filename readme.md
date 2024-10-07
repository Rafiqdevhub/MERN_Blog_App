# MERN Blog App

## Overview

MERN Blog App is a full-stack web application built using the MERN stack (MongoDB, Express, React, Node.js). It allows users to create, read, update, and delete blog posts. The application is designed to be scalable and easy to use, providing a seamless experience for both developers and end-users.

## Features

- User authentication and authorization
- Create, read, update, and delete blog posts
- Responsive design for mobile and desktop
- Rich text editor for creating blog content
- Commenting system for user interaction
- Search functionality to find posts easily

## Technologies Used

- **MongoDB**: Database for storing blog posts and user information
- **Express**: Backend framework for building the API
- **React**: Frontend library for building the user interface
- **Node.js**: JavaScript runtime for server-side development

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Rafiqdevhub/MERN_Blog_App.git
   cd MERN_Blog_App
   ```

2. **Install server dependencies:**

   ```bash
   cd server
   npm install
   ```

3. **Install client dependencies:**

   ```bash
   cd ../client
   npm install
   ```

4. **Set up environment variables:**

   Create a `.env` file in the `server` directory and add the following:

   ```plaintext
   MONGO_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   ```

5. **Run the application:**

   - Start the server:

     ```bash
     cd server
     npm start
     ```

   - Start the client:

     ```bash
     cd ../client
     npm start
     ```

6. **Open your browser:**

   Visit `http://localhost:3000` to view the application.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any improvements or bug fixes.

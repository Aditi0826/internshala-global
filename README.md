# User Management App

## Overview
This is a simple User Management application built using React. The app allows users to log in, view a list of users, and log out. It features a responsive design with a dark mode toggle and a user-friendly interface.

## Features
- User login with predefined credentials.
- Fetch and display a list of users from an API.
- Responsive grid layout displaying three users per row.
- Dark mode toggle.
- Logout button positioned at the bottom of the page.
- Styled login form with a centered design.

## Technologies Used
- React (Functional Components & Hooks)
- Axios (for API requests)
- CSS (for styling)

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/user-management-app.git
   ```

2. Navigate to the project directory:
   ```sh
   cd user-management-app
   ```

3. Install dependencies:
   ```sh
   npm install
   ```

4. Start the development server:
   ```sh
   npm start
   ```

## Usage
1. Open the app in your browser (`http://localhost:3000`).
2. Enter the login credentials:
   - **Email:** `test@example.com`
   - **Password:** `password123`
3. View the list of users.
4. Click the logout button to return to the login screen.

## Folder Structure
```
user-management-app/
│── src/
│   ├── components/   # Reusable components
│   ├── pages/        # Login and UsersList pages
│   ├── App.js        # Main application file
│   ├── index.js      # Entry point
│   ├── App.css       # Global styles
│── public/
│── package.json
│── README.md
```

## API
The user list is fetched from `https://reqres.in/api/users`.

---

Feel free to modify and enhance the project as needed! 🚀


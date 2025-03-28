import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const Navbar = ({ onLogout }) => {
  return (
    <div className="navbar">
      <button className="btn-dark-mode">Dark Mode</button>
    </div>
  );
};

const UsersList = ({ onLogout }) => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios
      .get(`https://reqres.in/api/users?page=${page}`)
      .then((response) => {
        setUsers(response.data.data);
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      });
  }, [page]);

  return (
    <div>
      <Navbar onLogout={onLogout} />
      <div className="users-container">
        {users.map((user) => (
          <div className="user-card" key={user.id}>
            <img src={user.avatar} alt="User Avatar" />
            <h3>{user.first_name} {user.last_name}</h3>
            <p>{user.email}</p>
            <button className="btn-edit">Edit</button>
            <button className="btn-delete">Delete</button>
          </div>
        ))}
      </div>

      <div className="logout-btn-container">
        <button className="btn-logout" onClick={onLogout}>Logout</button>
      </div>
    </div>
  );
};

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'user' && password === 'password') {
      onLogin(); // Simulate login success
    } else {
      alert('Invalid login credentials');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="login-input">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="login-input">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn-login">Login</button>
      </form>
    </div>
  );
};

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      {isLoggedIn ? <UsersList onLogout={handleLogout} /> : <LoginForm onLogin={handleLogin} />}
    </div>
  );
};

export default App;

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
    axios.get(`https://reqres.in/api/users?page=${page}`)
      .then(response => {
        setUsers(response.data.data);
      })
      .catch(error => {
        console.error("Error fetching users", error);
      });
  }, [page]);

  const handleNextPage = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setPage(prevPage => prevPage - 1);
  };

  return (
    <div className="user-list">
      <div className="user-cards">
        {users.map(user => (
          <div key={user.id} className="user-card">
            <img src={user.avatar} alt={user.first_name} />
            <h3>{user.first_name} {user.last_name}</h3>
            <p>{user.email}</p>
            <button className="btn-edit">Edit</button>
            <button className="btn-delete">Delete</button>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button 
          onClick={handlePreviousPage} 
          disabled={page === 1} 
          className="btn-pagination"
        >
          Previous
        </button>
        <span>Page {page}</span>
        <button 
          onClick={handleNextPage} 
          className="btn-pagination"
        >
          Next
        </button>
      </div>

      {/* Logout Button in UsersList */}
      <button className="btn-logout" onClick={onLogout}>Logout</button>
    </div>
  );
};

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="app">
      {isLoggedIn ? (
        <div>
          <Navbar onLogout={handleLogout} />
          <UsersList onLogout={handleLogout} />
        </div>
      ) : (
        <div className="login">
          <h2>Login</h2>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button type="submit">Login</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default App;

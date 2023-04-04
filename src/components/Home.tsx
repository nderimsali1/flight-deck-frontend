import { Link, Navigate } from 'react-router-dom';
import { Button } from 'antd';
import React from "react";
import { setAuthToken } from '../helpers/set-auth-token';

function HomePage() {
  let token;
  const urlParams = new URLSearchParams(window.location.search);
  token = urlParams.get('token');
  if (token) {
    localStorage.setItem('token', token);
    setAuthToken(token);
  } else {
    token = localStorage.getItem('token');
  }

  const logoutUser = () => {
    // Perform logout actions here, such as clearing local storage and redirecting to login page
    localStorage.removeItem('token');
    setAuthToken(null); // clear auth token from axios headers if applicable
    // Redirect to login page
    return <Navigate to="/login" replace />;
  };

  return token ? (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to my app!</p>
      <Link to="/login">
        <Button type="primary">Go to Login</Button>
      </Link>
      <Button type="primary" danger onClick={logoutUser}>Logout</Button>
      <Link to="/profile">
        <Button>Go to profile</Button>
      </Link>
    </div>
  ) : <Navigate to="/login" replace />;
}

export default HomePage;

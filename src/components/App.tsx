import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ProfilePage from './Profile';
import LoginPage from './LoginPage';
import HomePage from './Home';
import { ProtectedPage } from './ProtectedPage';

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/profile",
    element: <ProtectedPage><ProfilePage /></ProtectedPage>,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

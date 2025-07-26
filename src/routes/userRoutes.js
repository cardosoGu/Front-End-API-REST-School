import React from 'react';
import { Route } from 'react-router-dom';

import ProtectedRoute from '../services/ProtectedRoute';
import User from '../pages/userUpdate';
import Login from '../pages/login';
import Register from '../pages/Register';

function UserRoutes() {
  return (
    <>
      <Route path="/user/login" element={<Login />} />
      <Route path="/user/register" element={<Register />} />
      <Route
        path="/user/config"
        element={
          <ProtectedRoute isClosed>
            <User />
          </ProtectedRoute>
        }
      />
    </>
  );
}

export default UserRoutes;

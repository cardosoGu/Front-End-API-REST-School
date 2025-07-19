import React from 'react';
import { Routes, Route } from 'react-router-dom';

import ProtectedRoute from '../services/ProtectedRoute';
import Login from '../pages/Login';
import Page404 from '../pages/Page404';

function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute isClosed>
            <Login />
          </ProtectedRoute>
        }
      />

      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}

export default AppRoutes;

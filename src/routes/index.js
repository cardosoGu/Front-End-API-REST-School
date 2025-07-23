import React from 'react';
import { Routes, Route } from 'react-router-dom';

import ProtectedRoute from '../services/ProtectedRoute';
import Home from '../pages/home';
import Page404 from '../pages/Page404';
import StudentsRoutes from './studentsRoutes';
import UserRoutes from './userRoutes';

function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute isClosed>
            <Home />
          </ProtectedRoute>
        }
      />
      {StudentsRoutes()}
      {UserRoutes()}
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}

export default AppRoutes;

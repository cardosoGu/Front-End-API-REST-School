import React from 'react';
import { Route } from 'react-router-dom';

import ProtectedRoute from '../services/ProtectedRoute';
import Student from '../pages/student';
import Students from '../pages/students';
import Photos from '../pages/photos';

function StudentsRoutes() {
  return (
    <>
      <Route
        path="/student/edit/:id"
        element={
          <ProtectedRoute isClosed>
            <Student />
          </ProtectedRoute>
        }
      />

      <Route
        path="/students"
        element={
          <ProtectedRoute isClosed>
            <Students />
          </ProtectedRoute>
        }
      />
      <Route
        path="/photo"
        element={
          <ProtectedRoute isClosed>
            <Photos />
          </ProtectedRoute>
        }
      />
    </>
  );
}

export default StudentsRoutes;

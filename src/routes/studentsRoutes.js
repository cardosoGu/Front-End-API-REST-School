import React from 'react';
import { Route } from 'react-router-dom';

import ProtectedRoute from '../services/ProtectedRoute';
import Student from '../pages/student';
import Students from '../pages/students';
import AddStudent from '../pages/addStudent';

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
        path="/student/store"
        element={
          <ProtectedRoute isClosed>
            <AddStudent />
          </ProtectedRoute>
        }
      />
    </>
  );
}

export default StudentsRoutes;

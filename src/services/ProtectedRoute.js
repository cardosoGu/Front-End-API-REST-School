import React, { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';

export default function ProtectedRoute({ isClosed, children }) {
  // save current route, to redirect after login
  const location = useLocation();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  useEffect(() => {
    if (isClosed && !isLoggedIn) {
      toast.error('Please log in to continue!'); // flash message
    }
  }, [isClosed, isLoggedIn]);

  // if route is closed and user isnt logged
  if (isClosed && !isLoggedIn) {
    return (
      <Navigate
        to="/user/login"
        replace
        // send current route to state
        state={{ prevPath: location.pathname }}
      />
    );
  }

  // children save and return after login the rest of infos, ex: components and etc
  return children;
}

ProtectedRoute.propTypes = {
  isClosed: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

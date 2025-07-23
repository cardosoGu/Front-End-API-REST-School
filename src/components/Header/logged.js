import React from 'react';
import { FaSignInAlt, FaHome, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useDispatch } from 'react-redux';

import { RightSideNav } from './styled';
import { logOut, login } from '../../store/authSlice';

function Logged({ isLogged }) {
  const mySwal = withReactContent(Swal);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    mySwal
      .fire({
        title: 'Are you sure you want logOut?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'sure',
        cancelButtonText: 'Cancel',
      })
      .then((result) => {
        if (result.isConfirmed) {
          dispatch(logOut());
        }
      });
  };

  const handleLogin = () => {
    dispatch(login());
  };

  if (isLogged) {
    return (
      <RightSideNav>
        <Link to="/user">
          <FaUser size={30} />
        </Link>

        <button type="button" onClick={handleLogOut}>
          <FaSignInAlt size={30} />
        </button>
      </RightSideNav>
    );
  }

  return (
    <RightSideNav>
      <button type="button" onClick={handleLogin}>
        teste login
      </button>
      <Link to="user/login">Login</Link>
    </RightSideNav>
  );
}

Logged.propTypes = {
  isLogged: PropTypes.bool.isRequired,
};

export default Logged;

import React from 'react';
import { FaSignInAlt, FaHome, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Nav, RightSideNav } from './styled';

function Header() {
  return (
    <Nav>
      <Link to="/">
        <FaHome size={30} />
      </Link>

      <RightSideNav>
        <Link to="/user">
          <FaUser size={30} />
        </Link>

        <Link to="/login">
          <FaSignInAlt size={30} />
        </Link>
      </RightSideNav>
    </Nav>
  );
}

export default Header;

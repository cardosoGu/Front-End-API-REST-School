import React from 'react';
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Nav } from './styled';
import Logged from './logged';

function Header() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <Nav>
      <Link to="/">
        <FaHome size={30} />
      </Link>
      <Logged isLogged={isLoggedIn} />
    </Nav>
  );
}

export default Header;

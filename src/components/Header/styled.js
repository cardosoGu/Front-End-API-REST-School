import styled from 'styled-components';
import { primaryColor } from '../../config/color';

// styling Nav, size, and cotents positions
export const Nav = styled.nav`
  background: ${primaryColor};
  padding: 20px;
  display: flex;
  align-items: center;

  a {
    font-size: 20px;
    color: white;
    font-weight: bolder;
    text-shadow: 2px 2px 0px black;
  }
  a:hover,
  button:hover {
    color: aquamarine;
  }
  button {
  }
`;

// To move these icons to right
export const RightSideNav = styled.div`
  display: flex;
  margin-left: auto;
  align-items: center;

  a {
    margin: 0 15px;
  }
`;

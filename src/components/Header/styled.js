import styled from 'styled-components';
import { primaryColor } from '../../config/color';

// styling Nav, size, and cotents positions
export const Nav = styled.nav`
  background: ${primaryColor};
  padding: 20px;
  display: flex;
  align-items: center;

  a {
    color: white;
    font-weight: bolder;
    text-shadow: 2px 2px 0px black;
  }
`;

// To move these icons to right
export const RightSideNav = styled.div`
  display: flex;
  margin-left: auto;

  a {
    margin: 0 15px;
  }
`;

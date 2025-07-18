import { createGlobalStyle, styled } from 'styled-components';
import * as colors from '../config/color';

export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
}

body{
  font-family: sans-serif;
  background-color: ${colors.primaryDarkColor};
  color: ${colors.primaryColor}
}

html, body, #root{
 height: 100%;
}

button{
  cursor: pointer;
  background-color: ${colors.primaryColor};
  border: none;
  color: #fff;
  padding: 10px 20px;
  border-radius: 4px;
  font-weight: 700;
}

a{
  text-decoration: none;
  color: ${colors.primaryColor};
}

ul{
  list-style: none;
}
`;

export const Container = styled.section`
  background: white;
  max-width: 900px;
  margin: 30px auto;
  border-radius: 4px;
  padding: 30px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;

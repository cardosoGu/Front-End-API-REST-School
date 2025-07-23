import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../../styles/GlobalStyles';
import { Title, Paragraph } from './styled';

function Login() {
  return (
    <Container>
      <Title>Login</Title>

      <Link to="/user/register">Don`t have a account? register here!</Link>
    </Container>
  );
}

export default Login;

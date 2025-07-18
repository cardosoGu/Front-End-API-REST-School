import React from 'react';

import { Container } from '../../styles/GlobalStyles';
import { Title, Paragraph } from './styled';

function Login() {
  return (
    <Container>
      <Title>
        Login
        <small>Faca login para prosseguir</small>
      </Title>
      <Paragraph>Lorem ipsum dolor sit amet.</Paragraph>
      <button type="button">Enviar</button>
    </Container>
  );
}

export default Login;

import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Container } from '../../styles/GlobalStyles';
import { Title, Paragraph } from './styled';
import { loginUser } from '../../store/authThunk';
import { Key } from './key';

function Login() {
  const data = useSelector((state) => state.auth.payload);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(loginUser());
  };
  return (
    <Container>
      <Title>
        Login
        <small>Faca login para prosseguir</small>
      </Title>
      <Key data={data} />
      <button type="button" onClick={handleClick}>
        Enviar
      </button>
    </Container>
  );
}

export default Login;

import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Container } from '../../styles/GlobalStyles';
import { Title, Paragraph } from './styled';
import { loginUser } from '../../store/authThunk';
import { Key } from './key';

function Home() {
  const data = useSelector((state) => state.auth.payload);
  const loading = useSelector((state) => state.auth.loading);
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
      {loading ? <Paragraph>Carregando...</Paragraph> : null}
      <Key data={data} />
      <button type="button" onClick={handleClick}>
        Enviar
      </button>
    </Container>
  );
}

export default Home;

import React from 'react';

import { Link } from 'react-router-dom';
import { Container } from '../../styles/GlobalStyles';
import { Title, Paragraph } from './styled';
import { loginUser } from '../../store/authThunk';
import { Key } from './key';

function Home() {
  return (
    <Container>
      <Title>Home</Title>
      <Link to="/students">Students temporaly link</Link>
    </Container>
  );
}

export default Home;

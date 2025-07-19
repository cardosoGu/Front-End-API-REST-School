import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Centered, Title, Paragraph, ReturnHome } from './styled';
import { Container } from '../../styles/GlobalStyles';

function Page404() {
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/');
  };

  return (
    <Container>
      <Centered>
        <Title>Page not found</Title>
        <Paragraph>404</Paragraph>
        <ReturnHome onClick={goHome}>return</ReturnHome>
      </Centered>
    </Container>
  );
}
export default Page404;

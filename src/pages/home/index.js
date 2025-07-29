import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Container } from '../../styles/GlobalStyles';
import { Title, Paragraph, ButtonGroup, TechList } from './styled';

function Home() {
  const name = useSelector((state) => state.auth.user.nome);

  return (
    <Container>
      <Title>Welcome, {name} 👋</Title>

      <Paragraph>
        Full-stack system for managing students and users with CRUD, JWT auth,
        and photo uploads. Built using React, Redux, Node.js, Express, and
        PostgreSQL.
      </Paragraph>

      <TechList>
        <span>React</span>
        <span>Redux</span>
        <span>Node.js</span>
        <span>Express</span>
        <span>PostgreSQL</span>
        <span>Styled-components</span>
      </TechList>

      <ButtonGroup>
        <Link to="/students">🚀 View Students</Link>
        <a href="https://github.com/cardosoGu" target="_blank" rel="noreferrer">
          💻 View on GitHub
        </a>
      </ButtonGroup>
    </Container>
  );
}

export default Home;

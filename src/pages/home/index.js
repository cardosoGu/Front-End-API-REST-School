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
        I`m a self-taught dev focused on web development. This project is a full
        CRUD system for managing students and users. All built with React,
        Redux, and Node.js.
      </Paragraph>

      <Paragraph>
        I`m 17, passionate about coding and ready for my first opportunity in
        tech.
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

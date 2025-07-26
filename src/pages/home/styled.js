import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

export const Paragraph = styled.p`
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

export const ButtonGroup = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 1rem;

  a {
    padding: 10px 20px;
    background: #7159c1;
    color: #fff;
    border-radius: 8px;
    text-decoration: none;

    &:hover {
      opacity: 0.9;
    }
  }
`;

export const TechList = styled.div`
  margin-top: 1.5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  span {
    background: #eee;
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 0.9rem;
  }
`;

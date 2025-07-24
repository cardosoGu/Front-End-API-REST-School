import styled from 'styled-components';
import { FaPlus, FaTrash } from 'react-icons/fa';
import { warningColor } from '../../config/color';

export const StudentsList = styled.div`
  display: flex;
  flex-direction: column;
  div {
    padding: 10px 0;
    border-bottom: 1px solid;
  }

  div:hover {
    cursor: pointer;
    background: gray;
  }

  div > a {
    display: grid;

    grid-template-columns: 60px 1fr 1fr; /* foto | nome | email */
    align-items: center;
    gap: 50px;
    color: black;
    font-weight: bolder;
    text-decoration: none;
  }

  span {
    font-weight: 600;
  }
  button:hover {
    background-color: azure;
  }
`;

export const ProfilesPhotos = styled.img`
  width: 55px;
  height: 55px;
  border-radius: 50%;
`;
export const Title = styled.h1`
  font-size: 60px;
  font-weight: bolder;
  padding-bottom: 30px;
  text-align: center;
`;

export const Paragraph = styled.p`
  font-size: 60px;
  font-weight: bolder;
  padding-bottom: 30px;
  text-align: center;
`;
export const AddButton = styled.button`
  display: flex;
  margin-left: auto;
  background-color: aliceblue;
  border: solid 1px black;
  color: black;
  padding: 10px;
`;

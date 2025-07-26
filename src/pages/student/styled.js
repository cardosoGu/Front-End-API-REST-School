import styled from 'styled-components';
import { FaPlus, FaTrash } from 'react-icons/fa';
import { warningColor } from '../../config/color';

export const ProfilesPhotos = styled.img`
  width: 110px;
  height: 110px;
  border-radius: 50%;
  display: block;
  margin: 0 auto;
  margin-bottom: 30px;
  margin-top: 10px;
  cursor: pointer;
`;
export const Paragraph = styled.p`
  font-size: 25px;
  font-weight: 600;
`;

export const Photo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px auto; /* se quiser espaçamento vertical */
`;
export const Title = styled.h1`
  font-size: 60px;
  font-weight: bolder;
  padding-bottom: 30px;
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  label {
    font-size: 23px;
    font-weight: bolder;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
  }
  input {
    text-align: center;
    padding: 10px 100px;
    font-size: 17px;
    font-weight: 600;
    border: 1px solid black;
    margin-top: 10px;
    border-radius: 5px;
  }
  .buttons {
    display: flex;
  }
  button {
    margin: 10px; /* remove margens que podem quebrar o alinhamento */
    display: flex;
    justify-content: center;
    color: black;
    border: solid 1px black;
    background-color: white;
  }
  button:hover {
    background-color: aliceblue;
  }
  .return {
    margin-top: auto;
    font-weight: bolder;
    padding: 15px;
  }
  .divAdd {
    margin-bottom: 30px;
    margin-top: 10px;
    cursor: pointer;
  }
`;

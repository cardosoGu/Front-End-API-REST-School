import styled from 'styled-components';

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
    font-weight: 900px;
    border: 1px solid black;
    margin-top: 10px;
    border-radius: 5px;
  }
  button {
    margin: 10px;
    padding: 15px 100px;
  }
  .divAdd {
    margin-bottom: 30px;
    margin-top: 10px;
    cursor: pointer;
  }

  .photo {
    color: white;
    background-color: black;
    border-radius: 50%;
  }
`;

export const Title = styled.h1`
  font-size: 60px;
  text-align: center;
  font-weight: bolder;
  padding-bottom: 30px;
`;
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

export const ReturnHome = styled.button`
  margin-top: 30px;
`;

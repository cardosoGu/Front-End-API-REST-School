import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Container } from '../../styles/GlobalStyles';
import { Title, Form } from './styled';
import axios from '../../services/axios';

function AddStudent() {
  const navigate = useNavigate();
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [idade, setIdade] = useState('');
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { nome, sobrenome, email, idade, peso, altura };

    try {
      await axios.post('/alunos/store', data);
      toast.success('Student created Sucessfull!!');
      navigate('/students');
    } catch (err) {
      err.response.data.errors.map((erro) => toast.error(erro));
    }
  };

  return (
    <Container>
      <Title>New student</Title>
      <Form>
        <label htmlFor="Name">
          Name
          <input
            onChange={(e) => setNome(e.target.value)}
            type="text"
            id="Name"
            placeholder="Your Name"
          />
        </label>
        <label htmlFor="lastName">
          lastName
          <input
            onChange={(e) => setSobrenome(e.target.value)}
            type="text"
            id="lastName"
            placeholder="Your lastName"
          />
        </label>
        <label htmlFor="Email">
          Email
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            id="Email"
            placeholder="Your Email"
          />
        </label>
        <label htmlFor="Age">
          Age
          <input
            onChange={(e) => setIdade(e.target.value)}
            type="number"
            id="Age"
            placeholder="Your Age"
          />
        </label>
        <label htmlFor="Weight">
          Weight
          <input
            onChange={(e) => setPeso(e.target.value)}
            type="number"
            id="Weight"
            placeholder="Your Weight"
          />
        </label>
        <label htmlFor="Height">
          Height
          <input
            onChange={(e) => setAltura(e.target.value)}
            type="number"
            id="Height"
            placeholder="Your Height"
          />
        </label>
        <button type="submit" onClick={handleSubmit}>
          Login
        </button>
      </Form>
    </Container>
  );
}

export default AddStudent;

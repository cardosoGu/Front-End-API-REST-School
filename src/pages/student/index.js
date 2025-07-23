import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { FaBackspace, FaEdit, FaTrash, FaUserCircle } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { Container } from '../../styles/GlobalStyles';
import { Title, ProfilesPhotos, Form, Photo } from './styled';
import axios from '../../services/axios';

function Students() {
  const token = useSelector((state) => state.auth.token);
  const { id } = useParams();
  const navigate = useNavigate();

  // set todos os campos com '', mas atribuo valor logo a frente para enviar ao backend
  const [student, setStudent] = useState();
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [idade, setIdade] = useState('');
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');

  // atribui valor aos status do student, para nao enviar dado undefined e voltar retornar erro
  useEffect(() => {
    async function getData() {
      const response = await axios(`/alunos/${id}`);
      const { data } = response;
      setStudent(data);
      setNome(data.nome);
      setSobrenome(data.sobrenome);
      setEmail(data.email);
      setIdade(data.idade);
      setPeso(data.peso);
      setAltura(data.altura);
    }
    getData();
  }, [id]);

  const handleDelete = async (e) => {
    try {
      e.preventDefault();
      await axios.delete(`/alunos/delete/${id}`);
      navigate('/students');
    } catch (err) {
      if (Array.isArray(err.response?.data?.errors)) {
        err.response.data.errors.forEach((erro) => toast.error(erro));
      } else {
        toast.error(err.message || 'An error occurred');
      }
    }
  };
  const handleEdit = async (e) => {
    e.preventDefault();
    const body = { nome, sobrenome, email, idade, peso, altura };
    try {
      await axios.put(`/alunos/update/${id}`, body);
      navigate('/students');
    } catch (err) {
      if (Array.isArray(err.response?.data?.errors)) {
        err.response.data.errors.forEach((erro) => toast.error(erro));
      } else {
        toast.error(err.message || 'An error occurred');
      }
    }
  };

  return (
    <Container>
      <Title>Students</Title>

      {student ? (
        <>
          <Photo>
            {!student.foto || !student.foto.url ? (
              <FaUserCircle size={90} />
            ) : (
              <ProfilesPhotos src={student.foto.url} alt={student.nome} />
            )}
          </Photo>
          <Form>
            <label htmlFor="Name">
              Name
              <input
                type="text"
                defaultValue={student.nome}
                placeholder="Your Name"
                onChange={(e) => setNome(e.target.value)}
              />
            </label>
            <label htmlFor="lastName">
              lastName
              <input
                type="text"
                defaultValue={student.sobrenome}
                placeholder="Your lastName"
                onChange={(e) => setSobrenome(e.target.value)}
              />
            </label>
            <label htmlFor="Email">
              Email
              <input
                type="email"
                defaultValue={student.email}
                placeholder="Your Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label htmlFor="Age">
              Age
              <input
                type="number"
                defaultValue={student.idade}
                placeholder="Your Age"
                onChange={(e) => setIdade(e.target.value)}
              />
            </label>
            <label htmlFor="Weight">
              Weight
              <input
                type="number"
                defaultValue={student.peso}
                placeholder="Your Weight"
                onChange={(e) => setPeso(e.target.value)}
              />
            </label>
            <label htmlFor="Height">
              Height
              <input
                type="number"
                defaultValue={student.altura}
                placeholder="Your Height"
                onChange={(e) => setAltura(e.target.value)}
              />
            </label>
            <div className="buttons">
              <button type="submit" onClick={handleEdit}>
                <FaEdit size={25} />
              </button>

              <button type="submit" onClick={handleDelete}>
                <FaTrash size={25} />
              </button>
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="return"
              >
                Return
              </button>
            </div>
          </Form>
        </>
      ) : (
        <h2>Loading...</h2>
      )}
    </Container>
  );
}

export default Students;

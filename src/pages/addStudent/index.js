import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaCircleUser, FaPlus } from 'react-icons/fa6';
import { Container } from '../../styles/GlobalStyles';
import { Title, Form, ProfilesPhotos, Paragraph } from './styled';
import axios from '../../services/axios';
import Loading from '../../components/loading';

function AddStudent() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(false);
  const [photo, setPhoto] = useState('');
  const [preview, setPreview] = useState('');
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [idade, setIdade] = useState('');
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const fileInputRef = useRef(null);

  const handleFile = (e) => {
    const file = e.target.files[0];

    if (file) {
      const previewURL = URL.createObjectURL(file);
      setPreview(previewURL);

      setPhoto(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = { nome, sobrenome, email, idade, peso, altura };

    try {
      if (!nome || !sobrenome) {
        return toast.error('Student must have a name and last name');
      }
      if (altura > 2.1 || altura < 1) {
        return toast.error('invalid height');
      }
      if (peso < 40 || peso > 250) {
        return toast.error('invalid weight');
      }
      if (idade < 6 || idade > 30) {
        return toast.error('student age invalid');
      }

      const response = await axios.post('/alunos/store', data);
      const { id } = response.data;

      if (photo) {
        const formData = new FormData();
        formData.append('photo', photo);
        formData.append('aluno_id', id);

        await axios.post('/photos', formData);
      }
      toast.success('Student created Sucessfully!!');
      setLoading(false);
      return navigate('/students');
    } catch (err) {
      return err.response.data.errors.map((erro) => toast.error(erro));
    }
  };

  return (
    <Container>
      <Title>New student</Title>
      <Loading loading={loading} />
      <Form>
        <Paragraph>Student Photo</Paragraph>
        {photo ? (
          <div
            role="button"
            tabIndex={0}
            onClick={() => fileInputRef.current.click()}
            onKeyDown={(e) => {
              if (e.key === ' ') {
                fileInputRef.current.click();
              }
            }}
          >
            <ProfilesPhotos src={preview} />
          </div>
        ) : (
          <div
            role="button"
            tabIndex={0}
            className="divAdd"
            onMouseEnter={() => setImage(true)}
            onMouseLeave={() => setImage(false)}
            onClick={() => fileInputRef.current.click()}
            onKeyDown={(e) => {
              if (e.key === ' ') {
                fileInputRef.current.click();
              }
            }}
          >
            {!image ? (
              <FaCircleUser size={110} />
            ) : (
              <FaPlus size={110} className="photo" />
            )}
          </div>
        )}
        <input
          type="file"
          accept="image/*"
          onChange={handleFile}
          ref={fileInputRef}
          style={{ display: 'none' }}
        />
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
          Create
        </button>
      </Form>
    </Container>
  );
}

export default AddStudent;

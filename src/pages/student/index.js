import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FaTrash, FaUserEdit } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { FaCircleUser } from 'react-icons/fa6';
import { Container } from '../../styles/GlobalStyles';
import { Title, ProfilesPhotos, Form, Paragraph } from './styled';
import Loading from '../../components/loading';
import axios from '../../services/axios';

function Students() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Form states
  const [student, setStudent] = useState();
  const [loading, setLoading] = useState(false);
  const [photoAtual, setPhotoAtual] = useState(''); // current photo URL or preview
  const [photo, setPhoto] = useState(''); // new photo (File)
  const [preview, setPreview] = useState(''); // preview URL
  const [image, setImage] = useState(false); // hover state for icon
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [idade, setIdade] = useState('');
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const fileInputRef = useRef(null);

  // Generates preview when adding new photo
  useEffect(() => {
    if (photo) {
      const url = URL.createObjectURL(photo);
      setPhotoAtual(url);
    }
  }, [photo]);

  // Fetch student data
  useEffect(() => {
    async function getData() {
      setLoading(true);
      try {
        const response = await axios(`/alunos/${id}`);
        const { data } = response;

        setStudent(data);
        setNome(data.nome);
        setSobrenome(data.sobrenome);
        setEmail(data.email);
        setIdade(data.idade);
        setPeso(data.peso);
        setAltura(data.altura);
        setPhotoAtual(data.foto ? data.foto.url : '');
        setLoading(false);
      } catch (err) {
        if (Array.isArray(err.response?.data?.errors)) {
          err.response.data.errors.forEach((erro) => toast.error(erro));
        } else {
          toast.error(err.message || 'An error occurred');
        }
        navigate('/students');
      }
    }
    getData();
  }, [id, navigate]);

  // Handles file selection for upload
  const handleFile = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPreview(url);
      setPhoto(file);
    }
  };

  // Handles student deletion
  const handleDelete = async () => {
    try {
      setLoading(true);
      await axios.delete(`/alunos/delete/${id}`);
      if (photoAtual) {
        const formData = new FormData();
        formData.append('aluno_id', id);
        axios.delete('photos/delete', formData);
      }
      toast.success('Student deleted');
      setLoading(false);
      navigate('/students');
    } catch (err) {
      if (Array.isArray(err.response?.data?.errors)) {
        err.response.data.errors.forEach((erro) => toast.error(erro));
      } else {
        toast.error(err.message || 'An error occurred');
      }
    }
  };

  // Handles student update
  const handleEdit = async () => {
    const body = { nome, sobrenome, email, idade, peso, altura };

    try {
      setLoading(true);

      await axios.put(`/alunos/update/${id}`, body);

      if (photo) {
        const formData = new FormData();
        formData.append('photo', photo);
        formData.append('aluno_id', id);

        if (photoAtual) {
          await axios.put('/photos/update', formData);
        } else {
          await axios.post('/photos', formData);
        }
      }
      toast.success('Student edited');
      setLoading(false);
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
      <Loading loading={loading} />
      <Title>Students</Title>

      {student ? (
        <Form>
          <Paragraph>Student Photo</Paragraph>

          {/* Photo preview or add icon */}
          {photoAtual ? (
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
              <ProfilesPhotos src={photoAtual} />
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
              {!image ? <FaCircleUser size={110} /> : <FaUserEdit size={110} />}
            </div>
          )}

          {/* Hidden file input */}
          <input
            type="file"
            accept="image/*"
            onChange={handleFile}
            ref={fileInputRef}
            style={{ display: 'none' }}
          />

          {/* Form fields */}
          <label htmlFor="student-name">
            Name
            <input
              id="student-name"
              type="text"
              defaultValue={student.nome}
              placeholder="Your Name"
              onChange={(e) => setNome(e.target.value)}
            />
          </label>
          <label htmlFor="student-lastname">
            Last Name
            <input
              id="student-lastname"
              type="text"
              defaultValue={student.sobrenome}
              placeholder="Your Last Name"
              onChange={(e) => setSobrenome(e.target.value)}
            />
          </label>
          <label htmlFor="student-email">
            Email
            <input
              id="student-email"
              type="email"
              defaultValue={student.email}
              placeholder="Your Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label htmlFor="student-age">
            Age
            <input
              id="student-age"
              type="number"
              defaultValue={student.idade}
              placeholder="Your Age"
              onChange={(e) => setIdade(e.target.value)}
            />
          </label>
          <label htmlFor="student-weight">
            Weight
            <input
              id="student-weight"
              type="number"
              defaultValue={student.peso}
              placeholder="Your Weight"
              onChange={(e) => setPeso(e.target.value)}
            />
          </label>
          <label htmlFor="student-height">
            Height
            <input
              id="student-height"
              type="number"
              defaultValue={student.altura}
              placeholder="Your Height"
              onChange={(e) => setAltura(e.target.value)}
            />
          </label>

          {/* Action buttons */}
          <div className="buttons">
            <button type="button" onClick={handleDelete}>
              <FaTrash size={25} />
            </button>
            <button type="button" onClick={handleEdit} className="return">
              Save
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
      ) : (
        <h2>Loading...</h2>
      )}
    </Container>
  );
}

export default Students;

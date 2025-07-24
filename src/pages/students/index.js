import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUserCircle, FaEdit, FaWindowClose, FaPlus } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { Container } from '../../styles/GlobalStyles';
import { Title, ProfilesPhotos, StudentsList, AddButton } from './styled';
import axios from '../../services/axios';
import Loading from '../../components/loading';

function Students() {
  const loading = useSelector((state) => state.auth.loading);
  const navigate = useNavigate();
  const [students, setStudents] = useState([]);
  useEffect(() => {
    async function getData() {
      const response = await axios('/alunos');
      setStudents(response.data);
    }
    getData();
  }, []);

  return (
    <Container>
      <Loading loading={loading} />
      <Title>Students</Title>
      <StudentsList>
        <AddButton onClick={() => navigate('/student/store')}>
          <FaPlus />
        </AddButton>
        {students.map((student) => (
          <div key={student.id}>
            <Link to={`/student/edit/${student.id}`}>
              {!student.foto || !student.foto.url ? (
                <FaUserCircle size={55} />
              ) : (
                <ProfilesPhotos src={student.foto.url} alt={student.nome} />
              )}
              <span>{`${student.nome} ${student.sobrenome}`}</span>

              <span>{student.email}</span>
            </Link>
          </div>
        ))}
      </StudentsList>
    </Container>
  );
}

export default Students;

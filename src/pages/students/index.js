import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle, FaEdit, FaWindowClose } from 'react-icons/fa';
import { Container } from '../../styles/GlobalStyles';
import { Title, ProfilesPhotos, StudentsList } from './styled';
import axios from '../../services/axios';

function Students() {
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
      <Title>Students</Title>
      <StudentsList>
        {students.map((student) => (
          <div key={student.id}>
            <Link to={`/student/edit/${student.id}`}>
              {!student.foto || !student.foto.url ? (
                <FaUserCircle size={55} />
              ) : (
                <ProfilesPhotos src={student.foto.url} alt={student.nome} />
              )}
              <span>{student.nome}</span>
              <span>{student.email}</span>
            </Link>
          </div>
        ))}
      </StudentsList>
    </Container>
  );
}

export default Students;

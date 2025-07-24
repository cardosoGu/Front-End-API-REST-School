import React, { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from '../../styles/GlobalStyles';
import { Title, Form, Paragraph } from './styled';

import Loading from '../../components/loading';
import { updateUser } from '../../store/updateUserThunk';
import { setNewUser } from '../../store/authSlice';

function UpdateUser() {
  const error = useSelector((state) => state.auth.error);
  const loading = useSelector((state) => state.auth.loading);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const user = useSelector((state) => state.auth.payload.user);
  const location = useLocation();

  const dispatch = useDispatch();

  const [email, setEmail] = useState(user.email);
  const [nome, setNome] = useState(user.name);
  const [password, setPassword] = useState('');
  const [senhaAtual, setSenhaAtual] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = { nome, email, password, senhaAtual };
      // unwrap, to return only payload
      const updatedUser = await dispatch(updateUser(data)).unwrap();
      dispatch(setNewUser(updatedUser)); // Atualiza o estado auth com o user novo
    } catch (err) {
      if (err) {
        if (err.errors && Array.isArray(err.errors)) {
          err.errors.forEach((errored) => toast.error(errored));
        } else {
          toast.error(err.error);
        }
      }
    }
  };
  // if error midify, there are errors, so show errors
  useEffect(() => {
    if (error) {
      if (error.errors && Array.isArray(error.errors)) {
        error.errors.forEach((err) => toast.error(err));
      } else {
        toast.error(error.error);
      }
    }
  }, [error]);
  if (!isLoggedIn) {
    return <Navigate to="/" replace state={{ prevPath: location.pathname }} />;
  }

  return (
    <Container>
      <Loading loading={loading} />
      <Title>Edit user</Title>
      <Paragraph>If you don`t want to change your password</Paragraph>
      <Paragraph>ignore passwords</Paragraph>
      <Form>
        <label htmlFor="nome">
          name:
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Your name"
          />
        </label>
        <label htmlFor="email">
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
          />
        </label>

        <label htmlFor="currentPassword">
          Current password:
          <input
            type="password"
            onChange={(e) => setSenhaAtual(e.target.value)}
            placeholder="Current password"
          />
        </label>
        <label htmlFor="newPassword">
          New Password:
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="New password"
          />
        </label>
        <button type="submit" onClick={handleSubmit}>
          Save
        </button>
      </Form>
    </Container>
  );
}

export default UpdateUser;

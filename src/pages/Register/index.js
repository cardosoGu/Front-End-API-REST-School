import React, { useEffect, useState } from 'react';
import { Link, Navigate, useLocation } from 'react-router-dom';
import { isEmail } from 'validator';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from '../../styles/GlobalStyles';
import { Title, Form } from './styled';
import { registerUser } from '../../store/authThunk';

function Register() {
  const error = useSelector((state) => state.auth.error);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const location = useLocation();

  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [nome, setNome] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = { nome, email, password };
    dispatch(registerUser(data));
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
  if (isLoggedIn) {
    return <Navigate to="/" replace state={{ prevPath: location.pathname }} />;
  }

  return (
    <Container>
      <Title>Register</Title>

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
        <label htmlFor="password">
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Your password"
          />
        </label>
        <button type="submit" onClick={handleSubmit}>
          Register now!
        </button>

        <Link to="/user/login">do you have a account? Login here!</Link>
      </Form>
    </Container>
  );
}

export default Register;

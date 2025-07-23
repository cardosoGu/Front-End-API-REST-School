import React, { useEffect, useState } from 'react';
import { Link, Navigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { Container } from '../../styles/GlobalStyles';
import { Title, Form } from './styled';
import { loginUser } from '../../store/authThunk';

function Login() {
  const location = useLocation();
  const error = useSelector((state) => state.auth.error);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = { email, password };
    dispatch(loginUser(data));
  };
  useEffect(() => {
    if (!error) return;
    const errors = error.errors || error;

    if (Array.isArray(errors)) {
      errors.map((err) => toast.error(err));
    } else toast.error(errors);
  }, [error]);

  if (isLoggedIn) {
    return <Navigate to="/" replace state={{ prevPath: location.pathname }} />;
  }
  return (
    <Container>
      <Title>Login</Title>
      <Form>
        <label htmlFor="email">
          Email
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            id="email"
            placeholder="Your email"
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            id="password"
            placeholder="Your password"
          />
        </label>
        <button type="submit" onClick={handleSubmit}>
          Login
        </button>
        <Link to="/user/register">Don`t have a account? register here!</Link>
      </Form>
    </Container>
  );
}

export default Login;

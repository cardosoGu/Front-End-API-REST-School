import React, { useEffect, useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { Container } from '../../styles/GlobalStyles';
import { Title, Form } from './styled';
import { loginUser } from '../../store/authThunk';
import Loading from '../../components/loading';

function Login() {
  const loading = useSelector((state) => state.auth.loading);
  const location = useLocation();
  const navigate = useNavigate();
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

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/', { state: { prevPath: location.pathname } });
    }
  }, [isLoggedIn, navigate, location.pathname]);

  return (
    <Container>
      <Loading loading={loading} />
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

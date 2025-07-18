import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
import AppRoutes from './routes';

function App() {
  return (
    <BrowserRouter>
      <ToastContainer autoClose={5000} />
      <GlobalStyles />
      <Header />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;

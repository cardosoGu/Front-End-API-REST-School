import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';

import store from './store';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
import AppRoutes from './routes';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ToastContainer autoClose={5000} />
        <GlobalStyles />
        <Header />
        <AppRoutes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;

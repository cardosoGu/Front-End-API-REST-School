import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';

import { PersistGate } from 'redux-persist/integration/react';
import store, { Persistor } from './store';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
import AppRoutes from './routes';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={Persistor}>
        <BrowserRouter>
          <ToastContainer autoClose={5000} />
          <GlobalStyles />
          <Header />
          <AppRoutes />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;

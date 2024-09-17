import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { store } from './Store/store';
import {Provider} from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { UserAuthContextProvider } from './context/UserAuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserAuthContextProvider>
    <BrowserRouter>
    <Provider store={store}>
    <App />
    </Provider>
    </BrowserRouter>
    </UserAuthContextProvider>
  </React.StrictMode>
);



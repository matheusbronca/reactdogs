import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { UserStorage } from './context/UserContext';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserStorage>
        <App />
      </UserStorage>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

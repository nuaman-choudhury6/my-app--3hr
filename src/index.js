// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ModalProvider } from './contexts/ModalContext'; // Import ModalProvider

ReactDOM.render(
  <React.StrictMode>
    <ModalProvider> {/* Wrap App with ModalProvider */}
      <App />
    </ModalProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './layout/Header';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Header />
    <App />
  </>
);
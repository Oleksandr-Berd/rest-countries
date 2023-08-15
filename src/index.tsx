import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import ThemeContextProvider from './context/ThemeContextProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <ThemeContextProvider>
    <BrowserRouter>
      <App />
      </BrowserRouter>
    </ThemeContextProvider>
);

reportWebVitals();

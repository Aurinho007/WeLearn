import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from './Contexts/ThemeContext';
import  Router  from './routes';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  </React.StrictMode>
);

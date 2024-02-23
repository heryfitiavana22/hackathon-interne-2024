import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterDom } from './router-dom';
import { Toaster } from 'sonner';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterDom />
    <Toaster />
  </React.StrictMode>,
);

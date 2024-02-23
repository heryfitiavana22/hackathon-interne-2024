import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterDom } from './router-dom';
import { Toaster } from 'sonner';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterDom />
    </QueryClientProvider>
    <Toaster />
  </React.StrictMode>,
);

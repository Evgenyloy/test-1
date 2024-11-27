import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './style/style.scss';
import App from './components/app/App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

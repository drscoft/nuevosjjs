import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { EffectProvider } from './context/EffectContext';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <EffectProvider>
      <App />
    </EffectProvider>
  </StrictMode>
);

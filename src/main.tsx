import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/app/App.tsx';
import { Provider } from 'react-redux';
import './style/style.scss';
import store from './store/store.tsx';

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>
);

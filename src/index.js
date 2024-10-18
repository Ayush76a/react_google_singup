import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { GoogleOAuthProvider } from '@react-oauth/google';

const client_id="475904526860-ck3h4ohk35hom7gd213cvu9all68kh0e.apps.googleusercontent.com"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <GoogleOAuthProvider clientId={client_id}>
    <App />
  </GoogleOAuthProvider>  
  </React.StrictMode>
);

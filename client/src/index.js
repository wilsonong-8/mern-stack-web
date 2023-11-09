import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css';
import './index.css';
import App from './App';
import { AppProvider } from './context/appContext';
import { LoadScript } from '@react-google-maps/api';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <AppProvider>
    <LoadScript googleMapsApiKey="AIzaSyC24DfMQJl-78Gy7jAbEKZyw13p9EL0LX8">
        <App />
    </LoadScript>
      </AppProvider>
  </React.StrictMode>
);

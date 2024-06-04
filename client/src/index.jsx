import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './context/auth';
import { SelectedProvider } from './context/selected';
import { SocketProvider } from './context/socket';
import { OnlineProvider } from './context/online';
import "antd/dist/reset.css";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <SelectedProvider>
        <SocketProvider>
          <OnlineProvider>
            <App />
            <Toaster />
          </OnlineProvider>
        </SocketProvider>
      </SelectedProvider>
    </AuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

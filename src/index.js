import React from 'react';
import { AuthContextProvider } from './Store/auth-context';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
    <AuthContextProvider>
     <App />,
    </AuthContextProvider>,
     document.getElementById('root'));

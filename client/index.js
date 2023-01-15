import React from 'react';
import App from './components/App.js';
import { createRoot } from 'react-dom/client';

import LoginPage from './components/LoginPage.js';
import SignupPage from './components/SignupPage.js';

// const container = document.getElementById('root');
// const root = createRoot(container);
// root.render(<App /> );

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<SignupPage /> );
import React from 'react';
import { createRoot } from 'react-dom/client';  // <-- notice this!
import App from './App';
import './styles.css';

const container = document.getElementById('root');
const root = createRoot(container); // createRoot instead of render
root.render(<App />);

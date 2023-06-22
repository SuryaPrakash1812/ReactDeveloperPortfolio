import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Head  from './components/card.js';
import Navbar from './components/Nav';

import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
   <Head />
  
   
  </React.StrictMode>
);


reportWebVitals();

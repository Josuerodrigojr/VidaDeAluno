import React from 'react';
import { createRoot } from "react-dom/client";
import './index.css';
import Cabecalho from './pages/cabecalho';

import Login from './pages/login'
import App from './App'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import reportWebVitals from './reportWebVitals';

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
     <BrowserRouter>
    <Cabecalho/>
    <Routes>
  <Route path='/' element={<App />} />
  <Route path='/login' element={<Login/>}/>
    </Routes> 
    </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();

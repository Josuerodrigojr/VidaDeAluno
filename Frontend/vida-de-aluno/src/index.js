import React from 'react';
import { createRoot } from "react-dom/client";
import './index.css';
import Cabecalho from './pages/cabecalhoComLogin';
import Cadastro from './pages/cadastro';
import CadastroAluno from './pages/cadastro/cadastroAluno'
import CadastroProfessor from './pages/cadastro/cadastroProfessor'
import CadastroEscola from './pages/cadastro/cadastroEscola'
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
  <Route path='/cadastro' element={<Cadastro/>}/>
  <Route path='/cadastroaluno' element={<CadastroAluno/>}/>
  <Route path='/cadastroprofessor' element={<CadastroProfessor/>}/>
  <Route path='/cadastroescola' element={<CadastroEscola/>}/>
  </Routes> 
    </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();

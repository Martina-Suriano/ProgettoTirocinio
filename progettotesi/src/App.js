import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Carrello from './pages/Carrello';
import Negozio from './pages/Negozio';


function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="caramelle" element={<Negozio tipoProdotto="Caramella"/>} />
          <Route path="cioccolata" element={<Negozio tipoProdotto="Cioccolata"/>} />
          <Route path="eventi" element={<Negozio tipoProdotto="Eventi"/>} />
          <Route path="carrello" element={<Carrello nomeUtente="Martina"/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
  
}

export default App;
